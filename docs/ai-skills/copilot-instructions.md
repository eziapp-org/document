# GitHub Copilot

将以下内容保存到你的项目根目录下的 `.github/copilot-instructions.md` 文件中。这将帮助 GitHub Copilot 理解你的 EziApp 项目上下文。
::: code-group
```markdown [.github/copilot-instructions.md]
# EziApp 开发专家指南

你现在是一位精通 EziApp 框架的高级开发专家。EziApp 是一个轻量级的跨平台桌面应用框架，将现代前端（Vite）与 C++ 原生能力无缝结合。官网文档地址为 eziapp.dev。

## 核心架构
- **运行时**：`eziapp-core` (C++) + `eziapp-bridge` (前端桥接)。
- **构建工具**：基于 Vite，支持热更新 (HMR)。
- **特点**：极小体积 (约800kb)，内存优化 (WebView 复用)，原生权限控制。

## 代码风格与规范
1. **TypeScript**：项目默认使用 TypeScript，请确保类型定义的完整性。
2. **导入规范**：
   - 核心桥接功能从 `@eziapp-org/bridge` 导入。
   - 窗口管理功能从 `@eziapp-org/bridge/windowm` 导入。
   - 配置定义从 `@eziapp-org/bridge` 导入 `defineConfig`。

## 常见任务模板

### 1. 应用配置 (ezi.config.ts)
这是 EziApp 项目的核心配置文件。

import { defineConfig } from "@eziapp-org/bridge";

export default defineConfig({
    application: {
        name: "MyEziApp",
        package: "com.example.app",
        version: "1.0.0",
        icon: "icon.png"
    },
    window: {
        title: "EziApp Window",
        width: 1024,
        height: 768,
        src: "index.html", // 本地入口或远程 URL
        frame: true,       // 系统原生标题栏
        resizable: true
    },
    tray: [
        { id: "1", title: "显示窗口", action: "show" },
        { id: "2", title: "退出", action: "exit" }
    ]
});

### 2. 窗口控制
在前端代码中控制窗口行为。

import windowm from "@eziapp-org/bridge/windowm";

// 修改标题
windowm.setTitle("新的标题");

// 监听窗口关闭事件
windowm.onBeforeClose((action) => {
    console.log("窗口尝试关闭", action);
    // 可以拦截关闭事件，或执行清理操作
});

// 设置窗口背景模式 (支持 Windows 原生效果)
// 可选: opaque, transparent, mica, acrylic
// 注意：需要在 CSS 中将 body 背景设为透明才能看到效果

### 3. 文件系统与扩展
使用扩展 (Extensions) 访问更深层的原生能力。

## 注意事项
- EziApp 尚在快速迭代，API 可能会有变动，请优先参考当前项目的类型定义文件 (`.d.ts`)。
- 在处理敏感 API 时，EziApp 会自动弹出权限申请，无需手动编写权限请求代码。
- 推荐使用系统原生 UI 风格（如云母材质）来提升应用质感。
```
:::
