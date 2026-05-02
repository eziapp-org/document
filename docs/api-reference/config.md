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

```ts
export type EziConfig = {
    application: EziApplication;
    window?: WindowOptions;
};

export declare function defineConfig(config: EziConfig): EziConfig;
```