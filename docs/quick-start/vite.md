# 从 vite 项目创建应用

## 1、开发环境
[点击这里](/quick-start/helloworld#1、开发环境) 查看开发环境说明



## 2、创建项目

你需要导航到对应的 vite 项目目录下，然后通过以下命令快速生成一个 EziApp 项目：

::: code-group

``` bash [npm]
npm create eziapp@latest
```

:::

执行后 eziapp-create 会引导你完成以下步骤：

### a、 选择项目初始化方式

::: code-group
``` [bash]
☘  Select setup option:
    Hello World Demo
    From EziApp Template
  > From Existing Vite Project
```
:::

使用上下箭头或者Tab键将光标移动到 ```From Existing Vite Project``` 选项并按下会回车。

### b、确定当前目录为 vite 项目目录

::: code-group
``` [bash]
☘  Is the current directory a Vite project?
  > Yes
    No, cancel setup
```
:::

按下 Enter 选择 Yes 继续

### c、允许在当前目录修改 package.json 文件和添加 EziApp 配置文件

::: code-group
``` [bash]
☘  Allow modifying package.json and adding config files?
  > Yes
    No, cancel setup
```
:::

按下 Enter 选择 Yes 继续

### d、选择是否为 EziApp 命令添加前缀

::: code-group
``` [bash]
☘  Do you want to add a prefix to the EziApp commands in package.json?
  > No prefix, use default commands
    Yes, add a custom prefix
```
:::

如果选择 **不添加前缀** ：后续将使用 `npm run dev` 命令启动调试 EziApp 应用、使用 `npm run build` 构建 EziApp 应用。**这会覆盖您原始的命令设置**。  

如果选择 **添加前缀** ：设前缀为 `<prefix>`，后续将使用 `npm run <prefix>dev` 命令启动调试 EziApp 应用、使用 `npm run <prefix>build` 构建 EziApp 应用。

### e、完成项目创建

::: code-group
``` [bash]
✔  EziApp setup for existing Vite project is complete!

Next steps:

    npm install
    npm run dev
```
:::

当你看到此提示，说明项目已成功创建。  
接下来安装依赖并启动开发环境。

## 3、构建与发布
转到 [构建与发布](/quick-start/release) 查看更多信息。