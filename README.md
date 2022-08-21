# Minial-webpack-template
最小化的webpack配置,只取用实现运行的最小化插件和loader, 以对抗webpack臃肿的配置工作量, 以及摆脱对各种脚手架生成项目的依赖.

## 全局通用基础配置
- **dev-server**: `webpack-dev-server`启用项目
- **plugins**: 
    - `html-webpack-plugin`: 自动生成模板
    - `clean-webpack-plugin`: build时清空原目录

## 单用ts-loader(分支ts-level1_ts-loader)的问题:
- ts-loader兼做语言转换和类型检查, 两个功能单进程进行, 在大型项目中构建慢.
- 优化方案:
    1. ts-loader(transpileOnly:true) + fork-ts-checker-webpack-loader
        - transpileOnly: true使ts-loader只做语言转换, 再用fork-loader在新进程做类型检查
    2. awesome-typescript-loader替代ts-loader
    3. **放弃ts-loader, 改用babel**. 本分支使用这种方案

## babel的语言转换流程
- babel7之前不支持ts, 实现路径: ts --(tsc)--> js(es6+) -> babel -> js(target)
- babel7之后与官方合作: ts -> babel -> js(target)

## eslint的转换
- 使用`typescript-eslint`将ts的ast转换成esast(eslint的ast)

## Typescript Level2: babel + eslint
- **loader**: `babel-loader`.
- **eslint**: `typescript-eslint`,
- 主流功能使用


***

## 参考
- <TypeScript开发实战>讲师:梁宵