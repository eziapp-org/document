# 应用

## 导入
只能在 [配置](/api-reference/config) 中填写，不提供导入。
## 定义
```ts
type EziApplication = {
    /**
     * 应用的名称
     * @default "EziApplication"
     * @platform Windows
     */
    name: string;
    /**
     * 应用的包名
     * @default "com.ezi.app"
     * @platform Windows
     */
    package: string;
    /**
     * 应用的版本号
     * @default undefined
     * @platform Windows
     */
    version?: string;
    /**
     * 应用的描述
     * @default undefined
     * @platform Windows
     */
    description?: string;
    /**
     * 应用的作者
     * @default undefined
     * @platform Windows
     */
    author?: string;
    /**
     * 应用的图标
     * 仅支持png
     * @default "image/ezi-logo.png"
     * @platform Windows
     */
    icon?: string;
    /**
     * 应用是否为单实例
     * @default false
     * @platform Windows
     */
    singleInstance?: boolean;
    /**
     * 开发环境下的入口路径
     * 留空从vite配置中获取
     * @default "http://localhost:5173/"
     * @platform Windows
     */
    devEntry?: string;
    /**
     * 生产环境下的入口路径
     * 留空从vite配置中获取
     * @default "dist"
     * @platform Windows
     */
    buildEntry?: string;
};
```
