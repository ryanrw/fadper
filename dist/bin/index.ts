#!/usr/bin/env node

import { downloader, Target } from '../lib/downloader'
import { getImageLinkList } from '../lib/yaml-getter'
import { userInput } from '../lib/user-input'

const { configFile, output } = userInput()

const data = getImageLinkList(configFile)

data.imageList.forEach(async current => {
  const option: Target = {
    link: current.link,
    selector: data.target,
    folder: {
      root: output,
      name: current.name,
    },
  }

  await downloader(option)
})
