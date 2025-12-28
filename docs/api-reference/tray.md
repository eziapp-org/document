# 托盘

## 导入
::: code-group
```ts [TypeScript]
import tray from "@eziapp-org/bridge/tray"
```
:::
## 定义
```ts
import { Window } from "./windowm";
export type TrayMenuItem = {
    /**
     * 菜单项的类型
     */
    type: "normal" | "separator" | "submenu";
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
};
declare class Tray {
    private menuItems;
    /**
     * 显示托盘图标
     * @param mainWindow 指定点击托盘图标时要显示的主窗口
     * @returns
     */
    show(mainWindow: Window): Promise<string>;
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
    /**
     * 设置托盘图标菜单项点击回调
     * @param callback 点击回调函数，参数为被点击的菜单项，参数是被点击的菜单项对象
     */
    setOnClick(callback: (item: TrayMenuItem) => void): string;
}
declare const _default: Tray;
export default _default;

```
