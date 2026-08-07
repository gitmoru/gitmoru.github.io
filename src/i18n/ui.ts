import type { Lang } from './config'

/** 히어로 제목 조각. `hl` 이 붙은 조각만 색이 바뀐다. */
export type HeadPart = { t: string; hl?: boolean }

/**
 * 세 언어 문구.
 *
 * 옮긴 게 아니라 그 언어로 다시 썼다. 앱에서 쓰는 것과 같은 기준이다.
 * 규칙은 WRITING.md 에 있고, 요약하면 이렇다.
 *
 *   "안전합니다" 를 어디에도 쓰지 않는다
 *   확인 못 한 것을 긍정문으로 감싸지 않는다
 *   위로하지 않는다. 침착하게 사실만 적는다
 *   숫자를 먼저 쓰고 형용사를 안 쓴다
 */

export const ko = {
  nav: {
    copy: '복사',
    copied: '복사했어요',

    why: '왜 판정 안 하나',
    how: '어떻게 도나',
    start: '시작하기',
    mcp: 'AI 붙이기',
    story: '만든 이유',
    github: 'GitHub',
    menu: '메뉴',
    lang: '언어',
  },

  foot: {
    blurb: '저장소에 무슨 일이 있었는지 파보는 도구예요. 아무것도 내려받지 않고, 이 컴퓨터 밖으로 아무것도 보내지 않아요.',
    groupRead: '읽을 것',
    groupCode: '코드',
    groupKeeps: '지키는 것',
    madeBy: '만든 사람',
    issues: '문제 알리기',

    license: 'MIT. 개인용 도구입니다',
    safety: '이 도구가 안 하는 것',
    decisions: '결정 기록',
    // 사실이라 쓸 수 있는 농담. 안 그랬으면 안 썼다.
  },

  home: {
    seoTitle: 'force push 로 덮어쓴 브랜치 복구, 사라진 커밋 찾기',
    seoDesc: 'GitHub 저장소가 털렸을 때 어떤 파일이 바뀌었는지 브랜치별로 찾습니다. force push 로 사라진 커밋을 되돌리고, 무엇을 확인 못 했는지까지 알려줍니다. 내려받지 않고 읽기만 해요.',
    title: '저장소가 털렸을 때 무엇이 바뀌었는지 파봅니다',
    desc: '특정 시간대에 저장소에서 바뀐 파일을 브랜치별로 찾아서 보여줍니다. 아무것도 내려받지 않고, 이 컴퓨터 밖으로 아무것도 보내지 않아요.',
    h1: [
      { t: '저장소가 털렸을 때 ' },
      { t: '무엇이 바뀌었는지', hl: true },
      { t: ' 파봅니다' },
    ] as HeadPart[],
    lede: '새벽에 누가 브랜치를 통째로 갈아엎었을 때 켜는 도구예요. 아무것도 내려받지 않고, 이 컴퓨터 밖으로 아무것도 보내지 않아요.',
    outputLabel: '훑고 나면 이렇게 말해줘요',
    output1: '눈에 띈 건 0개예요.',
    output2: '그래도 바뀐 파일 14개는 한 번 봐주세요.',
    outputWhy: '0건은 안전하다는 뜻이 아니에요. 규칙에 안 걸렸다는 뜻입니다.',
    ctaStart: '받아서 켜기',
    ctaWhy: '왜 판정 안 하나',

    threeTitle: '세 가지를 합니다',
    three: [
      ['어디가 당했나', '저장소 수십 개 중 어디, 브랜치 몇 개가 바뀌었는지 시간대로 좁혀서 찾아요.'],
      ['뭐가 들어왔나', '공격 직전 파일과 지금 파일을 나란히 놓고 보여줘요. 무슨 코드인지는 AI 가 읽습니다.'],
      ['되돌릴 수 있나', '공격 직전 커밋이 아직 남아 있는지 확인하고, 사람이 누르면 되돌립니다.'],
    ],

    forkNow: '지금 사고가 났어요',
    forkLook: '먼저 알아보고 싶어요',

    whenTitle: '이럴 때 씁니다',
    whenLede: '전부 실제로 겪은 상황이에요.',
    when: [
      '저장소에 이상한 커밋이 올라왔을 때',
      '브랜치가 덮어써졌을 때. 몇 개가 당했는지, 커밋이 얼마나 사라졌는지',
      '토큰이나 키가 유출된 것 같을 때. 그 시간대에 뭐가 들어왔는지',
      '팀원 계정이 털린 것 같을 때. 그 계정으로 뭘 했는지',
      '사고가 없을 때 정기 점검. 배포 키나 웹훅은 푸시 기록에 안 남아서 따로 봐야 해요',
      '복구한 다음 확인. 되돌린 게 실제로 되돌아갔는지',
    ],
    shotTitle: '이렇게 생겼어요',
    shotAlt: '조직을 훑은 결과. 바뀐 파일이 브랜치별로 나와 있다',
    shareSample: `[someorg 2026-08-04]
검사 범위: someorg
검사 시간대: 2026-08-04 00:00 ~ 2026-08-04 07:00 (GMT+9)

저장소 3곳, 브랜치 12개를 확인했습니다.
변경됨 4, 원복됨 0, 변경 없음 7, 확인 실패 1
기록을 덮어쓴 푸시가 브랜치 1개에 있었고, 커밋 6개가 사라졌습니다.

※ 브랜치 1개를 확인하지 못했습니다.
   이 결과를 "이상 없음"으로 판단하면 안 됩니다.`,
    quickTitle: '30초면 켭니다',
    quickNote: 'Node 22 이상, pnpm, GitHub CLI 가 있어야 해요.',
    quickMore: '자세한 순서 보기',
  },

  why: {
    seoTitle: '탐지 규칙이 못 잡은 공격은 왜 이상 없음으로 보이나',
    seoDesc: '보안 도구가 0건이라고 할 때 그게 안전하다는 뜻이 아닌 이유. 활동 없음, 변화 없음, 확인 실패, 규칙 미해당을 갈라서 봐야 하는 까닭을 설명합니다.',
    title: '왜 판정하지 않나',
    desc: '탐지 규칙은 겪어본 공격에서 나옵니다. 규칙이 판정을 내리면, 규칙이 못 잡은 공격이 "이상 없음" 으로 표시돼요.',
    h1: '"안전합니다" 라고 말하지 않아요',
    lede: '이 도구가 하는 말은 하나뿐이에요.',
    quote: '이 시간대에 이 파일들이 이렇게 바뀌었습니다.',

    reasonTitle: '규칙은 겪어본 것만 압니다',
    reason1: '탐지 규칙은 겪어본 공격에서 나와요. 새로운 수법은 정의상 규칙에 없습니다.',
    reason2: '규칙이 판정을 내리는 구조에서는, 규칙이 못 잡은 공격이 "이상 없음" 으로 표시돼요.',
    reason3: '실제로 그랬어요. 파일 이름으로 찾다가 다른 이름에 붙은 같은 코드를 놓쳤고, 화면에는 0건이 떴습니다. 그 화면을 보고 한동안 안심했어요.',

    zeroTitle: '그래서 0건을 갈라서 말해요',
    zeroLede: '0이 나오는 경우는 넷이고, 뜻이 전혀 다릅니다.',
    zero: [
      ['활동 없음', '그 시간대에 아무도 안 건드렸어요. 비교할 것 자체가 없습니다.'],
      ['변화 없음', '푸시는 있었는데 내용이 그대로예요.'],
      ['확인 못 함', '조회에 실패해서 결과를 단정할 수 없어요.'],
      ['신호 없음', '바뀌긴 했는데 규칙이 못 알아봤어요. 사람이 봐야 합니다.'],
    ],
    zeroNote: '넷을 하나로 뭉쳐서 0이라고 쓰면, 세 번째가 첫 번째로 읽힙니다. 그 순간 도구가 거짓말을 하는 거예요.',

    ruleTitle: '그래서 정해둔 것들',
    rules: [
      ['빨강을 안 씁니다', '색으로도 판정하지 않아요. 화면 어디에도 빨강이 없습니다.'],
      ['등급이 위험도가 아니에요', '신호에 붙는 건 주목도예요. "얼마나 위험한가" 가 아니라 "얼마나 먼저 봐야 하나" 입니다.'],
      ['실패를 숨기지 않아요', '확인 못 한 건 개수를 세서 눈에 띄는 자리에 적습니다. 조용히 넘어가면 그게 곧 거짓 안심이에요.'],
      ['신호 0건도 목록은 남아요', '규칙에 안 걸린 변경도 전부 목록에 있습니다. 규칙은 순서를 정할 뿐이에요.'],
    ],
    next: '그럼 무엇을 근거로 찾나요',
  },

  how: {
    seoTitle: 'force push 로 사라진 커밋을 되돌리는 원리',
    seoDesc: 'GitHub 활동 기록의 payload.before 로 강제 푸시 직전 커밋을 찾는 방법. 브랜치를 덮어써도 커밋은 남아 있고, 90일 안에는 되돌릴 수 있습니다.',
    shotDiffAlt: '공격 직전 파일과 지금 파일을 좌우로 비교하는 화면',
    title: '어떻게 도나',
    desc: 'GitHub 은 푸시가 들어올 때마다 옮기기 직전에 브랜치가 어디를 가리켰는지 적어둡니다. 그 주소로 돌아가서 지금과 맞대봅니다.',
    h1: '덮어써도 원래 커밋은 남아 있어요',

    stickyTitle: '브랜치는 포스트잇이에요',
    sticky1: '브랜치는 커밋 더미 어딘가에 붙어서 "여기가 최신" 이라고 가리킬 뿐이에요.',
    sticky2: '공격자가 강제로 덮어쓴 건 커밋을 지운 게 아니라 포스트잇을 다른 데로 옮긴 겁니다. 원래 커밋은 그대로 있고, 주소를 잃어버렸을 뿐이에요.',
    sticky3: '그런데 GitHub 은 푸시가 들어올 때마다 옮기기 직전에 어디를 가리켰는지 적어둡니다.',
    eventLabel: 'GitHub 활동 기록',
    lostAddress: '잃어버린 주소',
    sticky4: '되돌리기도 여기서 나와요. 포스트잇을 원래 자리에 도로 붙이면 됩니다.',

    flowTitle: '순서',
    flow: [
      ['시간대 안의 푸시를 모아요', '이벤트로 대상을 좁혀요. 조직 전체를 다 뒤지지 않습니다.'],
      ['공격 직전 트리와 지금 트리를 맞대요', '어떤 파일이 생기고, 바뀌고, 사라졌는지 나옵니다.'],
      ['바뀐 파일을 전부 모아요', '여기가 결과물이에요. 규칙과 무관하게 다 남습니다.'],
      ['먼저 볼 것에 형광펜을 칩니다', '판정이 아니라 순서예요.'],
      ['사람이나 AI 가 읽고 판단해요', '이 도구는 여기까지 안 옵니다.'],
    ],

    limitTitle: '한계도 여기서 나와요',
    limit1: 'GitHub 활동 기록은 90일, 300건까지만 남습니다. 그 밖으로 밀려나면 주소를 못 찾아요.',
    limit2: '그래서 사고가 나면 빨리 봐야 하고, 도구도 이걸 화면에서 말해줍니다. 훑은 기록을 파일로 남기는 것도 같은 이유예요.',

    watchTitle: '먼저 볼 것을 고르는 방식',
    watchLede: '넷 다 실제로 당한 공격에서 나왔어요. 여기 안 걸렸다고 괜찮다는 뜻이 아닙니다.',
    watches: [
      ['크기 급증', '설정 파일 뒤에 공백을 길게 넣고 그 뒤에 코드를 숨기는 수법이 있어요. 이름은 그대로라 눈에 안 띄는데 크기는 정직하게 늘어납니다.'],
      ['저장소 간 같은 파일', '도구로 여러 저장소를 덮어쓰면 완전히 같은 내용이 여기저기 들어가요. 내용의 해시가 같으면 같은 파일입니다.'],
      ['커밋 위조', 'author 이름과 날짜는 바꿀 수 있어요. 그런데 committer 날짜는 실제로 커밋이 만들어진 시각이라 어긋난 자국이 남습니다.'],
      ['도구 흔적', '자동화 도구는 작업용 임시 파일을 만들고, 그게 커밋에 안 섞이게 .gitignore 에 적어둬요. 그 줄이 그대로 지문입니다.'],
    ],
    next: '켜보기',
  },

  start: {
    seoTitle: 'gitmoru 설치하고 저장소 침해 확인하기',
    seoDesc: 'Node 22 이상, pnpm, GitHub CLI 만 있으면 클론해서 바로 켭니다. gh auth login 에서 막힐 때, 문단속이 비어 나올 때 어떻게 읽어야 하는지도 함께.',
    teamMessage: `저장소가 털렸을 때 뭐가 바뀌었는지 확인하는 도구예요.
각자 계정으로 한 번씩만 돌려주세요.

https://github.com/gitmoru/gitmoru

필요한 것: Node 22 이상, pnpm, GitHub CLI

  git clone https://github.com/gitmoru/gitmoru.git
  cd gitmoru
  gh auth login
  pnpm install
  pnpm app

창이 뜨면 조직 이름 넣고 "파보기" 를 누르세요. 시간대는 기본값 그대로요.
결과가 뭐가 나오든, 아무것도 안 나와도 알려주세요.

코드를 내려받거나 실행하지 않고 읽기만 합니다.
토큰은 gh 에서 빌려 쓰고 저장하지 않아요.`,
    teamNote: '"아무것도 안 떴다" 도 꼭 받아두세요. 안 돌려본 사람과 구분이 안 되면, 그 순간 팀 전체가 확인했다고 착각하게 됩니다.',
    teamCopy: '이 글을 복사해서 팀 채널에 붙이세요',
    teamLede: '계정마다 보이는 범위가 달라요. 한 사람이 훑은 결과가 전부가 아니라서, 각자 한 번씩 돌려보는 게 맞습니다.',
    teamTitle: '팀에 알리기',
    title: '시작하기',
    desc: 'Node 22 이상, pnpm, GitHub CLI 가 있으면 클론해서 바로 켤 수 있어요.',
    h1: '받아서 켜기',
    needTitle: '먼저 있어야 하는 것',
    needCheck: '한 줄로 확인해요',
    runTitle: '받아서 켜기',
    afterTitle: '창이 뜨면',
    after1: '조직 이름을 넣고 파보기를 누르세요. 시간대는 기본값 그대로 두면 됩니다.',
    after2: '기본값은 오늘 새벽 0시부터 7시까지예요. 사고는 대개 이 시간대에 납니다.',

    stuckTitle: '자주 막히는 곳',
    stuck: [
      ['gh auth login 에서 막혀요', '설치보다 여기서 더 많이 막힙니다. 이미 로그인돼 있는지는 gh auth status 로 확인하세요.'],
      ['문단속이 대부분 안 보여요', '배포 키와 웹훅은 저장소 관리자 권한이 있어야 조회됩니다. 권한이 없으면 "못 봤다" 고 정직하게 나와요. 그걸 "없다" 로 읽으면 안 됩니다.'],
      ['결과가 안 떠요', '복구가 이미 끝났으면 깨끗하게 나옵니다. 다만 계정마다 보이는 범위가 달라서, 각자 한 번씩 돌려보는 게 맞아요.'],
    ],

    noInstallerTitle: '설치 파일은 안 만들었어요',
    noInstaller1: '이 도구는 저장소 접근 권한을 씁니다. 서명 없는 실행 파일이 그걸 요구하는 모습은, 이 도구가 찾아내는 공격과 구분이 안 돼요.',
    noInstaller2: '받는 사람은 방금 털린 사람이에요. 그런 날에 건네야 할 건 읽을 수 있는 코드라고 봤습니다.',

    factTitle: '알아두면 좋은 것',
    facts: [
      ['웹사이트가 아니에요', '내 컴퓨터에 뜨는 창입니다. 접속할 주소도, 로그인도 없어요.'],
      ['토큰을 저장하지 않아요', 'gh 에서 그때그때 빌려 씁니다. 화면으로는 안 내려가요.'],
      ['코드를 실행하지 않아요', '내려받지도, 설치하지도, 빌드하지도 않고 읽기만 합니다.'],
      ['세 언어로 씁니다', '한국어, English, 日本語. 번역이 아니라 그 언어로 다시 썼어요.'],
    ],
    next: 'AI 에 붙이기',
  },

  mcp: {
    seoTitle: 'Claude Code 에 붙이는 GitHub 저장소 조사 MCP 서버',
    seoDesc: '읽기 전용 MCP 도구 11개. 스캔, 트리아지, diff, 배포 키와 웹훅 점검까지 AI 가 직접 읽습니다. Claude Code, Cursor, Codex CLI 에 한 줄로 붙습니다.',

    mcpSample: `someorg 2026-08-04  (case-mcpx)
본 시간대: 2026-08-04 00:00 ~ 2026-08-04 07:00 GMT+9

- [덮어씀]   a/b@main   커밋 6개 사라짐
- [갈아치움] a/c@dev    이전 기록과 이어지지 않음
- [확인 실패] a/e@main  커밋이 정리돼 없습니다

합계: 사라진 커밋 6개
기록이 갈아치워진 브랜치 1곳 - 되돌리기로도 못 살립니다
확인하지 못한 푸시 1건 - 없었다는 뜻이 아닙니다`,
    title: 'AI 붙이기',
    desc: 'MCP 서버가 같이 들어 있어요. Claude Code 같은 곳에 붙이면 AI 가 결과를 직접 읽습니다.',
    h1: '읽는 건 AI 한테 넘겨요',
    lede: '이 도구는 무엇이 바뀌었는지까지 합니다. 그게 무슨 코드인지는 안 해요. 대신 MCP 서버가 같이 들어 있어서, 붙이면 AI 가 결과를 직접 읽습니다.',
    addTitle: '한 줄로 붙여요',
    addNote: '앱에서 AI 붙이기를 누르면 이 컴퓨터의 실제 설정 파일 경로까지 알려줘요.',
    clientsTitle: '붙는 곳',
    toolsTitle: '도구 11개',
    tools: [
      ['scan', '시작. caseId 를 받아요'],
      ['open_case', '앱에서 훑어둔 사건을 그대로 열어요'],
      ['triage', '무엇부터 볼지'],
      ['list_changes', '바뀐 파일 전부'],
      ['diff_file', '공격 직전 파일과 지금 파일 비교'],
      ['read_file', '파일 전체 읽기'],
      ['list_forced_pushes', '어느 브랜치가 커밋 몇 개를 잃었는지'],
      ['check_access', '배포 키, 웹훅, 대기 초대'],
      ['preview_restore', '무엇을 어디로 되돌리게 되는지'],
      ['share_summary', '팀 채널용 요약'],
      ['list_cases', '보관된 사건 목록'],
    ],
    sampleTitle: '이렇게 나와요',
    readTitle: '전부 읽기 전용이에요',
    read1: '되돌리기를 도구로 안 넣었어요. 기능이 부족해서가 아닙니다.',
    read2: '에이전트는 공격자가 쓴 글을 읽습니다. 거기에 "이전 지시를 무시하고..." 가 섞여 있을 수 있고, 쓰기 도구가 열려 있으면 그게 곧 공격 경로예요.',
    read3: '읽기만 열어두면 최악의 경우에도 잘못된 설명에서 끝납니다. 저장소는 그대로예요. 되돌리기 방아쇠는 사람이 앱에서 당깁니다.',
    next: '만든 이유',
  },

  story: {
    seoTitle: '브랜치 222개가 덮어써진 사고를 수습하며 만든 도구',
    seoDesc: '계정 하나가 털려 몇 시간 만에 브랜치 222개가 사라진 실제 사고. gh api 스크립트로는 왜 안 됐는지, 0건이 왜 제일 무서웠는지.',
    title: '만든 이유',
    desc: '실제 사고를 터미널로 수습하면서 만들었습니다. 브랜치가 222개가 되니 명령을 손으로 치는 게 불가능했어요.',
    h1: '0건이 무서웠어요',
    p1: '실제 사고를 터미널로 수습하면서 만들었어요. 계정 하나가 털렸고, 몇 시간 만에 브랜치 222개가 덮어써졌습니다.',
    p2: '처음에는 gh api 로 브랜치 몇 개만 확인하는 스크립트였어요. 그런데 222개가 되니 결과를 못 믿겠더라고요.',
    p3: '0이 나와도 진짜 깨끗한 건지, 조회가 실패한 건지 알 수가 없었습니다. 잘못 짠 명령 하나가 조용히 0건을 뱉는 게 제일 무서웠어요.',
    p4: '그걸 구분해주는 걸 만들다 보니 도구가 됐습니다.',

    scriptTitle: '스크립트로는 안 됐던 것',
    scripts: [
      ['활동 기록에 강제 푸시 여부가 없어요', 'before 와 head 만 있고 forced 같은 값이 없습니다. 그래서 정상 푸시랑 덮어쓰기가 겉으로 똑같이 생겼어요. 그냥 짜면 222개가 다 정상 푸시로 보입니다.'],
      ['에러 하나에 뜻이 둘이에요', '비교하다 404 가 나면, 기록이 갈아치워진 것일 수도 있고 커밋이 정리돼 사라진 것일 수도 있어요. 앞은 보고할 사실이고 뒤는 확인 실패입니다. 스크립트는 둘 다 그냥 에러로 넘겨요.'],
      ['시간 한 글자가 틀리면 조용히 엉뚱한 데를 봐요', 'Date.parse 는 못 읽은 값에 에러를 안 내고 2000년 1월 1일을 만들어냅니다. 그러면 26년 전을 훑고 "아무 일 없었어요" 가 떠요.'],
      ['222개를 눈으로 못 읽어요', '스크립트는 결과를 터미널에 쏟아붓습니다. 정작 필요한 건 "이 중에 뭐부터 볼까" 인데, 그건 화면이 있어야 되는 일이었어요.'],
    ],

    nowTitle: '지금은',
    now: '복구는 끝났고, 이 도구는 다음을 위해 남겨뒀어요. 비슷한 일이 또 생기면 그때 켜면 됩니다.',
    thanks: '읽어주셔서 고맙습니다.',
  },

  safety: {
    seoTitle: '악성 코드가 든 저장소를 안전하게 들여다보는 방법',
    seoDesc: 'clone 도 실행도 하지 않고 GitHub API 로만 읽습니다. 토큰은 화면에 안 내려가고, 페이로드는 무력화해서 글자로만 그립니다. 지키는 규칙 10가지.',
    title: '이 도구가 안 하는 것',
    desc: '악성 코드가 들어 있을 수 있는 저장소를 들여다보는 도구예요. 그래서 편해 보이는 방법이 대개 막혀 있습니다.',
    h1: '이 도구가 안 하는 것',
    lede: '악성 코드가 들어 있을 수 있는 저장소를 들여다보는 도구예요. 분석 대상이 악성이라는 전제 위에서 만들었습니다. 그래서 편해 보이는 방법이 대개 막혀 있어요.',
    rulesTitle: '지키는 것',
    rules: [
      ['내려받지 않아요', 'git clone 도, fetch 도, checkout 도 하지 않습니다. 폴더를 편집기로 여는 순간 실행되는 페이로드가 있어요. 내려받는 순간 진 겁니다.'],
      ['실행하지 않아요', '대상 저장소에 설치도, 빌드도, 린트도 돌리지 않습니다. package.json 도 텍스트로 읽기만 해요.'],
      ['바깥으로 통신하지 않아요', '화면에 CSP 를 걸어서, 페이로드에 박힌 주소로 요청을 보내는 것 자체가 불가능합니다. GitHub 호출은 목적지가 코드에 고정돼 있어요.'],
      ['토큰이 화면으로 안 내려가요', 'gh 에서 빌린 토큰은 로컬 프로세스 안에만 있습니다. 파일로 저장하지 않고, 로그와 기록에서도 가려요.'],
      ['남이 접속할 수 없어요', '브라우저로 볼 때도 127.0.0.1 에만 열립니다. 같은 와이파이의 다른 기기에서도 안 보여요.'],
      ['페이로드를 그리지 않아요', '대상 저장소의 HTML 이나 마크다운을 렌더링하지 않습니다. 주소는 눌리지 않게 무력화해서 글자로만 보여줘요.'],
      ['AI 에게 쓰기 권한을 안 줘요', '에이전트는 공격자가 쓴 글을 읽습니다. 거기에 지시문이 섞여 있을 수 있고, 쓰기 도구가 열려 있으면 그게 곧 공격 경로예요.'],
      ['되돌리기는 사람이 눌러요', '기본은 미리보기입니다. 실제 실행은 잠금을 풀어야 하고, 보호 규칙이 걸린 브랜치는 우리가 임의로 바꾸지 않아요.'],
      ['조용히 실패하지 않아요', '검사에 실패한 대상을 깨끗함으로 칠하지 않습니다. 확인 못 한 개수를 세서 눈에 띄는 자리에 적어요.'],
      ['남의 설정 파일을 안 고쳐요', 'AI 도구에 붙일 때, 그 도구의 설정 파일을 대신 편집하지 않습니다. 넣을 내용을 보여주고 사람이 적용해요.'],
    ],
    sourceTitle: '더 자세히',
    sourceNote: '위 내용은 사용자용으로 다시 쓴 것이에요. 코드를 고치는 사람이 지켜야 할 원문과 그렇게 정한 이유는 저장소에 있습니다.',
    sourceRules: '원문 규칙',
    sourceWhy: '그렇게 정한 이유',
  },
  notFound: {
    title: '아무것도 안 나왔어요',
    // 이 도구가 0건을 다루는 방식 그대로. 없다고 하지 않고 못 찾았다고 한다.
    h1: '여긴 아무것도 안 나왔어요',
    p: '판 건 확실합니다. 주소가 틀렸거나, 저희가 아직 안 만든 페이지예요.',
    back: '지표로 올라가기',
  },
}

