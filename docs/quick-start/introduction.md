# EziApp 是什么？

EziApp 是一个轻量级的跨平台桌面应用框架，目标是把现代前端（HTML/JS/TS）与原生桌面能力无缝结合。它由一个用 C++ 编写的本地运行时（core）与一个运行在前端的桥接层组成，提供可扩展的“扩展（extensions）”机制用于访问原生功能（例如托盘、终端、文件系统、窗口管理等）。  
框架默认内置权限控制机制，开发者无需声明权限。当调用敏感 API 时，系统会自动弹出权限询问窗口，用户可选择“本次运行允许”、“允许一次”或“拒绝”，确保安全性与用户控制权。

::: warning
注意：本框架正在快速迭代中，当前 API 尚未稳定，请不要用于生产环境。
:::
  
此外，EziApp 内置了一个灵活的 builder 系统，支持跨平台打包（Windows ~~/ macOS / Linux~~）与热更新开发体验。开发者可以使用统一的配置文件（如 ezi.config.ts）定义窗口行为和版本信息等，并通过一条命令完成资源自动嵌入、构建、调试与分发。

::: tip
想快速尝试一下？跳转到 [Hello World](/quick-start/helloworld)。
:::

::: tip
- 欢迎加入 [官方 QQ 交流群](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pDKKVfKxhRI2u-m9dUaGExIF2ZysBmqP&authKey=23jISVF8M%2F9Sx7%2Fi2fTlYSAt9qZIdO7EirVHqP2cVOATkACvEHzOoHP4PvOlxwPB&noverify=0&group_code=776569407) **776569407**，与社区成员交流经验，获取最新动态、技术支持与反馈。  
- 前往 [Github 仓库](https://github.com/eziapp-org) 查看源代码、文档以及相关 Issues，参与讨论与贡献。  
:::
