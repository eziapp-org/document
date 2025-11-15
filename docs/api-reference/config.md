# 配置
## 导入
::: code-group
```ts [TypeScript]
import { defineConfig } from "@eziapp-org/bridge";
```
:::

## 定义
- [EziApplication](/api-reference/application)：Ezi 应用
- [WindowOptions](/api-reference/window)：Ezi 窗口选项
- [TrayMenuItem](/api-reference/tray)：Ezi 托盘项目

```ts
export type EziConfig = {
    application: EziApplication;
    window?: WindowOptions;
    tray?: TrayMenuItem[];
};

export declare function defineConfig(config: EziConfig): EziConfig;
```