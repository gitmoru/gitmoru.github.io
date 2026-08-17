/**
 * 언어와 주소.
 *
 * 한국어는 주소에 표시가 안 붙고(`/why`), 나머지는 앞에 붙는다(`/en/why`).
 * 검색 엔진이 언어별로 다른 페이지를 잡으려면 **주소가 달라야 한다.**
 * 한 주소에서 자바스크립트로 말만 바꾸면 검색 결과에는 한 언어만 남는다.
 */

export const LANGS = ['ko', 'en', 'ja'] as const
export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'ko'

/** `<html lang>` 과 `hreflang` 에 쓰는 값. 지역까지 적어야 검색 엔진이 덜 헷갈린다. */
export const HREFLANG: Record<Lang, string> = {
  ko: 'ko-KR',
  en: 'en',
  ja: 'ja-JP',
}

/** 언어 고르는 자리에 뜨는 이름. 그 언어를 쓰는 사람이 읽을 이름으로 적는다. */
export const LANG_NAME: Record<Lang, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
}

/** 이 사이트에 있는 페이지. 여기 적힌 것만 사이트맵과 언어 링크에 나온다. */
export const PAGES = ['', 'why', 'how', 'start', 'mcp', 'feedback', 'safety', 'story'] as const
export type PagePath = (typeof PAGES)[number]

/**
 * `('en', 'why')` -> `/en/why/`
 *
 * **끝에 슬래시를 붙인다.** 이게 실제로 서버가 내주는 주소다.
 * `/why` 로 들어오면 `/why/` 로 301 을 준다.
 *
 * 예전에는 슬래시를 떼고 있었다. 그래서 한 페이지가 세 가지 신호를 서로 다르게 줬다.
 *
 *   사이트맵   /why/     (@astrojs/sitemap 이 만든다)
 *   canonical  /why      (여기서 만든다)
 *   내부 링크   /why      (여기서 만든다)
 *
 * canonical 이 리디렉션되는 주소를 가리키니 구글이 "대체 페이지" 로 접었고,
 * 내부 링크마다 301 을 한 번씩 타서 "리디렉션이 포함된 페이지" 로 잡혔다.
 * canonical, hreflang, og:url, 내비게이션이 전부 이 함수에서 나오므로 여기만 고치면 된다.
 */
export function href(lang: Lang, page: PagePath = ''): string {
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`
  return page ? `${prefix}/${page}/` : `${prefix}/`
}

/** 주소에서 언어를 읽는다. 못 읽으면 기본 언어다. */
export function langOf(pathname: string): Lang {
  const first = pathname.split('/').filter(Boolean)[0]
  return (LANGS as readonly string[]).includes(first ?? '') ? (first as Lang) : DEFAULT_LANG
}

/** 지금 보고 있는 페이지가 어느 것인지. 내비게이션에서 현재 위치를 표시할 때 쓴다. */
export function pageOf(pathname: string): PagePath {
  const parts = pathname.split('/').filter(Boolean)
  const rest = (LANGS as readonly string[]).includes(parts[0] ?? '') ? parts.slice(1) : parts
  const first = rest[0] ?? ''
  return (PAGES as readonly string[]).includes(first) ? (first as PagePath) : ''
}
