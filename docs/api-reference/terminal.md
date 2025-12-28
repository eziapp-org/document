# 终端

## 导入
::: code-group
```ts [TypeScript]
import terminal from "@eziapp-org/bridge/terminal"
```
:::
## 定义
```ts
declare class Terminal {
    /**
     * 将消息输出到系统终端和DevTools（仅调试模式可用）
     * 生产环境会自动屏蔽该方法，调用后无任何反应
     * @param message
     * @returns
     */
    log(...argv: any[]): Promise<"success"> | undefined;
    /**
     * 将错误消息输出到终端系统终端和DevTools（仅调试模式可用）
     * 生产环境会自动屏蔽该方法，调用后无任何反应
     * @param message
     * @returns
     */
    error(...argv: any[]): Promise<"success"> | undefined;
    /**
     * 转发所有错误信息到系统终端（仅调试模式可用）
     * 生产环境会自动屏蔽该方法，调用后无任何反应
     */
    forwardErrors(): void;
}
declare const _default: Terminal;
export default _default;

```
