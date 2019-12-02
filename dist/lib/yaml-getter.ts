import { readFileSync } from 'fs'
import { safeLoad } from 'js-yaml'

interface ImageList {
  imageList: {
    name: string
    link: string
  }[]
  target: string
}

export function getImageLinkList(
  file: string = `${__dirname}/image-list.yaml`
) {
  const yamlFile = readFileSync(file, 'utf8')
  const data = safeLoad(yamlFile) as ImageList

  return data
}
