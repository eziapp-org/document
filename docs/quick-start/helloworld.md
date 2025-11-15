# 创建你的第一个 EziApp 应用

## 开发环境

在开始之前，请确保你已经安装了以下工具：

- [Node.js](https://nodejs.org/) **版本 22.12+**
- [npm](https://www.npmjs.com/)  通常会在node.js安装包中自带  

你可以通过以下命令检查环境是否安装成功：

::: code-group
```bash [bash]
node -v
npm -v
```
:::
如果能正确输出版本号，说明环境已准备就绪。  

::: warning
目前 EziApp 仅支持Windows平台，其他平台的支持仍在开发中。
:::

## 创建项目

你可以通过 `npm create eziapp@latest` 命令快速生成一个 EziApp 项目，我们将在后续介绍关于它的更多用法。  
以下示例会直接创建 EziApp 的 **Hello World** 应用：

::: code-group

``` bash [npm]
npm create eziapp@latest -- --helloworld
```

:::

- 如果当前目录为空，EziApp 会直接将项目创建在当前文件夹下。  
- 如果当前目录已有文件，CLI 会提示你输入项目目录名称。  

## 项目结构

生成的项目目录大致如下：
```
HelloWorld/
├── node_modules/*      # 项目依赖
├── public/image/       # 静态资源目录
│   └── logo.png
├── src/                # 源代码目录
│   ├── main.css
│   └── main.ts
├── index.html          # 应用入口 HTML
├── ezi.config.ts       # EziApp 配置文件
└── package.json        # 项目依赖与脚本配置
```
你可能已经注意到，在一个 EziApp 项目中，index.html 在项目最外层而不是在 public 文件夹内。这是 Vite 有意而为之的：转到 [index.html 与项目根目录](https://vite.dev/guide/#index-html-and-project-root) 查看更多信息。

## 调试运行应用

使用以下命令以调试模式运行 EziApp 应用：
::: code-group
```bash [bash]
npm run dev
```
:::
你可以修改 src/main.ts 或 index.html，保存后应用程序界面会自动刷新。  
修改 ezi.config.ts 需要重新运行 ```npm run dev``` 得到最新结果。

## 构建与发布
转到 [构建与发布](/quick-start/release) 查看更多信息。

## 常见问题
- **暂无问题**  
暂无问题