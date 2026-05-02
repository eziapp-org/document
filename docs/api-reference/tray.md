# 托盘

## 导入
::: code-group
```ts [TypeScript]
import tray from "@eziapp-org/bridge/tray"
```
:::
## 定义
```ts
export type TrayMenuItem = {
    /**
     * 菜单项的类型
     */
    type: "text" | "separator" | "submenu";
    /**
     * 菜单项的标签
     */
    label: string;
    /**
     * 菜单项的id，目前不需要填，框架会自动分配
     */
    id?: number;
    /**
     * 菜单项是否可用
     */
    enabled?: boolean;
    /**
     * 菜单项是否被勾选
     */
    checked?: boolean;
    /**
     * 子菜单项，仅当type为submenu时有效
     */
    submenu?: TrayMenuItem[];
    /**
     * 点击该选项时候的回调函数
     */
    onClick?: () => void;
};
declare class Tray {
    private menuItems;
    /**
     * 显示托盘图标
     * 点击托盘图标时会显示当前js引擎所在的窗口
     * @returns
     */
    show(): Promise<string>;
    /**
     * 隐藏托盘图标
     * @returns
     */
    hide(): Promise<string>;
    /**
     * 设置托盘图标的右键菜单
     * @param menuItems 菜单项数组
     * @returns
     */
    setContextMenu(menuItems: TrayMenuItem[]): Promise<TrayMenuItem[]>;
    /**
     * 更新托盘图标的右键菜单
     * 自动引用之前设置的菜单项数组
     * @returns
     */
    update(): Promise<TrayMenuItem[] | undefined>;
    /**
     * 获取当前托盘图标的右键菜单项数组
     * @returns
     */
    getContextMenu(): TrayMenuItem[];
}
declare const _default: Tray;
export default _default;

```
