import puppeteer from 'puppeteer'
import fs from 'fs'
import https from 'https'
import path from 'path'

interface Target {
  wrap: string
  selector: string
}

/**
 * Download every image you want
 * @param target Target object
 * @param target.wrap Link that you want to download
 * @param target.selector Selector to picture that you want to download **MUST BE <img> THAT HAVE src**
 */
async function downloader(target: Target) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(target.wrap)
  const data = await page.$$eval(target.selector, imgs =>
    imgs.map(img => img.getAttribute('src'))
  )

  data.forEach(async imgSrc => {
    try {
      const imgName = imgSrc.split('/').pop()
      const file = fs.createWriteStream(path.join(__dirname, `imgs/${imgName}`))
      await https.get(imgSrc, res => res.pipe(file))
    } catch (err) {
      throw new Error(err)
    }
  })

  await browser.close()
}

downloader({
  wrap: 'your link',
  selector: 'your selector',
})
