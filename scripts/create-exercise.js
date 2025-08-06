import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数
const exerciseName = process.argv[2];

if (!exerciseName) {
	console.error("请提供练习名称：npm run create <exercise-name>");
	process.exit(1);
}

// 创建练习目录
const exercisesDir = path.resolve(__dirname, "../exercises");
const exerciseDir = path.join(exercisesDir, exerciseName);

if (fs.existsSync(exerciseDir)) {
	console.error(`练习 "${exerciseName}" 已存在！`);
	process.exit(1);
}

// 创建目录
fs.mkdirSync(exerciseDir, { recursive: true });

// HTML 模板
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${exerciseName} - Three.js练习</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <canvas class="webgl"></canvas>
    <script type="module" src="./script.js"></script>
</body>
</html>`;

// CSS 模板
const cssTemplate = ``;

// JavaScript 模板
const jsTemplate = `import * as THREE from 'three';
import gsap from 'gsap';
`;

// 写入文件
fs.writeFileSync(path.join(exerciseDir, "index.html"), htmlTemplate);
fs.writeFileSync(path.join(exerciseDir, "style.css"), cssTemplate);
fs.writeFileSync(path.join(exerciseDir, "script.js"), jsTemplate);

console.log(`✅ 练习 "${exerciseName}" 创建成功！`);
console.log(`📁 位置: exercises/${exerciseName}/`);
console.log(`🚀 运行: npm run dev`);
console.log(`🌐 访问: http://localhost:5173/exercises/${exerciseName}/`);
