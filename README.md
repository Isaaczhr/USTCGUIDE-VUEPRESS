# USTCGUIDE-VUEPRESS

这里是 USTCGUIDE 系列的 VuePress 前端实现项目。

## 贡献指南

如果你想为项目做贡献，无论是纠错、写文章、提供资金技术支持，都可以在这个 Repo 下面提交 issue，或者联系作者进行反馈。

如果你了解并熟悉 Git，GitHub 以及 Vuepress，则欢迎向这个仓库提交 Pull Request 来直接贡献。

提交的 Markdown 文件原则上应该满足 markdownlint 规范（美观、便于操作）。
可以通过 **使用 Typora 编辑器** 或 **使用 VSCode 中的 markdownlint 拓展** 来保证满足标准。

如果你想实时预览网页的效果，可以通过在本地进行 dev 来实时预览。确保你的电脑安装了 npm 和 Node.js（20.19+ 或 22.12+），在仓库目录执行 npm install 和 npm run docs:dev，进入终端显示的地址即可实现开发预览。

## 文档集合

项目按 [Plume 集合迁移说明](https://theme-plume.vuejs.press/blog/dk58a4t2/) 使用 `doc` 集合组织内容：

- `docs/admission/`：USTC不完全入学指南。
- `docs/coursedata/`：USTC课程资料簿。
- `docs/survive/`：USTC生存手册。

集合配置位于 `docs/.vuepress/collections/`，由 `config.ts` 引入。各集合使用自动侧边栏，文章的 `permalink` 保持不变；新增集合使用 `defineCollection` 定义，并加入 `defineCollections` 列表。
