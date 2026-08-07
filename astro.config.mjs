// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@tailwindcss/vite'

/**
 * 정적 사이트.
 *
 * 프레임워크 섬을 안 쓴다. 움직이는 건 모루와 복사 버튼 정도라 짧은 인라인 스크립트로 충분하다.
 * 도트 몇 개 보여주려고 React 를 싣지 않는다.
 *
 * 언어는 주소로 가른다. 한국어는 `/why`, 나머지는 `/en/why`.
 * 한 주소에서 자바스크립트로 말만 바꾸면 검색 결과에는 한 언어만 남는다.
 */
export default defineConfig({
  site: 'https://gitmoru.dev',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'ja'],
    routing: {
      // 한국어에는 주소 앞에 표시를 안 붙인다
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // 공유 카드용 화면은 사람이 볼 자리가 아니다. 검색 결과에 뜨면 안 된다.
      filter: (page) => !page.includes('/og/'),
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko-KR', en: 'en', ja: 'ja-JP' },
      },
    }),
  ],

  vite: {
    plugins: [tailwind()],
  },
})
