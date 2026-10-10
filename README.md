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

## Markdown 导出与页面操作

生产构建会生成 `/llms.txt`、`/llms-full.txt` 和各文章对应的 Markdown 文件。文章标题旁的菜单支持复制正文、查看 Markdown，以及在 ChatGPT、Claude、Perplexity 中提问。

此功能需要通过 `npm run docs:build` 和 `npm run docs:preview` 验证，开发服务器不生成导出文件。空白占位页不显示菜单，也不导出 Markdown。需要排除某篇文章时，可在其 frontmatter 中设置 `llmstxt: false`。
