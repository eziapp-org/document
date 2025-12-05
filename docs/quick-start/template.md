# 从模板创建应用

## 1、开发环境
[点击这里](/quick-start/helloworld#1、开发环境) 查看开发环境说明



## 2、创建项目

通过以下命令快速生成一个 EziApp 项目：

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
  > From EziApp Template
    From Existing Vite Project
```
使用上下箭头或者Tab键将光标移动到 ```From EziApp Template``` 选项并按下会回车。
:::

### b、输入项目名称
::: code-group
``` [bash]
☘  Project name:
  > eziapp-project

```
:::
按下回车即可使用默认名称 ```eziapp-project```，也可以输入自定义目录名称。  
如果目录不为空，CLI 会提示是否清理已有文件，确保初始化安全。

### c、选择前端框架

::: code-group
``` [bash]
☘  Select framework:
  > Vanilla
    React
    Vue
    Svelte
```
:::
使用上下箭头或者Tab键将光标移动到你想选择的框架，然后按下回车选择。

### d、选择使用的脚本语言

::: code-group
``` [bash]
☘  Select language:
  > TypeScript
    JavaScript
```
:::
使用上下箭头或者Tab键将光标移动到你想选择的脚本语言，然后按下回车选择。


### e、完成项目创建

::: code-group
``` [bash]
✔  Vanilla TypeScript project setup is complete!

Next steps:

    cd eziapp-project
    npm install
    npm run dev
```
:::

当你看到此提示，说明项目已成功创建。  
接下来进入项目目录，安装依赖并启动开发环境。

## 3、构建与发布
转到 [构建与发布](/quick-start/release) 查看更多信息。