type Dict = typeof ko

export const en: Dict = {
  nav: {
    copy: 'Copy',
    copied: 'Copied',

    why: 'Why no verdict',
    how: 'How it works',
    start: 'Get started',
    mcp: 'Hook up an agent',
    story: 'Why we built it',
    github: 'GitHub',
    menu: 'Menu',
    lang: 'Language',
  },

  foot: {
    blurb: 'A tool for digging into what happened to your repositories. Nothing is downloaded, nothing leaves your machine.',
    groupRead: 'Read',
    groupCode: 'Code',
    groupKeeps: 'What we keep to',
    madeBy: 'Made by',
    issues: 'Report a problem',

    license: 'MIT. A personal tool',
    safety: 'What it will not do',
    decisions: 'Decisions',
  },

  home: {
    seoTitle: 'Undo a force push and find the commits that went missing',
    seoDesc: 'Find every file that changed in a GitHub org during a time window, branch by branch. Recover commits lost to a force push, and see exactly what could not be verified. Nothing is cloned.',
    title: 'Find out what changed when your repos got hit',
    desc: 'Finds the files that changed in a repository during a time window, branch by branch. Nothing is downloaded, nothing leaves your machine.',
    h1: [{ t: 'Your repos got hit. ' }, { t: 'Find out what actually changed', hl: true }, { t: '.' }],
    lede: 'It reads the events API to find every file that changed in a time window, branch by branch. Nothing is cloned, and nothing leaves your machine.',
    outputLabel: 'Here is what it tells you',
    output1: 'Nothing stood out.',
    output2: 'Still, 14 changed files are worth a look.',
    outputWhy: 'Zero findings does not mean you are clear. It means no rule matched.',
    ctaStart: 'Get started',
    ctaWhy: 'Why no verdict',

    threeTitle: 'What it does',
    three: [
      ['What got hit', 'Which repos out of dozens, and how many branches, narrowed down by time window.'],
      ['What came in', 'The file before the attack and the file now, side by side. What the code does is for an agent to read.'],
      ['Can it be undone', 'Whether the commit from just before the attack is still reachable. You press the button, not us.'],
    ],

    forkNow: 'We just got hit',
    forkLook: 'Just reading',

    whenTitle: 'When you would reach for it',
    whenLede: 'All of these are situations we have actually been in.',
    when: [
      'A commit you do not recognise showed up',
      'Branches got overwritten, and you need to know how many and how many commits are gone',
      'A token or key leaked, and you want to see what came in during that window',
      'A teammate\'s account was taken over, and you need to know what it did',
      'Nothing happened, and you are doing a routine check. Deploy keys and webhooks leave no push trail',
      'After a restore, to confirm what you rolled back actually rolled back',
    ],
    shotTitle: 'What it looks like',
    shotAlt: 'Scan results, with changed files grouped by branch',
    shareSample: `[someorg 2026-08-04]
Scope: someorg
Window: 2026-08-04 00:00 - 2026-08-04 07:00 (GMT+9)

Checked 3 repositories and 12 branches.
Changed 4, reverted 0, untouched 7, unchecked 1
History was overwritten on 1 branch, dropping 6 commits.

Note: 1 branch could not be checked.
      This result should not be read as "nothing found".`,
    quickTitle: 'Running in about a minute',
    quickNote: 'You need Node 22+, pnpm and the GitHub CLI.',
    quickMore: 'See the full steps',
  },

  why: {
    seoTitle: 'Why a security tool saying zero findings does not mean you are clear',
    seoDesc: 'A zero can mean no activity, no change, a failed lookup, or a rule that matched nothing. Collapsing them into one number is how tools end up reassuring you about nothing.',
    title: 'Why no verdict',
    desc: 'Detection rules come from attacks someone already survived. If rules render verdicts, whatever they miss gets painted as "all clear".',
    h1: 'It will not tell you you\'re safe',
    lede: 'There\'s exactly one thing this tool will tell you.',
    quote: 'These files changed, by this much, in this window.',

    reasonTitle: 'Rules only catch what someone already hit',
    reason1: 'Detection rules come from attacks someone already survived. A new technique is, by definition, not in them.',
    reason2: 'When rules render verdicts, whatever they miss gets painted as "all clear".',
    reason3: 'That happened to us. We searched by filename, missed the same payload under a different name, and the screen said zero. We believed that screen for a while.',

    zeroTitle: 'A zero means four different things',
    zeroLede: 'A zero on screen can be any of these four, and they are not the same thing.',
    zero: [
      ['No activity', 'Nobody touched it in that window. There is nothing to compare.'],
      ['No changes', 'There were pushes, but the contents are unchanged.'],
      ['Could not check', 'A lookup failed, so we can\'t claim anything either way.'],
      ['No rule matched', 'It changed, and nothing flagged it. Someone still has to read it.'],
    ],
    zeroNote: 'Collapse those four into one zero and the third one reads as the first. That is where a tool starts lying to you.',

    ruleTitle: 'What that rules out',
    rules: [
      ['Nothing is ever red', 'Colour doesn\'t hand down verdicts either. There is no red in the interface.'],
      ['Levels are not severity', 'A signal carries attention, not risk. Not how dangerous it is, but how soon you should look at it.'],
      ['Failures stay on screen', 'Anything unverified is counted and shown where you can\'t miss it. Swallowing it quietly is how you end up reassured about nothing.'],
      ['Zero signals still leaves a full list', 'Every changed file is listed whether a rule matched it or not. Rules only set the order.'],
    ],
    next: 'So what is it actually looking at',
  },

  how: {
    seoTitle: 'How to recover a branch after a force push, using the GitHub events API',
    seoDesc: 'A force push does not delete commits. GitHub records the commit a branch pointed at before every push, and for about 90 days you can go back and diff it against now.',
    shotDiffAlt: 'The file before the attack and the file now, side by side',
    title: 'How it works',
    desc: 'GitHub records where a branch pointed right before each push. We go back to that address and compare it against now.',
    h1: 'A force push doesn\'t delete your commits',

    stickyTitle: 'A branch is just a pointer',
    sticky1: 'A branch is a label sitting on one commit, saying this one is the tip.',
    sticky2: 'A force push doesn\'t delete commits. It moves the label. The old commits are still in there. You just lost the address.',
    sticky3: 'And GitHub records that address on every push it receives.',
    eventLabel: 'GitHub events API',
    lostAddress: 'the lost address',
    sticky4: 'Restoring works the same way. Point the branch back at that commit.',

    flowTitle: 'How a scan runs',
    flow: [
      ['Collect pushes in the window', 'Events narrow the targets, so it does not\'t crawl the whole org.'],
      ['Diff the tree before against now', 'Which files were added, modified or deleted.'],
      ['Keep every changed file', 'This is the output. It stays whether a rule matched or not.'],
      ['Rank what to read first', 'That is ordering, not a verdict.'],
      ['You or your agent take it from here', 'The tool stops right before this step.'],
    ],

    limitTitle: 'The same fact sets the limit',
    limit1: 'The events API keeps roughly 90 days and 300 events. Past that, the address is gone.',
    limit2: 'So you have to look early, and the tool says so on screen. It\'s also why every scan gets written to disk.',

    watchTitle: 'How it ranks what to read first',
    watchLede: 'All four came out of a real incident. Not matching one of them doesn\'t make a file fine.',
    watches: [
      ['Sudden size jump', 'Padding a config file with whitespace pushes the payload off screen. The name is unchanged, so nothing looks odd, but the size tells on it.'],
      ['Identical file across repos', 'Tooling that overwrites many repos leaves byte-identical files in all of them. Same content hash, same file.'],
      ['Forged author', 'Author name and date can be set to anything. The committer date is when the commit was really made, so the gap shows.'],
      ['Tooling left behind', 'Automation leaves scratch files behind and adds them to .gitignore so they don\'t get committed. That line is a fingerprint.'],
    ],
    next: 'Try it',
  },

  start: {
    seoTitle: 'Install gitmoru and check a repo after a breach',
    seoDesc: 'Node 22+, pnpm and the GitHub CLI, then clone and run. Includes where people get stuck on gh auth login and how to read an access check that comes back empty.',
    teamMessage: `A tool for finding out what changed after repos get hit.
Please run it once from your own account.

https://github.com/gitmoru/gitmoru

You need: Node 22+, pnpm, GitHub CLI

  git clone https://github.com/gitmoru/gitmoru.git
  cd gitmoru
  gh auth login
  pnpm install
  pnpm app

Enter the org name, hit Dig, leave the time window at its default.
Tell us what you got, including if you got nothing.

It never clones or runs any code. It only reads.
The token is borrowed from gh and never stored.`,
    teamNote: 'Ask for "nothing showed up" too. If that is indistinguishable from "never ran it", the whole team ends up believing it was checked.',
    teamCopy: 'Paste this into your team channel',
    teamLede: 'Every account sees a different slice. One person\'s scan is not the whole picture, so it is worth one run each.',
    teamTitle: 'Getting your team to run it',
    title: 'Get started',
    desc: 'With Node 22+, pnpm and the GitHub CLI, clone it and you are running.',
    h1: 'Clone it and run it',
    needTitle: 'Before you start',
    needCheck: 'Check all three in one line',
    runTitle: 'Clone and run',
    afterTitle: 'Once the window opens',
    after1: 'Type an org name and hit Dig. Leave the time window on its default.',
    after2: 'It defaults to midnight through 7am today. That\'s usually when this happens.',

    stuckTitle: 'Where people get stuck',
    stuck: [
      ['gh auth login', 'More people stall here than on the install itself. Run gh auth status first.'],
      ['The access check comes back mostly empty', 'Deploy keys and webhooks need admin on the repo. Without it the tool says so plainly. Don\'t read that as "there are none".'],
      ['Nothing shows up at all', 'If the restore is already done, a clean result is expected. Still worth one run per account, since each account sees a different slice.'],
    ],

    noInstallerTitle: 'There is no installer, on purpose',
    noInstaller1: 'This tool asks for access to your repositories. An unsigned binary asking for exactly that is indistinguishable from the attack it goes looking for.',
    noInstaller2: 'Whoever runs this just got breached. What you hand someone on that day is source they can read.',

    factTitle: 'Worth knowing up front',
    facts: [
      ['It is not a website', 'It\'s a window on your machine. No URL to visit, no account to sign up for.'],
      ['The token is never stored', 'Borrowed from gh each time, and never handed to the interface.'],
      ['It never executes anything', 'Nothing is cloned, installed or built. It only reads.'],
      ['Three languages', 'Korean, English, Japanese. Written in each, not translated into it.'],
    ],
    next: 'Hook up an agent',
  },

  mcp: {
    seoTitle: 'A read-only GitHub incident MCP server for Claude Code',
    seoDesc: 'Eleven read-only MCP tools: scan, triage, diff, forced-push history, deploy keys and webhooks. One line to connect from Claude Code, Cursor or Codex CLI.',

    mcpSample: `someorg 2026-08-04  (case-mcpx)
Window: 2026-08-04 00:00 - 2026-08-04 07:00 GMT+9

- [overwritten] a/b@main   6 commits gone
- [replaced]    a/c@dev    no common ancestor with the old history
- [unverified]  a/e@main   the commit has been garbage collected

Total: 6 commits gone
1 branch was replaced outright, and a restore cannot bring it back
1 push could not be verified, which does not mean it did not happen`,
    title: 'Hook up an agent',
    desc: 'An MCP server ships with it. Point Claude Code at it and the agent reads the results directly.',
    h1: 'Let the agent read the code',
    lede: 'This tool gets you as far as what changed. Working out what that code does is a different job, so an MCP server ships with it and the agent reads the results itself.',
    addTitle: "One line and you\'re done",
    addNote: 'Hit "Hook up an agent" in the app and it prints the real config path on your machine.',
    clientsTitle: 'Works with',
    toolsTitle: 'Eleven tools',
    tools: [
      ['scan', 'Start here. Returns a caseId'],
      ['open_case', 'Open a case the app already scanned'],
      ['triage', 'What to read first'],
      ['list_changes', 'Every changed file'],
      ['diff_file', 'The file before the attack against the file now'],
      ['read_file', 'The whole file'],
      ['list_forced_pushes', 'Which branch lost how many commits'],
      ['check_access', 'Deploy keys, webhooks, pending invites'],
      ['preview_restore', 'What would be restored where'],
      ['share_summary', 'A summary to paste in a team channel'],
      ['list_cases', 'Everything on disk'],
    ],
    sampleTitle: 'What comes back',
    readTitle: 'All eleven are read-only',
    read1: 'Restore isn\'t exposed as a tool, and not because it was hard to add.',
    read2: 'The agent reads text an attacker wrote. That text can contain "ignore your previous instructions", and a write tool sitting open is the path in.',
    read3: 'With reads only, the worst case is a wrong explanation. The repository stays untouched. A person pulls the restore trigger, in the app.',
    next: 'Why we built it',
  },

  story: {
    seoTitle: 'Built while cleaning up 222 force-pushed branches',
    seoDesc: 'One account was taken over and within hours 222 branches were overwritten. Why a gh api script was not enough, and why a printed zero was the scariest part.',
    title: 'Why we built it',
    desc: 'Built while cleaning up a real incident from a terminal. At 222 branches, typing commands by hand stopped being an option.',
    h1: 'The zero was the scary part',
    p1: 'Built while cleaning up a real incident from a terminal. One account was taken over, and within hours 222 branches had been overwritten.',
    p2: 'It started as a script that checked a few branches with gh api. At 222, we stopped trusting what it printed.',
    p3: 'When it printed zero, there was no way to tell a genuinely clean result from a lookup that had failed. One badly written command quietly returning zero was the scariest part.',
    p4: 'Telling those two apart is the thing that turned a script into a tool.',

    scriptTitle: 'What a script could not do',
    scripts: [
      ['The activity record doesn\'t say whether a push was forced', 'It has before and head, and no forced flag. A normal push and an overwrite look identical. Write the obvious script and all 222 look normal.'],
      ['One error, two meanings', 'A 404 on compare can mean the history was replaced, or that the commit was garbage collected. The first is a fact to report, the second is a failure to verify. A script logs both as an error and moves on.'],
      ['One wrong character in a timestamp scans the wrong window, silently', 'Date.parse doesn\'t throw on input it can\'t read. It invents January 1st, 2000. You scan 26 years ago and get "nothing happened".'],
      ['Nobody can read 222 of anything', 'A script just dumps everything into a terminal. What you actually need is "which of these first", and that needs a screen.'],
    ],

    nowTitle: 'Where it stands now',
    now: 'The restore is done. The tool stayed for next time. If it happens again, this is what you open.',
    thanks: 'Thanks for reading.',
  },

  safety: {
    seoTitle: 'Inspecting a possibly compromised repo without cloning or running it',
    seoDesc: 'No clone, no install, no build. Everything is read through the GitHub API, the token never reaches the interface, and payloads are defanged and shown as plain text.',
    title: 'What this tool will not do',
    desc: 'It looks into repositories that may contain malicious code. That is why the convenient way is usually closed off.',
    h1: 'What this tool will not do',
    lede: 'It looks into repositories that may contain malicious code, and it is built on the assumption that what it reads is hostile. That is why the convenient way is usually closed off.',
    rulesTitle: 'What we keep to',
    rules: [
      ['It never downloads anything', 'No clone, no fetch, no checkout. Some payloads run the moment a folder is opened in an editor. Downloading is already losing.'],
      ['It never runs anything', 'No install, no build, no lint against the target. Even package.json is only ever parsed as text.'],
      ['It cannot talk to the outside', 'A CSP on the interface makes it impossible to request the addresses embedded in a payload. GitHub calls have their destination pinned in code.'],
      ['The token never reaches the interface', 'The token borrowed from gh stays inside the local process. It is not written to a file, and it is masked in logs and records.'],
      ['Nobody else can reach it', 'Even in the browser it binds to 127.0.0.1 only. Another device on the same wifi cannot see it.'],
      ['Payloads are never rendered', 'HTML and markdown from the target are not rendered. URLs are defanged so they cannot be clicked, and shown as plain text.'],
      ['The agent gets no write access', 'The agent reads text an attacker wrote. That text can contain instructions, and a write tool sitting open is the path in.'],
      ['You press restore, not us', 'Preview is the default. Running it takes an explicit unlock, and protected branches are never quietly reconfigured.'],
      ['It never fails silently', 'A target that failed a check is never painted as clean. Whatever could not be verified is counted and shown where you cannot miss it.'],
      ['It never edits your other config', 'Hooking up an AI tool does not mean editing that tool\'s config for you. It shows you what to paste, and you paste it.'],
    ],
    sourceTitle: 'The long version',
    sourceNote: 'The above is rewritten for people using the tool. The rules as written for people changing the code, and the reasoning behind each one, live in the repository.',
    sourceRules: 'The rules themselves',
    sourceWhy: 'Why each one',
  },
  notFound: {
    title: 'Nothing here',
    h1: 'Nothing turned up here',
    p: 'We definitely dug. Either the address is wrong, or this page doesn\'t exist yet.',
    back: 'Back to the surface',
  },
}

