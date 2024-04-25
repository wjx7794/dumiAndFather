import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/dumiAndFather/',
  publicPath: '/dumiAndFather/',
  outputPath: 'docs-dist',
  // 主题配置项
  themeConfig: {
    name: 'xz',
    // 配置导航栏上的导航项，不配置时默认为约定式导航。
    // nav: [
    //   { title: '指南', link: '/guide' },
    //   { title: '所有组件', link: '/components/Bar' },
    // ],
  },
});
