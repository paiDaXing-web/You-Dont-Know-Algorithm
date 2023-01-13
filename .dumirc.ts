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
              title: '01.不同的子序列',
              order: 1,
              frontmatter: { title: '' },
            },
            {
              link: '/algorithm/dynamic/stockTiming',
              title: '02.买卖股票的最佳时机 III',
              order: 2,
              frontmatter: { title: '' },
            },
            {
              link: '/algorithm/dynamic/decoding',
              title: '03.解码问题',
              order: 3,
              frontmatter: { title: '' },
            },
          ],
        },
        {
          title: '栈相关',
          children: [
            {
              link: '/algorithm/stack/reversePolish',
              title: '01.逆波兰表达式求值',
              order: 1,
              frontmatter: { title: '' },
            },
            {
              link: '/algorithm/stack/stockTiming',
              title: '02.基本计算器',
              order: 2,
              frontmatter: { title: '' },
            },
            {
              link: '/algorithm/stack/decoding',
              title: '03.删除相邻重复项',
              order: 3,
              frontmatter: { title: '' },
            },
          ],
        },
        {
          title: '链表相关',
          children: [
            {
              link: '/algorithm/chainList/reversePolish',
              title: '01.奇偶链表',
              order: 1,
              frontmatter: { title: '' },
            },
            {
              link: '/algorithm/chainList/stockTiming',
              title: '02.删除链表重复元素II',
              order: 2,
              frontmatter: { title: '' },
            },
            {
              link: '/algorithm/chainList/decoding',
              title: '03.删除链表重复元素',
              order: 3,
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
