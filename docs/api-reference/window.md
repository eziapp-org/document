# 窗口
## 导入
::: code-group
```ts [TypeScript]
import windowm from "@eziapp-org/bridge/windowm"
```
:::
## 定义
```ts
/**
 * 窗口的背景模式
 * @property opaque 纯色背景
 * @property transparent 透明背景
 * @property mica 云母背景 #Windows11+
 * @property acrylic 亚克力背景 #Windows10+
 * @platform Windows
 */
type BackgroundMode = "opaque" | "transparent" | "mica" | "acrylic";
type HexColor = `#${string}`;
type RGBColor = `rgb(${number}, ${number}, ${number})`;
type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type NamedColor = "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "black" | "white" | "gray" | "pink" | "cyan" | "magenta" | "lime" | "teal" | "navy" | "maroon" | "olive" | "silver" | "gold";
type BeforeCloseMessage = {
    content: string;
    extraButton: string;
};
type BeforeCloseCallback = (result: "close" | "extra" | "cancel") => void;
/**
 * 窗口的属性选项
 * @platform Windows
 */
export type WindowOptions = {
    /**
     * 窗口加载的资源路径
     * 可以写本地的虚拟文件和远程url
     * @default "index.html"
     * @example "index.html"
     * @example "https://www.example.com"
     * @platform Windows
     */
    src?: string;
    /**
     * 窗口的标题
     * @default "EziWindow"
     * @platform Windows
     */
    title?: string;
    /**
     * 窗口的尺寸
     * @default { width: 800, height: 600 }
     * @platform Windows
     */
    size?: {
        width: number;
        height: number;
    };
    /**
     * 窗口的位置
     * @property {x: number, y: number} 窗口的左上角坐标
     * @property "center" 窗口居中显示
     * @property "remembered" 窗口记忆上次的位置显示，初次居中
     * @default "center"
     * @platform Windows
     */
    position?: {
        x?: number;
        y?: number;
    } | "center" | "remembered";
    /**
     * 窗口的背景模式
     */
    backgroundMode?: BackgroundMode;
    /**
     * 窗口的背景颜色
     * 支持rgb、rgba、hex
     * @default "#ffffff"
     * @example backgroundColor: "rgb(255, 255, 255)"
     * @example backgroundColor: "rgba(255, 255, 255, 0.5)"
     * @example backgroundColor: "#ffffff"
     * @example backgroundColor: "#ffffffaa"
     * @platform Windows
     */
    backgroundColor?: string;
    /**
     * 窗口的主题
     * @property "light" 浅色主题
     * @property "dark" 深色主题
     * @property "system" 跟随系统
     * @default "system"
     * @platform Windows
     */
    theme?: "light" | "dark" | "system";
    /**
     * 窗口的强调色
     * 作为css变量--ezi-accent-color提供
     * @property "system" 使用系统强调色
     * @property `#${string}` 十六进制颜色值
     * @property `rgb(${number}, ${number}, ${number})` rgb颜色值
     * @property `rgba(${number}, ${number}, ${number}, ${number})` rgba颜色值
     * @property NamedColor 常用颜色名称
     * @platform Windows
     * @example "red"
     * @example "#ff0000"
     * @example "rgb(255, 0, 0)"
     * @example "rgba(255, 0, 0, 0.5)"
     * @default "system"
     */
    accentColor?: "system" | HexColor | RGBColor | RGBAColor | NamedColor;
    /**
     * 窗口的启动画面
     * @property src 启动画面的图片路径，支持png、jpg
     * @property size 启动画面的尺寸，默认图片尺寸
     * @platform Windows
     * @default {src: "ezi-logo.png", size: {width: 150, height: 150}}
     */
    splashscreen?: {
        src: string;
        size?: {
            width: number;
            height: number;
        };
    };
    /**
     * 窗口的透明度
     * 范围是0到1
     * @default 1
     * @example opacity: 0.5
     * @platform Windows
     */
    opacity?: number;
    /**
     * 窗口是否无边框
     * @default false
     * @platform Windows
     */
    borderless?: boolean;
    /**
     * 窗口是否可移动
     * @default true
     * @platform Windows
     */
    movable?: boolean;
    /**
     * 窗口是否可缩放
     * @default true
     * @platform Windows
     */
    resizable?: boolean;
    /**
     * 窗口是否可最小化
     * @default true
     * @platform Windows
     */
    minimizable?: boolean;
    /**
     * 窗口是否可最大化
     * @default true
     * @platform Windows
     */
    maximizable?: boolean;
    /**
     * 窗口是否可关闭
     * @default true
     * @platform Windows
     */
    ignoreMouseEvents?: boolean;
    /**
     * 窗口是否忽略键盘事件
     * @default false
     * @platform Windows
     */
    ignoreKeyboardEvents?: boolean;
    /**
     * 窗口是否置顶
     * @default false
     * @platform Windows
     */
    alwaysOnTop?: boolean;
    /**
     * 窗口是否不显示在任务栏
     * @default false
     * @platform Windows
     */
    skipTaskbar?: boolean;
    /**
     * 窗口是否全屏显示
     * @default false
     * @platform Windows
     */
    fullscreen?: boolean;
};
export declare class Window {
    id: number;
    title: string;
    constructor(id: number, title: string);
    isMaximizable(): Promise<boolean>;
    isMaximized(): Promise<boolean>;
    isMinimizable(): Promise<boolean>;
    isMinimized(): Promise<boolean>;
    isMovable(): Promise<boolean>;
    isClosed(): Promise<boolean>;
    isFocusable(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isVisible(): Promise<boolean>;
    isBorderless(): Promise<boolean>;
    getBackgroundMode(): Promise<BackgroundMode>;
    getSize(): Promise<{
        width: number;
        height: number;
    }>;
    getPosition(): Promise<{
        x: number;
        y: number;
    }>;
    setTitle(title: string): Promise<"success">;
    setBackgroundMode(mode: BackgroundMode): Promise<"success">;
    setSize({ width, height }: {
        width: number;
        height: number;
    }): Promise<"success">;
    setPosition({ x, y }: {
        x: number;
        y: number;
    }): Promise<"success">;
    setMaximizable(enable: boolean): Promise<"success">;
    setMinimizable(enable: boolean): Promise<"success">;
    setMovable(enable: boolean): Promise<"success">;
    setFocusable(enable: boolean): Promise<"success">;
    setBorderless(enable: boolean): Promise<"success">;
    setBeforeCloseMessage(options: BeforeCloseMessage, callback: BeforeCloseCallback): {
        cancel: () => void;
    };
    close(): Promise<"success">;
    reload(): Promise<"success">;
    focus(): Promise<"success">;
    blur(): Promise<"success">;
    minimize(): Promise<"success">;
    maximize(): Promise<"success">;
    restore(): Promise<"success">;
    hide(): Promise<"success">;
    drag(): Promise<"success">;
    show(): Promise<"success">;
}
declare class WindowManager {
    /**
     * 获取当前js环境所在的窗口
     * @returns {Promise<Window>} 一个窗口对象
     */
    getCurrentWindow(): Promise<Window>;
    /**
     * 获取所有窗口
     * @returns {Promise<Window[]>} 一个窗口对象数组
     */
    getWindowList(): Promise<Window[]>;
    /**
     * 获取指定标题的窗口
     * @param {string} title 窗口的标题
     * @returns {Promise<Window | null>} 一个窗口对象或者null
     */
    getWindowByTitle(title: string): Promise<Window | null>;
    /**
     * 获取指定id的窗口
     * @param {number} id 窗口的id
     * @returns {Promise<Window | null>} 一个窗口对象或者null
     */
    getWindowById(id: number): Promise<Window | null>;
    /**
     * 创建一个新的窗口
     * @param {WindowOptions} options 窗口的属性选项
     * @returns {Promise<Window>} 一个窗口对象
     */
    createWindow(options?: WindowOptions): Promise<Window>;
}
```
