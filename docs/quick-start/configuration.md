# 配置你的应用

在 EziApp 应用中，你需要在项目根目录下创建一个 ezi.config.ts 文件，用于描述应用的基本信息、窗口配置以及托盘菜单。配置文件通过 defineConfig 方法导出，框架会自动读取并应用。  

::: tip
- 如果你使用 ```npm create eziapp@latest``` 初始化项目，配置文件会自动创建
:::

## 使用 TypeScript 类型提示

由于 **defineConfig** 已经内置了完整的类型定义，你在编写配置时会自动获得 **智能提示** 和 **类型检查**。这意味着：
- 写属性时会自动补全可选项。
- 错误的类型会在编辑器和编译阶段提示。
- 注释和 JSDoc 会直接显示在编辑器中，帮助你理解每个字段的作用。

## 示例

::: code-group

```TypeScript [ezi.config.ts]
import { defineConfig } from "@eziapp-org/bridge";

export default defineConfig({
  application: {
    name: "MyEziApp",
    package: "com.ezi.myapp",
    version: "1.0.0",
    description: "我的 Ezi 应用",
    author: "张三",
    icon: "image/icon.png",
    singleInstance: true,
  },
  window: {
    title: "主窗口",
    size: { width: 1024, height: 768 },
    position: "center",
    backgroundMode: "mica",
    theme: "system",
    accentColor: "#4CAF50",
    splashscreen: {
      src: "image/logo.png",
      size: { width: 150, height: 150 },
    },
    resizable: true,
    minimizable: true,
    maximizable: true,
    alwaysOnTop: false,
  },
  tray: [
    { type: "normal", label: "新建窗口" },
    { type: "separator", label: "" },
    { type: "normal", label: "关于" },
  ],
});
```

:::

## defineConfig 
转到 [配置](/api-reference/config) 查看定义。  


## application

转到 [应用](/api-reference/application) 查看定义。  

::: tip
package 字段应当设置为全局唯一的标识符，通常推荐采用 **域名倒序** 的命名方式。  
EziApp 使用 package 区分不同的应用程序并储存不同应用程序的数据，如果包名冲突会导致应用 **拒绝启动** 或者为了安全起见的 **应用程序数据清除**。
:::

## window

转到 [窗口](/api-reference/window) 查看定义。

## tray

转到 [托盘](/api-reference/tray) 查看定义。