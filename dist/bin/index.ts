#!/usr/bin/env node

// @todo add properly error handling
import { downloader, Target } from '../lib/downloader'
import { getImageLinkList } from '../lib/yaml-getter'
import { userInput } from '../lib/user-input'

const argumentValue = userInput()

const isUserProvideConfigFile = argumentValue.configFile

const data = isUserProvideConfigFile
  ? getImageLinkList(argumentValue.configFile)
  : getImageLinkList()

data.imageList.forEach(async current => {
  const option: Target = {
    link: current.link,
    selector: data.target,
    folder: {
      root: argumentValue.output,
      name: current.name,
    },
  }

  await downloader(option)
})
