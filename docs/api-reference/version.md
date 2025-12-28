# 应用

## 导入
::: code-group
```ts [TypeScript]
import version from "@eziapp-org/bridge/version"
```
:::
## 定义
```ts
type Platform = "windows" | "linux" | "macos" | "harmonyos" | "openharmony" | "android" | "ios";
type SemVer = `${number}.${number}.${number}`;
declare class Version {
    /**
     * Ezi 注入的版本信息
     */
    private versionInfo;
    /**
     * 获得一份完整的版本报告文本
     */
    getReport(): string;
    /**
     * 返回 Ezi 的语义化版本号（SemVer）
     */
    getEziVersion(): `${number}.${number}.${number}`;
    /**
     * 返回 Ezi 的构建类型
     */
    getBuildType(): "Debug" | "Release";
    /**
     * 返回 Ezi 的构建日期
     */
    getBuildDate(): Date;
    /**
     * 返回当前的运行平台
     */
    getPlatform(): Platform;
    /**
     * 返回当前操作系统的语义化版本号（SemVer）
     */
    getOSVersion(): `${number}.${number}.${number}`;
    /**
     * 返回当前使用的 WebView 的版本号
     */
    getWebViewVersion(): string;
    /**
     * 返回 Ezi 编译版本所在的 Git 提交哈希值
     */
    getGitHash(): string;
    /**
     * 判断当前Ezi版本是否大于目标版本
     * @param target 目标版本
     */
    isEziVersionGreaterThan(target: SemVer): boolean;
    /**
     * 判断当前操作系统版本是否大于目标版本
     * @param target 目标版本
     */
    isOSVersionGreaterThan(target: SemVer): boolean;
    /**
     * 判断当前版本是否为调试模式
     */
    isDebug(): boolean;
    /**
     * 判断当前版本是否为发布模式
     */
    isRelease(): boolean;
    /**
     * 判断当前运行平台是否为 Windows
     */
    isWindows(): boolean;
    /**
     * 判断当前运行平台是否为 Linux
     */
    isLinux(): boolean;
    /**
     * 判断当前运行平台是否为 MacOS
     */
    isMacOS(): boolean;
    /**
     * 判断当前运行平台是否为 HarmonyOS
     */
    isHarmonyOS(): boolean;
    /**
     * 判断当前运行平台是否为 OpenHarmony
     */
    isOpenHarmony(): boolean;
    /**
     * 判断当前运行平台是否为 Android
     */
    isAndroid(): boolean;
    /**
     * 判断当前运行平台是否为 iOS
     */
    isIOS(): boolean;
    /**
     * 判断当前系统是否为 Windows 11 或更高版本
     */
    isWindows11OrHigher(): boolean;
}
declare const _default: Version;
export default _default;
```
