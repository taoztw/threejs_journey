# 🎯 Three.js & GSAP 练习项目

一个简单而高效的 Three.js 和 GSAP 练习环境，所有练习共享一个 `node_modules`，避免重复安装依赖。

## 📁 项目结构

```
project-root/
├── package.json                 # 共享的依赖管理
├── vite.config.js              # Vite 配置（支持多入口）
├── index.html                  # 主页面（练习列表）
├── static/                     # 共享静态资源
├── scripts/
│   └── create-exercise.js      # 创建新练习的脚本
├── exercises/                  # 所有练习文件夹
│   ├── 01-basic-scene/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── 02-animations/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── ...
└── node_modules/               # 共享依赖
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 访问练习

- 主页面：http://localhost:5173/
- 具体练习：http://localhost:5173/exercises/01-basic-scene/

## 🛠️ 使用方法

### 创建新练习

```bash
npm run create <练习名称>
```

例如：

```bash
npm run create 03-camera-controls
npm run create 04-materials
npm run create 05-lights
```

这个命令会自动创建：

- `exercises/练习名称/index.html`
- `exercises/练习名称/script.js`
- `exercises/练习名称/style.css`

### 可用的脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览构建结果
- `npm run create <name>` - 创建新练习

## 📦 包含的依赖

- **Three.js** (^0.174.0) - 3D 图形库
- **GSAP** (^3.13.0) - 动画库
- **Vite** (^6.2.2) - 构建工具
- **vite-plugin-restart** - 静态文件变化时重启服务器

## 🎨 练习模板

每个新练习都包含以下模板：

### HTML 模板

- 基础的 HTML5 结构
- 引入 CSS 和 JS 文件
- Canvas 元素用于 Three.js 渲染

### CSS 模板

- 全屏画布样式
- 去除默认边距和滚动条

### JavaScript 模板

- Three.js 基础场景设置
- 相机控制器 (OrbitControls)
- 响应式窗口调整
- 动画循环
- GSAP 已导入并可使用

## 🌟 特性

✅ **简单易用** - 无需复杂的 monorepo 配置  
✅ **共享依赖** - 只需一个 node_modules  
✅ **快速创建** - 一键生成新练习  
✅ **热重载** - 文件变化自动刷新  
✅ **多入口支持** - 每个练习独立运行  
✅ **模板系统** - 统一的项目结构
