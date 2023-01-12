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
    sidebar: {
      '/algorithm/dynamic': [
        {
          title: '动态规划',
          children: [
            {
              link: '/algorithm/dynamic/subsequence',
              title: '111',
              order: 1,
              frontmatter: { title: '' },
            },
          ],
        },
      ],
    },
    footer: `Greenet MIT Licensed | Copyright © 2023-present
<br />
Powered by Greenet`,
  },
});
