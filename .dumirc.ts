import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: [
    'https://raw.githubusercontent.com/paiDaXing-web/learning-materials-pdf/main/logo.png',
  ],

  themeConfig: {
    name: 'Greenet',
    logo: 'https://raw.githubusercontent.com/paiDaXing-web/learning-materials-pdf/main/logo.png',
    nav: [
      {
        title: '算法',
        link: '/algorithm/dynamic/subsequence',
      },
      { title: '挑战', link: '/challenge' },
      { title: '数据结构', link: '/dataStructure' },
      {
        title: 'Github',
        link: 'https://github.com/paiDaXing-web/You-Dont-Know-Algorithm',
      },
    ],

    footer: `Greenet MIT Licensed | Copyright © 2023-present
<br />
Powered by Greenet`,
  },
});
