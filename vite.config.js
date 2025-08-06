import restart from "vite-plugin-restart";
import { resolve } from "path";
import fs from "fs";

// 动态获取所有练习文件夹
function getExercises() {
	const exercisesDir = resolve(__dirname, "exercises");
	if (!fs.existsSync(exercisesDir)) {
		return {};
	}

	const exercises = {};
	const folders = fs.readdirSync(exercisesDir, { withFileTypes: true });

	folders.forEach(folder => {
		if (folder.isDirectory()) {
			const indexPath = resolve(exercisesDir, folder.name, "index.html");
			if (fs.existsSync(indexPath)) {
				exercises[folder.name] = indexPath;
			}
		}
	});

	return exercises;
}

const exercises = getExercises();

console.log("已找到练习：", Object.keys(exercises).length, "个");
console.log("练习列表：", Object.keys(exercises).join(", "));

export default {
	root: "./", // 设置根目录为项目根目录
	publicDir: "static/", // 静态资源目录
	server: {
		host: true,
		open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env)
	},
	build: {
		outDir: "dist",
		emptyOutDir: true,
		sourcemap: true,
		rollupOptions: {
			input: {
				// 如果有 src/index.html，也包含进来
				...(fs.existsSync(resolve(__dirname, "src/index.html")) ? { main: resolve(__dirname, "src/index.html") } : {}),
				// 动态添加所有练习
				...exercises
			}
		}
	},
	plugins: [restart({ restart: ["static/**", "exercises/**"] })]
};
