import puppeteer from 'puppeteer'
import fs from 'fs'
import https from 'https'
import path from 'path'

import { RootFolderNotExistError } from './error/root-folder-not-exist'
import { Logger } from './logger'

export interface Target {
  link: string
  selector: string
  folder: {
    root: string
    name: string
  }
}

interface PageTarget {
  page: puppeteer.Page
  selector: string
}

export async function downloader(target: Target) {
  const logger = new Logger()

  const browser = await puppeteer.launch()

  try {
    const page = await browser.newPage()

    await page.goto(target.link)

    const rootFolderPath = target.folder.root

    checkFolderExist(rootFolderPath)

    const saveImagePath = createImageFolder(rootFolderPath, target.folder.name)

    const data = await getTargetElement({
      page,
      selector: target.selector,
    })

    logger.successWarp(target.link)

    downloadAllImage(data, saveImagePath)

    logger.jobSuccess()
  } catch (error) {
    console.error(error.message)
  } finally {
    await browser.close()
  }
}

function checkFolderExist(absoluteRootFolderPath: string) {
  const isRootFolderExist = fs.existsSync(absoluteRootFolderPath)

  if (!isRootFolderExist) {
    throw new RootFolderNotExistError(absoluteRootFolderPath)
  }
}

function createImageFolder(rootFolderPath: string, folderName: string) {
  const logger = new Logger()

  const saveImagePath = path.join(rootFolderPath, folderName)
  const isSaveImagePathExist = fs.existsSync(saveImagePath)

  if (!isSaveImagePathExist) {
    fs.mkdirSync(saveImagePath)
    logger.successfullyCreateDownloadFolder(folderName)
  } else {
    logger.skipCreateDownloadFolder(folderName)
  }

  return saveImagePath
}

async function getTargetElement(target: PageTarget) {
  return target.page.$$eval(target.selector, imgs =>
    imgs.map(img => img.getAttribute('src'))
  )
}

function downloadAllImage(data: string[], saveImagePath: string) {
  const logger = new Logger()

  data.forEach(async imgSrc => {
    const imgName = imgSrc.split('/').pop()

    const file = fs.createWriteStream(path.join(saveImagePath, imgName))

    https.get(imgSrc, res => res.pipe(file))

    logger.downloadSuccessfully(imgName)
  })
}
