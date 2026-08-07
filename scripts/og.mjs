/**
 * 공유 카드를 굽는다.
 *
 * 링크를 붙였을 때 뜨는 그림이다. 사이트와 같은 색, 같은 글꼴, 같은 모루를 쓰려고
 * `/og/<언어>` 화면을 그대로 찍는다. 따로 그린 그림은 언젠가 사이트와 달라진다.
 *
 * 1200x630 은 슬랙, 카카오톡, X, 링크드인이 다 무난하게 그리는 크기다.
 * SVG 로 걸면 대부분의 메신저가 아예 안 그린다. 반드시 PNG 여야 한다.
 *
 *   pnpm og
 */

import { spawn } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const OUT = resolve(ROOT, 'public')
const PORT = process.env.OG_PORT ?? '4399'

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => existsSync(p))

const LANGS = ['ko', 'en', 'ja']
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

async function shoot() {
  if (!CHROME) throw new Error('크롬을 못 찾았어요.')
  mkdirSync(OUT, { recursive: true })

  // 사이트를 먼저 지어야 찍을 화면이 생긴다
  await new Promise((done, fail) => {
    const build = spawn('npx', ['astro', 'build'], { cwd: ROOT, stdio: 'ignore', shell: true })
    build.on('exit', (code) => (code === 0 ? done() : fail(new Error('빌드 실패'))))
  })

  const server = spawn('npx', ['astro', 'preview', '--port', PORT, '--host', '127.0.0.1'], {
    cwd: ROOT,
    stdio: 'ignore',
    shell: true,
  })

  // 정해진 시간만큼 자고 넘어가면 느린 날에 그냥 실패한다. 뜰 때까지 두드린다.
  const base = `http://127.0.0.1:${PORT}`
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(base, { signal: AbortSignal.timeout(800) })
      if (res.ok) break
    } catch {
      // 아직 안 떴다
    }
    await wait(500)
  }

  const browser = await chromium.launch({ executablePath: CHROME })
  try {
    for (const lang of LANGS) {
      const page = await browser.newPage({
        viewport: { width: 1200, height: 630 },
        deviceScaleFactor: 1,
      })
      await page.goto(`http://127.0.0.1:${PORT}/og/${lang}`, { waitUntil: 'networkidle' })
      // 글꼴이 다 내려오기 전에 찍으면 글자가 다른 모양으로 굳는다
      await page.evaluate(() => document.fonts.ready)
      await wait(500)
      await page.screenshot({ path: `${OUT}/og-${lang}.png` })
      console.log(`  og-${lang}.png`)
      await page.close()
    }
  } finally {
    await browser.close()
    server.kill()
  }

  console.log(`\n  ${OUT}`)
}

shoot().catch((err) => {
  console.error(`\n  못 찍었어요: ${err.message}\n`)
  process.exit(1)
})
