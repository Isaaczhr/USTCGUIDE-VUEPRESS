import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  dir: 'coursedata',
  title: 'USTC课程资料簿',
  linkPrefix: '/coursedata/',
  sidebar: 'auto',
})
