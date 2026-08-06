import { PALETTE, SPRITE_H, SPRITE_W } from './sprites'

/**
 * 도트 격자를 SVG 로 굽는다.
 *
 * 빌드할 때 한 번 돌아서 결과가 HTML 에 그대로 박힌다.
 * 그래서 이 그림을 그리는 데 드는 자바스크립트가 **0바이트**다.
 * 움직임만 나중에 프레임을 갈아끼우는 짧은 스크립트가 맡는다.
 *
 * 한 칸을 `<rect>` 하나로 찍는다. 확대해도 안 흐려지고,
 * CSS 로 늘였다 줄이는 게 아니라 실제로 한 칸씩 그린 그림이다.
 */
export function frameToSvg(rows: string[], opts: { scale?: number } = {}): string {
  const scale = opts.scale ?? 1
  const cells: string[] = []

  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const key = row[x]
      if (!key || key === '.' || !PALETTE[key]) {
        x++
        continue
      }

      // 가로로 이어진 같은 색은 한 칸씩 찍지 않고 하나로 합친다.
      // 그림은 똑같은데 페이지가 절반 아래로 줄어든다.
      let run = 1
      while (row[x + run] === key) run++

      cells.push(`<rect x="${x}" y="${y}" width="${run}" height="1" fill="${PALETTE[key]}"/>`)
      x += run
    }
  })

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SPRITE_W} ${SPRITE_H}"`,
    ` width="${SPRITE_W * scale}" height="${SPRITE_H * scale}"`,
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
  opts: { scale?: number; ms?: number; label?: string } = {},
) {
  const inner = frames
    .map((f, i) => `<span class="col-start-1 row-start-1"${i ? ' hidden' : ''}>${frameToSvg(f, opts)}</span>`)
    .join('')

  return `<span class="grid" data-mole data-ms="${opts.ms ?? 380}" role="img" aria-label="${opts.label ?? '모루'}">${inner}</span>`
}
