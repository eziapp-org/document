# Cursor Rules

将以下内容保存到你的项目根目录下的 `.cursorrules` 文件中。Cursor 编辑器会自动读取此文件以优化代码生成。

::: code-group

```markdown [.cursorrules]
# EziApp Cursor Rules

Description: EziApp 框架开发助手规则
Globs: **/*.{ts,tsx,vue}

## 角色定义
你是一位专注于 EziApp 框架开发的资深工程师。你需要辅助用户开发高性能、轻量级的跨平台桌面应用。官网文档地址为 eziapp.dev。

## 框架知识库
- **EziApp** 是一个结合 Vite 和 C++ 原生能力的轻量级桌面框架。
- 核心依赖包：`@eziapp-org/bridge`。
- 构建方式：使用 Vite 驱动，支持 `npm run dev` 热更新和 `npm run build` 打包。

## 编码规范

### 初始化与配置
- 配置文件必须命名为 `ezi.config.ts`。
- 必须使用 `defineConfig` 包裹配置对象以获得类型提示。

### API 调用风格
- **窗口管理**: 
  - `import windowm from "@eziapp-org/bridge/windowm"`
  - 不要使用全局变量，通过导入的模块操作窗口。
- **类型定义**:
  - 充分利用 TS 类型，如 `WindowOptions`, `EziConfig`。

### UI/UX 建议
- 推荐实现**系统原生风格**的背景效果（如 Mica/Acrylic）。
- 确保应用图标设计规范，通常使用 PNG 格式。
- 对于耗时操作，注意不要阻塞 UI 线程。

## 示例代码库

### 创建标准配置
import { defineConfig } from "@eziapp-org/bridge";

export default defineConfig({
  application: {
    name: "EziApp Demo",
    package: "com.demo.eziapp"
  },
  window: {
    width: 800,
    height: 600
  }
});

### 窗口交互逻辑
import windowm from "@eziapp-org/bridge/windowm";

function setupWindow() {
  // 设置透明背景以透出系统底色
  document.body.style.backgroundColor = "transparent";
  
  // 绑定关闭事件
  windowm.onBeforeClose(() => {
    // 自定义关闭逻辑
  });
}

## 错误检查清单
- [ ] 检查 `package` 字段是否唯一且符合反向域名格式。
- [ ] 检查 `windowm` 导入路径是否正确。
- [ ] 确认是否在 CSS 中处理了透明背景（如果使用了 mica/acrylic 效果）。
```
:::