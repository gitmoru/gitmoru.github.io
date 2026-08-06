// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'

/**
 * 정적 사이트 하나.
 *
 * 프레임워크 섬을 안 쓴다. 움직이는 건 모루와 깊이계 둘뿐이고,
 * 둘 다 짧은 인라인 스크립트로 충분하다. React 를 싣는 순간
 * "도트 몇 개 보여주려고 수십 KB" 가 된다.
 */
export default defineConfig({
  site: 'https://gitmoru.dev',
  vite: {
    plugins: [tailwind()],
  },
})