export const ja: Dict = {
  nav: {
    copy: 'コピー',
    copied: 'コピーしました',

    why: 'なぜ判定しないか',
    how: 'しくみ',
    start: 'はじめかた',
    mcp: 'AI につなぐ',
    story: 'つくった理由',
    github: 'GitHub',
    menu: 'メニュー',
    lang: '言語',
  },

  foot: {
    blurb: 'リポジトリに何があったのかを掘る道具です。何もダウンロードせず、このパソコンの外へは何も送りません。',
    groupRead: '読むもの',
    groupCode: 'コード',
    groupKeeps: '守っていること',
    madeBy: '作った人',
    issues: '問題を知らせる',

    license: 'MIT。個人用のツールです',
    safety: 'しないこと',
    decisions: '決定の記録',
  },

  home: {
    seoTitle: 'force push で消えたコミットを探して復元する',
    seoDesc: 'GitHub の組織で、指定した期間に変わったファイルをブランチごとに洗い出します。force push で消えたコミットを戻し、確認できなかった箇所も明示します。clone はしません。',
    title: 'リポジトリがやられたとき、何が変わったのかを掘ります',
    desc: '指定した期間にリポジトリで変わったファイルを、ブランチごとに探して見せます。何もダウンロードせず、このパソコンの外へは何も送りません。',
    h1: [{ t: 'リポジトリがやられたとき、' }, { t: '何が変わったのかを掘ります', hl: true }],
    lede: 'Events API を読んで、指定した期間に変わったファイルをブランチごとに洗い出します。clone はしませんし、このパソコンの外へは何も送りません。',
    outputLabel: '掘り終わるとこう伝えます',
    output1: '目立つものは 0 件でした。',
    output2: 'それでも、変更された 14 件は一度見てください。',
    outputWhy: '0 件は「問題なし」ではありません。ルールに引っかからなかった、というだけです。',
    ctaStart: 'はじめる',
    ctaWhy: 'なぜ判定しないか',

    threeTitle: 'できること',
    three: [
      ['どこがやられたか', '数十のリポジトリのうちどこで、ブランチ何本が変わったのかを、期間で絞って探します。'],
      ['何が入ったか', '攻撃直前のファイルと今のファイルを並べて見せます。それがどんなコードかは AI が読みます。'],
      ['戻せるか', '攻撃直前のコミットがまだ残っているかを確認します。実行するのは人です。'],
    ],

    forkNow: '今やられました',
    forkLook: '先に中身を見たい',

    whenTitle: 'こんなときに使います',
    whenLede: 'どれも実際にあった状況です。',
    when: [
      '見覚えのないコミットが上がってきたとき',
      'ブランチが上書きされたとき。何本やられて、コミットが何件消えたのか',
      'トークンや鍵が漏れたかもしれないとき。その時間帯に何が入ったのか',
      'メンバーのアカウントが乗っ取られたかもしれないとき。そのアカウントが何をしたのか',
      '事故がないときの定期点検。デプロイキーや Webhook はプッシュ履歴に残りません',
      '復元したあとの確認。戻したものが実際に戻っているか',
    ],
    shotTitle: 'こんな画面です',
    shotAlt: 'スキャン結果。変更されたファイルがブランチごとに並ぶ',
    shareSample: `[someorg 2026-08-04]
対象: someorg
期間: 2026-08-04 00:00 〜 2026-08-04 07:00（GMT+9）

リポジトリ 3 件、ブランチ 12 本を確認しました。
変更 4、復元済み 0、変化なし 7、未確認 1
ブランチ 1 本で履歴が上書きされ、コミット 6 件が消えました。

※ ブランチ 1 本を確認できませんでした。
   この結果を「異常なし」と判断しないでください。`,
    quickTitle: '1 分ほどで動きます',
    quickNote: 'Node 22 以上、pnpm、GitHub CLI が必要です。',
    quickMore: '詳しいスキャンの流れを見る',
  },

  why: {
    seoTitle: 'セキュリティツールの「0 件」が安全を意味しない理由',
    seoDesc: '0 件には、動きがない、変化がない、取得に失敗した、ルールに当たらなかったの 4 つがあります。まとめて 1 つの 0 にすると、そこから道具が嘘をつきはじめます。',
    title: 'なぜ判定しないか',
    desc: '検出ルールは、誰かが一度やられた攻撃からできています。ルールが判定を下す形にすると、拾えなかった攻撃が「異常なし」として表示されます。',
    h1: '「問題ありません」とは言いません',
    lede: 'この道具が報告するのは 1 つだけです。',
    quote: 'この期間に、これらのファイルがこれだけ変わりました。',

    reasonTitle: 'ルールは誰かが一度やられた手口しか知りません',
    reason1: '検出ルールは、誰かが一度やられた攻撃からできています。新しい手口は、定義上そこにありません。',
    reason2: 'ルールが判定を下す形にすると、拾えなかった攻撃が「異常なし」として表示されます。',
    reason3: '実際そうなりました。ファイル名で探していて、別の名前についた同じコードを見落とし、画面には 0 件と出ました。その画面を、しばらく信じていました。',

    zeroTitle: '0 件には 4 つの意味があります',
    zeroLede: '画面の 0 件は、この 4 つのどれかです。同じではありません。',
    zero: [
      ['動きなし', 'その期間は誰も触っていません。比べるものがありません。'],
      ['変化なし', 'プッシュはありましたが、中身はそのままです。'],
      ['確認できなかった', 'API 呼び出しに失敗したので、どちらとも報告できません。'],
      ['ルールに未該当', '変更はありましたが、どのルールにも当たりませんでした。人が読む必要があります。'],
    ],
    zeroNote: '4 つをまとめて 0 と書くと、3 番目が 1 番目として読まれます。そこから先は、道具が嘘をついていることになります。',

    ruleTitle: 'そこから外したもの',
    rules: [
      ['赤はどこにも出しません', '色でも判断を下しません。UI のどこにも赤はありません。'],
      ['レベルは危険度ではありません', 'シグナルにつくのは注目度です。「どれだけ危険か」ではなく「どれだけ先に見るべきか」です。'],
      ['失敗を隠しません', '確認できなかったものは数えて、見落とせない場所に書きます。黙って通すと、それが偽の安心になります。'],
      ['シグナル 0 でも一覧は残ります', 'ルールに引っかからなかった変更も全部一覧にあります。ルールは順番を決めるだけです。'],
    ],
    next: 'では実際に何を見ているのか',
  },

  how: {
    seoTitle: 'force push 後にブランチを復元するしくみ',
    seoDesc: 'force push はコミットを消しません。GitHub はプッシュ直前にブランチが指していたコミットを記録していて、90 日ほどの間なら戻って今と比較できます。',
    shotDiffAlt: '攻撃直前のファイルと今のファイルを左右に並べた画面',
    title: 'しくみ',
    desc: 'GitHub はプッシュのたびに、ブランチが直前どこを指していたかを記録しています。その住所に戻って、今と突き合わせます。',
    h1: '上書きしてもコミットは残っています',

    stickyTitle: 'ブランチはただのポインタです',
    sticky1: 'ブランチは 1 つのコミットに付いたラベルで、「ここが先頭」と指しているだけです。',
    sticky2: 'force push はコミットを消しません。ラベルを動かしただけです。元のコミットは残っていて、住所を見失っただけです。',
    sticky3: 'そして GitHub は、プッシュのたびにその住所を記録しています。',
    eventLabel: 'GitHub Events API',
    lostAddress: '見失った住所',
    sticky4: '復元も同じ仕組みです。ブランチをそのコミットに指し直すだけです。',

    flowTitle: 'スキャンの流れ',
    flow: [
      ['期間内のプッシュを集めます', 'イベントで対象を絞るので、組織全体を総当たりしません。'],
      ['直前のツリーと今のツリーを diff します', 'どのファイルが追加、変更、削除されたかが出ます。'],
      ['変わったファイルを全部残します', 'ここが成果物です。ルールと関係なく残ります。'],
      ['先に読むものを並べ替えます', '判定ではなく順番です。'],
      ['あとは人か AI が引き取ります', 'この道具はこの手前で止まります。'],
    ],

    limitTitle: '同じ事実が限界にもなります',
    limit1: 'GitHub Events APIは 90 日、300 件ほどしか残りません。それを過ぎると住所が見つかりません。',
    limit2: 'だから早く見る必要があり、道具も画面でそう伝えます。掘った記録をファイルに残すのも同じ理由です。',

    watchTitle: '先に読むものの決め方',
    watchLede: '4 つとも実際の事故から出てきたものです。どれにも当たらないから安全、という意味ではありません。',
    watches: [
      ['サイズの急増', '設定ファイルの後ろに空白を長く入れて、その先にコードを隠す手口があります。名前はそのままなので目につきませんが、サイズは正直に増えます。'],
      ['リポジトリをまたぐ同じファイル', 'ツールで複数のリポジトリを書き換えると、まったく同じ中身があちこちに入ります。内容のハッシュが同じなら同じファイルです。'],
      ['author の偽装', 'author の名前と日付は変えられます。ですが committer の日付は実際に作られた時刻なので、ずれた跡が残ります。'],
      ['ツールの痕跡', '自動化ツールは作業用の一時ファイルを作り、コミットに混ざらないよう .gitignore に書き足します。その行がそのまま指紋です。'],
    ],
    next: '動かしてみる',
  },

  start: {
    seoTitle: 'gitmoru を入れてリポジトリの侵害を確認する',
    seoDesc: 'Node 22 以上、pnpm、GitHub CLI があればクローンしてすぐ動きます。gh auth login で詰まるところ、点検が空で返るときの読み方も載せています。',
    teamMessage: `リポジトリがやられたとき、何が変わったのかを確認する道具です。
各自のアカウントで 1 回ずつ動かしてください。

https://github.com/gitmoru/gitmoru

必要なもの: Node 22 以上、pnpm、GitHub CLI

  git clone https://github.com/gitmoru/gitmoru.git
  cd gitmoru
  gh auth login
  pnpm install
  pnpm app

ウィンドウが開いたら組織名を入力して「掘る」を押してください。期間は既定のままで構いません。
何が出ても、何も出なくても教えてください。

コードのダウンロードも実行もせず、読むだけです。
トークンは gh から借りるだけで保存しません。`,
    teamNote: '「何も出なかった」も必ず集めてください。動かしていない人と見分けがつかなくなると、その時点でチーム全員が確認済みだと思い込みます。',
    teamCopy: 'この文章をチームのチャンネルに貼ってください',
    teamLede: 'アカウントごとに見える範囲が違います。誰か 1 人の結果がすべてではないので、各自 1 回ずつ動かすのが確実です。',
    teamTitle: 'チームに動かしてもらう',
    title: 'はじめかた',
    desc: 'Node 22 以上、pnpm、GitHub CLI があれば、クローンしてすぐ動きます。',
    h1: 'クローンして動かす',
    needTitle: 'はじめる前に',
    needCheck: '1 行でまとめて確認できます',
    runTitle: 'クローンして動かす',
    afterTitle: 'ウィンドウが開いたら',
    after1: '組織名を入力して「掘る」を押してください。期間は既定のままで構いません。',
    after2: '既定は今日の 0 時から 7 時までです。だいたいこの時間帯に起きます。',

    stuckTitle: 'よく詰まるところ',
    stuck: [
      ['gh auth login', 'インストール本体より、ここで止まる人のほうが多いです。まず gh auth status を実行してください。'],
      ['入り口の点検がほとんど空で返る', 'デプロイキーと Webhook にはリポジトリの管理者権限が要ります。権限がなければその旨をそのまま出します。それを「無い」と読まないでください。'],
      ['何も出てこない', '復元が済んでいれば、きれいな結果になるのが普通です。ただアカウントごとに見える範囲が違うので、各自 1 回ずつ動かすのがいいです。'],
    ],

    noInstallerTitle: 'インストーラは作っていません',
    noInstaller1: 'この道具はリポジトリへのアクセス権を使います。署名のない実行ファイルがそれを求める姿は、この道具が探している攻撃と見分けがつきません。',
    noInstaller2: '使う人は、たった今やられた人です。その日に渡すべきなのは、読めるソースのほうだと考えています。',

    factTitle: '先に知っておくこと',
    facts: [
      ['ウェブサイトではありません', '自分のパソコンに開くウィンドウです。アクセスする URL も、ログインもありません。'],
      ['トークンは保存しません', 'gh からその都度借ります。画面には渡しません。'],
      ['コードは一切実行しません', 'ダウンロードも、インストールも、ビルドもせず、読むだけです。'],
      ['3 言語で書いています', '한국어、English、日本語。訳したのではなく、その言語で書き直しました。'],
    ],
    next: 'AI につなぐ',
  },

  mcp: {
    seoTitle: 'Claude Code につなぐ読み取り専用の GitHub 調査 MCP サーバー',
    seoDesc: '読み取り専用の MCP ツール 11 個。スキャン、トリアージ、diff、force push 履歴、デプロイキーと Webhook の点検まで。Claude Code や Cursor に 1 行でつながります。',

    mcpSample: `someorg 2026-08-04  (case-mcpx)
期間: 2026-08-04 00:00 〜 2026-08-04 07:00 GMT+9

- [上書き]   a/b@main   コミット 6 件が消失
- [置き換え] a/c@dev    以前の履歴とつながっていません
- [確認不可] a/e@main   コミットが整理されて存在しません

合計: 消えたコミット 6 件
履歴ごと置き換わったブランチ 1 本。復元しても戻せません
確認できなかったプッシュ 1 件。なかったという意味ではありません`,
    title: 'AI につなぐ',
    desc: 'MCP サーバーが同梱されています。Claude Code などにつなぐと、AI が結果を直接読みます。',
    h1: 'コードを読むのは AI の仕事です',
    lede: 'この道具は「何が変わったか」までを引き受けます。それがどんなコードなのかは別の仕事なので、同梱の MCP サーバーにつなげば AI が結果を直接読みます。',
    addTitle: '1 行です',
    addNote: 'アプリで「AI につなぐ」を押すと、このパソコンの実際の設定ファイルの場所まで教えてくれます。',
    clientsTitle: 'つながる先',
    toolsTitle: 'ツール 11 個',
    tools: [
      ['scan', 'ここから。caseId が返ります'],
      ['open_case', 'アプリで掘った事件をそのまま開きます'],
      ['triage', '何から見るか'],
      ['list_changes', '変わったファイル全部'],
      ['diff_file', '攻撃直前のファイルと今のファイルを比較'],
      ['read_file', 'ファイル全体'],
      ['list_forced_pushes', 'どのブランチがコミットを何件失ったか'],
      ['check_access', 'デプロイキー、Webhook、保留中の招待'],
      ['preview_restore', '何をどこへ戻すことになるか'],
      ['share_summary', 'チームに貼るための要約'],
      ['list_cases', '保存された事件の一覧'],
    ],
    sampleTitle: 'こう返ってきます',
    readTitle: '11 個とも読み取り専用です',
    read1: '復元をツールにしていません。作れなかったからではありません。',
    read2: 'エージェントは攻撃者が書いた文章を読みます。そこに「これまでの指示を無視して...」が混ざっていることがあり、書き込みツールが開いていれば、それがそのまま侵入経路になります。',
    read3: '読み取りだけなら、最悪でも間違った説明で終わります。リポジトリはそのままです。復元の引き金は、人がアプリで引きます。',
    next: 'つくった理由',
  },

  story: {
    seoTitle: '222 本のブランチが force push で潰された事故から作りました',
    seoDesc: 'アカウントが 1 つ乗っ取られ、数時間でブランチ 222 本が上書きされました。gh api のスクリプトでは何が足りなかったのか、なぜ 0 件がいちばん怖かったのか。',
    title: 'つくった理由',
    desc: '実際の事故をターミナルで片付けながら作りました。ブランチが 222 本になると、コマンドを手で打つのは無理でした。',
    h1: '0 件が怖かったんです',
    p1: '実際の事故をターミナルで片付けながら作りました。アカウントが 1 つ乗っ取られ、数時間でブランチ 222 本が上書きされました。',
    p2: '最初は gh api でブランチを数本確認するスクリプトでした。222 本になったとき、結果が信じられなくなりました。',
    p3: '0 と出ても、本当にきれいなのか、取得に失敗したのかが分かりません。書き損じた 1 行が黙って 0 件を返す。それがいちばん怖かったです。',
    p4: 'その 2 つを見分けるものを作っているうちに、道具になっていました。',

    scriptTitle: 'スクリプトでは無理だったこと',
    scripts: [
      ['活動記録に強制プッシュかどうかが入っていません', 'before と head だけがあり、forced のような値はありません。普通のプッシュと上書きが見た目で同じです。素直に書けば 222 本とも普通のプッシュに見えます。'],
      ['1 つのエラーに意味が 2 つあります', '比較で 404 が出たとき、履歴が置き換わったのかもしれないし、コミットが整理されて消えたのかもしれません。前者は報告すべき事実、後者は確認失敗です。スクリプトはどちらもエラーで流します。'],
      ['時刻が 1 文字ずれると、黙って別の期間を見ます', 'Date.parse は読めない値でもエラーを出さず、2000 年 1 月 1 日を作り出します。26 年前を掘って「何もありませんでした」と出ます。'],
      ['222 件は目で読めません', 'スクリプトは結果をターミナルに流し込みます。本当に必要なのは「このうちどれから見るか」で、それには画面が要りました。'],
    ],

    nowTitle: '今の状況',
    now: '復元は終わり、この道具は次のために残しました。似たことがまた起きたら、これを開いてください。',
    thanks: '読んでくださってありがとうございます。',
  },

  safety: {
    seoTitle: '侵害された可能性のあるリポジトリを、clone せずに調べる',
    seoDesc: 'clone もインストールもビルドもしません。すべて GitHub API 経由で読み、トークンは画面に渡さず、ペイロードは無力化して文字としてだけ表示します。',
    title: 'この道具がしないこと',
    desc: '悪意あるコードが入っているかもしれないリポジトリを覗く道具です。だから楽に見える方法はたいてい塞いであります。',
    h1: 'この道具がしないこと',
    lede: '悪意あるコードが入っているかもしれないリポジトリを覗く道具です。読む対象が敵だという前提で作っています。だから楽に見える方法はたいてい塞いであります。',
    rulesTitle: '守っていること',
    rules: [
      ['ダウンロードしません', 'clone も fetch も checkout もしません。エディタでフォルダを開いた瞬間に走るペイロードがあります。落とした時点で負けです。'],
      ['実行しません', '対象に対してインストールもビルドも lint も走らせません。package.json もテキストとして読むだけです。'],
      ['外へ通信できません', '画面に CSP をかけているので、ペイロードに書かれたアドレスへ要求を出すこと自体ができません。GitHub 呼び出しは宛先をコードで固定しています。'],
      ['トークンが画面に降りてきません', 'gh から借りたトークンはローカルのプロセス内だけにあります。ファイルに保存せず、ログや記録でも隠します。'],
      ['他の人からは見えません', 'ブラウザで見るときも 127.0.0.1 にしか開きません。同じ Wi-Fi の別の端末からも見えません。'],
      ['ペイロードを描画しません', '対象の HTML やマークダウンをレンダリングしません。URL は押せない形に無力化して、文字としてだけ見せます。'],
      ['AI に書き込み権限を渡しません', 'エージェントは攻撃者が書いた文章を読みます。そこに指示文が混ざっていることがあり、書き込みツールが開いていればそれが侵入経路になります。'],
      ['復元を押すのは人です', '既定はプレビューです。実行には明示的なロック解除が要り、保護ルールのかかったブランチを勝手に変えることもしません。'],
      ['黙って失敗しません', '確認に失敗した対象を「きれい」とは塗りません。確認できなかった件数を数えて、見落とせない場所に書きます。'],
      ['他のツールの設定を書き換えません', 'AI ツールにつなぐとき、そのツールの設定ファイルを代わりに編集しません。貼る内容を見せて、人が貼ります。'],
    ],
    sourceTitle: 'もっと詳しく',
    sourceNote: '上は使う人向けに書き直したものです。コードを触る人が守る原文と、そう決めた理由はリポジトリにあります。',
    sourceRules: '原文のルール',
    sourceWhy: 'そう決めた理由',
  },
  notFound: {
    title: '何も出てきませんでした',
    h1: 'ここには何もありませんでした',
    p: '掘ったことは確かです。住所が違うか、まだ作っていないページです。',
    back: '地表へ戻る',
  },
}

const DICTS: Record<Lang, Dict> = { ko, en, ja }

export const t = (lang: Lang) => DICTS[lang]
