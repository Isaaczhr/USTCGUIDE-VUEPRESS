import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import notes from "./notes/index.ts";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "logo.svg",

  appearance: true, // 配置 深色模式

  social: [{ icon: "github", link: "https://github.com/Isaaczhr/USTCGUIDE-VUEPRESS" }],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: 'CC-BY-NC-SA-4.0',

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: "", //'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: "Copyright © 2022-2025 USTCGUIDE Team<br><a href='https://beian.miit.gov.cn/' target='_blank'>皖ICP备2025090422号-1</a>",
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  // profile: {
  //   avatar: 'https://theme-plume.vuejs.press/plume.png',
  //   name: 'USTC GUIDE',
  //   description: 'USTC GUIDE',
  //   // circle: true,
  //   // location: '',
  //   // organization: '',
  // },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    author: {
      name: "USTCGUIDE Team", // 版权所有者名称
      url: "https://github.com/USTCGUIDE", // 版权所有者地址
    },
    creation: "original", // 创作方式
  },
});
