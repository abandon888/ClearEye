<div align="center">

<h1>医目了然：AI病理诊断学习一体化平台</h1>

**个人学习练手项目**

<p align="center">
  <a href="#总览">总览</a>  • <a href="#安装">安装</a> • <a href="#使用说明">使用说明</a> • <a href="#开源许可">开源许可</a>
<br>
</p>

<p align="center">

<a href='https://bmtrain.readthedocs.io/en/latest/?badge=latest'>
    <img src='https://readthedocs.org/projects/bmtrain/badge/?version=latest' alt='Documentation Status' />
</a>

<a href="https://github.com/OpenBMB/BMTrain/blob/main/LICENSE">
    <img alt="GitHub" src="https://img.shields.io/github/license/OpenBMB/BMTrain">
</a>

</p>

</div>

<div id="总览"></div>

## 总览

医目了然是 2023 年第十四届互联网+大赛国赛铜奖获奖项目，旨在为医学影像 AI 病理诊断提供一个学习一体化平台。
预览链接如下：[医目了然平台](http://medicine.ncuos.com/)

<div id="文档"></div>

<div id="安装"></div>

## 安装

使用 git 克隆本项目到本地：

```shell
git clone https://github.com/abandon888/ClearEye.git
```

再使用 npm 安装依赖(请确保已安装 node 且版本不低于 16.8.0)：

```shell
npm install
```

安装完成后，使用 npm 启动项目：

```shell
npm run dev
```

项目启动后，打开浏览器访问 <http://localhost:5173> 即可。

<div id="使用说明"></div>

## 使用说明

本平台基于 React 框架开发，使用了 Ant Design 组件库，使用了 zustand 框架进行状态管理，使用了 react-router-dom 框架进行路由管理,css 部分穿插使用了 tailwind CSS 框架。

> 请注意，本项目仅为展示使用，不包含任何后端代码或实质性功能，因此无法进行上传图片和登录等操作。

## 开源许可

该平台使用[Apache 2.0](https://github.com/OpenBMB/BMTrain/blob/main/LICENSE)开源许可证。
