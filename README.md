# Pure Black

简单、纯黑色 Halo 主题，聚焦内容。

## 说明

首次制作 halo 主题，难免会有意想不到的问题，相互指正，相互学习。

配色来自 github。

- [x] 支持图片懒加载。
- [x] 支持全局搜索 [plugin-search-widget](https://github.com/halo-sigs/plugin-search-widget)。
- [x] 支持评论 [plugin-comment-widget](https://github.com/halo-dev/plugin-comment-widget)。


## 预览截图
![预览图1](https://p0.meituan.net/travelcube/a4b03341f3495068b1f8bbbf47c9cf6b550633.png)
![预览图2](https://s3plus.meituan.net/csc-apply-file-web/prod/2019-01-03/WX20231101-143027%402x.png)
![预览图3](https://s3plus.meituan.net/csc-apply-file-web/prod/2019-01-03/WX20231101-143222.png)

## 使用方法

* 到 [Release](https://github.com/xbf321/halo-theme-pure-black/releases) 下载适用于 Halo 的主题版本。
* 在 Console 端的主题菜单直接上传安装即可使用。

## 开发

### 设置同步的目标路径
```js
// 因为原代码目录和 halo 测试的主题目录，不在同一个目录，所以需要同步。
export TARGET_DIR=dir

```

### Run

```
npm install
npm run dev
```

### Build

记得修改版本号。 ***package.json*** 和 ***settings.yaml***

```js
npm run build
```