import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Greenet',
    logo: 'https://raw.githubusercontent.com/paiDaXing-web/learning-materials-pdf/main/logo.png',
    nav: [
      { title: '算法', link: '/algorithm' },
      { title: '挑战', link: '/challenge' },
      {
        title: 'Github',
        link: 'https://github.com/paiDaXing-web/You-Dont-Know-Algorithm',
      },
    ],
  },
});
