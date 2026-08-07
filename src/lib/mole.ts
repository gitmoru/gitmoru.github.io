import { PALETTE, SPRITE_H, SPRITE_W } from './sprites'

/**
 * 도트 격자를 SVG 로 굽는다.
 *
 * 빌드할 때 한 번 돌아서 결과가 HTML 에 그대로 박힌다.
 * 그래서 이 그림을 그리는 데 드는 자바스크립트가 **0바이트**다.
 * 움직임만 나중에 프레임을 갈아끼우는 짧은 스크립트가 맡는다.
 */

/**
 * 실루엣 둘레.
 *
 * 모루 몸통이 `#6f5442`, 표토가 `#6d5138` 이라 그냥 얹으면 대비가 1.05 다.
 * 거의 같은 색이라 형체가 안 보인다.
 *
 * 상자를 깔아서 가리는 대신 캐릭터에 테두리를 두른다. 도트 게임이 원래 쓰는 방법이고,
 * 배경이 무엇이든 형체가 남는다. **밝은 배경에서는 테두리가 형체를 만들고,
 * 어두운 배경에서는 테두리가 묻히는 대신 몸통 색이 살아난다.** 둘이 번갈아 일한다.
 */
const EDGE = '#0b0908'

/** 이 값들은 배경이 아니라 그림이다. 여기 둘레에 테두리를 두른다. */
const isInk = (ch: string | undefined) => Boolean(ch) && ch !== '.' && Boolean(PALETTE[ch!])

/** 격자 밖으로 한 칸 나가는 테두리까지 담으려면 여백이 필요하다 */
const PAD = 1

export function frameToSvg(rows: string[], opts: { scale?: number; outline?: boolean } = {}): string {
  const scale = opts.scale ?? 1
  const outline = opts.outline ?? true
  const cells: string[] = []

  if (outline) {
    // 비어 있는데 상하좌우 어딘가가 그림이면, 거기가 둘레다.
    for (let y = -PAD; y < SPRITE_H + PAD; y++) {
      let x = -PAD
      while (x < SPRITE_W + PAD) {
        const here = rows[y]?.[x]
        const edgeHere =
          !isInk(here) &&
          (isInk(rows[y - 1]?.[x]) ||
            isInk(rows[y + 1]?.[x]) ||
            isInk(rows[y]?.[x - 1]) ||
            isInk(rows[y]?.[x + 1]))

        if (!edgeHere) {
          x++
          continue
        }

        let run = 1
        while (
          !isInk(rows[y]?.[x + run]) &&
          (isInk(rows[y - 1]?.[x + run]) ||
            isInk(rows[y + 1]?.[x + run]) ||
            isInk(rows[y]?.[x + run - 1]) ||
            isInk(rows[y]?.[x + run + 1]))
        ) {
          run++
        }

        cells.push(`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${EDGE}"/>`)
        x += run
      }
    }
  }

  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const key = row[x]
      if (!isInk(key)) {
        x++
        continue
      }

      // 가로로 이어진 같은 색은 한 칸씩 찍지 않고 하나로 합친다.
      // 그림은 똑같은데 페이지가 절반 아래로 줄어든다.
      let run = 1
      while (row[x + run] === key) run++

      cells.push(`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${PALETTE[key!]}"/>`)
      x += run
    }
  })

  const w = SPRITE_W + PAD * 2
  const h = SPRITE_H + PAD * 2

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-PAD} ${-PAD} ${w} ${h}"`,
    ` width="${w * scale}" height="${h * scale}"`,
    ` shape-rendering="crispEdges" data-pixel aria-hidden="true">`,
    cells.join(''),
    '</svg>',
  ].join('')
}

/**
 * 여러 장을 한 자리에 겹쳐 놓고 한 장만 보여준다.
 *
 * 스프라이트 시트를 `background-position` 으로 미는 방식도 있는데,
 * 그러면 프레임마다 크기가 다를 때 어긋난다. 겹쳐두고 `hidden` 만 옮기면
 * 어긋날 일이 없고, 자바스크립트가 꺼져 있어도 첫 장은 보인다.
 */
export function framesToHtml(
  frames: string[][],
  opts: { scale?: number; ms?: number; label?: string; outline?: boolean } = {},
) {
  const inner = frames
    .map(
      (f, i) =>
        `<span class="col-start-1 row-start-1"${i ? ' hidden' : ''}>${frameToSvg(f, opts)}</span>`,
    )
    .join('')

  return `<span class="grid" data-mole data-ms="${opts.ms ?? 380}" role="img" aria-label="${opts.label ?? '모루'}">${inner}</span>`
}
