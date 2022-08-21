# Minial-webpack-template
最小化的webpack配置,只取用实现运行的最小化插件和loader, 以对抗webpack臃肿的配置工作量, 以及摆脱对各种脚手架生成项目的依赖.

## 全局通用基础配置
- **dev-server**: `webpack-dev-server`启用项目
- **plugins**: 
    - `html-webpack-plugin`: 自动生成模板
    - `clean-webpack-plugin`: build时清空原目录

## Typescript Level: ts-loader
- **loader**: `ts-loader`.
- 主要用于ts转义和调试用, 类似[Typescript Playground](https://www.typescriptlang.org/play) + 界面调试
