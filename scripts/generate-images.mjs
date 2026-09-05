// Bakes the responsive variants of the portrait out of the full-resolution
// master in assets/ into public/img/, plus a social-card sized JPEG at
// public/jk.jpg for og:image.
//
// The output is committed, so CI does not need sharp — rerun this only when the
// master image changes:  bun run images
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const master = resolve(root, 'assets/jk.jpg')
const outDir = resolve(root, 'public/img')

// The photo renders at ~640 CSS px inside the 80ch article; 1280 covers 2x displays.
const widths = [640, 1280]

await mkdir(outDir, { recursive: true })

for (const width of widths) {
  await sharp(master).resize({ width }).webp({ quality: 78 }).toFile(resolve(outDir, `jk-${width}.webp`))
  await sharp(master).resize({ width }).jpeg({ quality: 80, mozjpeg: true }).toFile(resolve(outDir, `jk-${width}.jpg`))
}

// og:image — crawlers want a plain JPEG at a stable URL.
await sharp(master).resize({ width: 1200 }).jpeg({ quality: 82, mozjpeg: true }).toFile(resolve(root, 'public/jk.jpg'))

const { width, height } = await sharp(master).metadata()
console.log(`generated ${widths.length * 2} variants + og:image from ${width}x${height} master`)
