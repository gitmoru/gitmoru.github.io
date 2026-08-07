/**
 * 앱 화면을 찍는다.
 *
 * 손으로 찍으면 앱이 바뀔 때마다 사람이 다시 찍어야 하고, 언어마다 세 번씩 찍어야 한다.
 * 그러면 결국 안 찍게 되고, 사이트에는 옛날 화면이 남는다.
 *
 * 여기서 하는 일은 진짜 앱을 띄워서 진짜 저장소를 훑고 그 화면을 담는 것뿐이다.
 * 목업을 그리지 않는다. 사이트에 실물 대신 그럴듯한 그림을 올리는 순간
 * 이 사이트도 우리가 싫어하는 부류가 된다.
 *
 *   node scripts/shoot.mjs            앱을 직접 띄워서 찍는다
 *   APP_URL=... node scripts/shoot.mjs  이미 떠 있는 주소로 찍는다
 *
 * 대상 저장소는 우리 공개 저장소다. 남의 조직 이름이 화면에 남으면 안 된다.
 */

import { spawn } from 'node:child_process'
import { mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(HERE, '..', 'public', 'shots')
const APP = resolve(HERE, '..', '..', 'gitmoru')
const PORT = process.env.RADAR_PORT ?? '4191'
const URL = process.env.APP_URL ?? `http://127.0.0.1:${PORT}`

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => existsSync(p))

/** 찍을 저장소. 우리 것만 쓴다. */
const REPO = 'gitmoru/gitmoru'

/** 언어 고르는 화면에 뜨는 이름 */
const LANGS = [
  { code: 'ko', pick: '한국어', dig: '파보기' },
  { code: 'en', pick: 'English', dig: 'Dig' },
  { code: 'ja', pick: '日本語', dig: '掘る' },
]

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

async function serveApp() {
  if (process.env.APP_URL) return null
  const proc = spawn(process.execPath, ['bin/gitmoru.js'], {
    cwd: APP,
    env: { ...process.env, RADAR_PORT: PORT },
    stdio: 'ignore',
  })
  await wait(1500)
  return proc
}

async function shoot() {
  if (!CHROME) throw new Error('크롬을 못 찾았어요. APP_URL 과 함께 직접 띄워주세요.')
  mkdirSync(OUT, { recursive: true })

  const server = await serveApp()
  const browser = await chromium.launch({ executablePath: CHROME })

  try {
    for (const lang of LANGS) {
      const page = await browser.newPage({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 2,
      })
      await page.goto(URL, { waitUntil: 'networkidle' })

      /*
        처음 열면 언어를 묻는다.

        같은 이름의 버튼이 제목줄에도 있는데, 그건 오버레이 뒤에 깔려 있어서 눌리지 않는다.
        오버레이 안에서 찾아야 한다.
      */
      const sheet = page.locator('div[class*="z-[70]"]').first()
      if (await sheet.isVisible().catch(() => false)) {
        await sheet.getByRole('button', { name: lang.pick, exact: true }).click()
      }
      await wait(800)

      // 저장소를 콕 집는다. 조직 목록이 열려 있으면 남의 이름이 같이 찍힌다.
      await page.getByRole('textbox').first().fill('gitmoru')
      await wait(700)
      await page.getByText(REPO, { exact: false }).first().click()
      await wait(400)

      await page.getByRole('button', { name: lang.dig, exact: true }).first().click()
      // 훑기가 끝날 때까지. 파일 목록이 뜨면 끝난 것이다.
      await page.waitForSelector('text=/\\.ts|\\.tsx|\\.mjs/', { timeout: 60_000 })
      await wait(1200)

      await page.screenshot({ path: `${OUT}/scan-${lang.code}.png` })
      console.log(`  scan-${lang.code}.png`)

      // 파일 하나를 열어 좌우 비교 화면까지
      await page.getByText('src/core/', { exact: false }).first().click()
      await wait(1200)
      await page.screenshot({ path: `${OUT}/diff-${lang.code}.png` })
      console.log(`  diff-${lang.code}.png`)

      await page.close()
    }
  } finally {
    await browser.close()
    server?.kill()
  }

  console.log(`\n  ${OUT}`)
}

shoot().catch((err) => {
  console.error(`\n  못 찍었어요: ${err.message}\n`)
  process.exit(1)
})
