# 创建你的第一个 EziApp 应用

## 1、开发环境

在开始之前，请确保你已经安装了以下工具：

- [Node.js](https://nodejs.org/)&nbsp;&nbsp;**版本 22.12+**
- [npm](https://www.npmjs.com/)&nbsp;&nbsp;通常会在node.js安装包中自带  

你可以通过以下命令检查环境是否安装成功：

::: code-group
```bash [bash]
node -v
npm -v
```
:::
如果能正确输出版本号，说明环境已准备就绪。  

::: warning
目前 EziApp 仅支持 Windows 平台，其他平台的支持仍在开发中。
:::

## 2、创建项目

你可以通过 `npm create eziapp` 命令快速生成一个 EziApp 项目。
以下示例会指引你创建 EziApp 的 **Hello World** 应用：

::: code-group

``` bash [npm]
npm create eziapp
```

:::
执行后，npm 会下载并运行 create-eziapp 包，并引导你完成以下步骤：

### a、 选择项目初始化方式
::: code-group
``` [bash]
☘  Select setup option:
  > Hello World Demo
    From EziApp Template
    From Existing Vite Project
```
:::

在这里直接按下回车键来选择默认值 ```Hello World Demo```，从 Hello Wolrd 演示创建项目。

### b、输入项目名称
::: code-group
``` [bash]
☘  Project name:
  > eziapp-project

```
:::
在这里可以直接按下回车来使用默认值 ```eziapp-project```来创建目录，同时也可以输入你想要创建的项目文件夹名称，然后按下回车键确认。  
如果目录不为空，CLI 会提醒你是否删除已有文件，保证项目初始化的安全性。

### c、完成项目创建

::: code-group
``` [bash]
✔  Hello World project setup is complete!

Next steps:

    cd eziapp-project
    npm install
    npm run dev
```
:::
当你看到此画面，说明项目已经创建。后续你可以通过 ```cd eziapp-project``` 打开项目路径，通过 ```npm install``` 安装项目依赖。
通过 ```npm run dev``` 来 [调试运行应用](#4、调试运行应用)。


## 3、项目结构

生成的项目目录大致如下：
```
HelloWorld/
├── node_modules/*      # 项目依赖
├── public/image/       # 静态资源目录
│   └── ezi-logo.png
├── src/                # 源代码目录
│   ├── main.css
│   └── main.ts
├── index.html          # 应用入口 HTML
├── ezi.config.ts       # EziApp 配置文件
└── package.json        # 项目依赖与脚本配置
```
你可能已经注意到，在一个 EziApp 项目中，index.html 在项目最外层而不是在 public 文件夹内。这是 Vite 有意而为之的：转到 [index.html 与项目根目录](https://vite.dev/guide/#index-html-and-project-root) 查看更多信息。

## 4、调试运行应用

使用 ```npm run dev``` 命令以调试模式运行 EziApp 应用：

::: code-group
``` [bash]
$ npm run dev

> dev
> eziapp-builder --mode debug

! no vite.config.ts found, using default config.
╔════════════════════════════════════════════════╗
║ VITE v7.2.2 ready in 54 ms                     ║
║                                                ║
║  ➜  devEntry: http://localhost:5173/          ║
║  ➜  EziApp:   helloworld running [pid:111104] ║
║  ➜  Package:  com.ezi.app.helloworld.debug    ║
║  ➜  Started:  2025/11/17 20:47:52             ║
╚════════════════════════════════════════════════╝
20:47:52 [helloworld] Hello from TypeScript!
```
:::

你可以尝试修改 ```src/main.ts``` 或 ```index.html```，保存后应用程序界面会自动刷新。
::: tip
修改 ```ezi.config.ts``` 需要重新执行 ```npm run dev``` 得到最新结果。
:::

## 5、构建与发布
转到 [构建与发布](/quick-start/release) 查看更多信息。

## 常见问题
- **```npm run dev``` 时提示： 'eziapp-builder' 不是内部或外部命令，也不是可运行的程序或批处理文件。**  
使用 ```npm install``` 安装依赖后再继续操作。