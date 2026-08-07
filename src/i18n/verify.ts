/**
 * 검색 엔진 소유 확인 코드.
 *
 * 각 서비스가 "이 사이트가 정말 당신 것이냐" 를 확인할 때 쓰는 값이다.
 * 받은 코드를 여기에 붙여넣으면 모든 페이지 머리에 들어간다.
 *
 * 비워두면 아무것도 안 나간다. 안 쓰는 태그를 빈 값으로 내보내면
 * 확인이 안 되는데도 된 줄 알기 쉽다.
 *
 * **구글은 여기 안 넣어도 된다.** 클라우드플레어 DNS 에 TXT 한 줄 넣는 방식이 낫다.
 * 그쪽은 하위 도메인과 http, https 를 한 번에 덮는다.
 */
export const VERIFY: Record<string, string> = {
  /** 네이버 서치어드바이저. `<meta name="naver-site-verification" content="...">` 의 content */
  'naver-site-verification': '',

  /** 구글. DNS 로 했으면 비워둔다 */
  'google-site-verification': '',

  /** 빙. 챗GPT 검색도 이쪽 색인을 쓴다 */
  'msvalidate.01': '',
}
