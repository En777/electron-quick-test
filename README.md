# electron-quick-test
Electron 程序快速测试的环境。

下载试用：[各种 Electron 版本的程序](https://github.com/En777/web-dev-box/releases)

有时候我需要在不同的 electron 版本做一些技术验证，于是有了这个项目。

已经对 electron 程序做了 asar: false 处理，方便在程序安装后，快速篡改 index.html 代码，再刷新 electron 页面，我就快速得到验证结果了。

这个项目的起源：

我想验证：
- WebRTC 与 声网 agora web sdk 结合，实现：在电脑本地播放视频文件，并把正在播放的视频转换为 mediaStream，再把音视频加到视频会议房间中。
- 在纯净的 electron 环境中，验证 electron 是不是有某个bug，判断是业务代码造成的bug，还是 electron 自身的 bug

## 哪些人可以使用这个项目：
- 验证 electron 各种不同版本的的差异
- 验证 electron 某个版本是不是有某个bug
- 如果你本地没有 electron 环境，但是想快速测试一下 electron 的环境（web前端快速试用electron开发）
- 你用拥有一个无限制的Chrome浏览器（允许跨域ajax、没有同源策略的限制）

## 技术细节

- electron，跨平台的桌面端开发框架，可以使用 web 技术快速打包出 windows、mac、linux 客户端
- github actions，由 github 提供，实现了提交代码，自动构建出 exe 等客户端

## electron-webpack-quick-start
> A bare minimum project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

Thanks to the power of `electron-webpack` this template comes packed with...

* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

Make sure to check out [`electron-webpack`'s documentation](https://webpack.electron.build/) for more details.

### Development Scripts

```bash
# run application in development mode
npm run dev

# `yarn compile` & create build with electron-builder
npm run dist
```
