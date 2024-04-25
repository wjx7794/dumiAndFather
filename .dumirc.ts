import { defineConfig } from 'dumi';

// github 仓库名称
const defaultPath = '/dumiAndFather/';
// 打包后 gh-pages 会默认在路径上拼接仓库名称
const baseUrl = process.env.NODE_ENV === 'production' ? defaultPath : '/';

export default defineConfig({
  base: baseUrl,
  publicPath: baseUrl,
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
