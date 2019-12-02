import program from 'commander'

import { NoOutputError } from './error/no-output'

interface UserInput {
  configFile?: string
  output: string
}

export function userInput(): UserInput {
  try {
    const userInput = process.argv

    program
      .version(`1.0.0`)
      .name(`fadper`)
      .usage(`[-c destination] -o /your/output/path`)
      .option(
        `-c, --config-file <image-list.yaml>`,
        `Destination of image-list.yaml file`
      )
      .option(`-o, --output <folder>`, `Output folder`)

    program.parse(userInput)

    if (!program.output) {
      throw new NoOutputError()
    }

    return {
      configFile: program.configFile,
      output: program.output,
    }
  } catch (error) {
    console.error(error.message)
  }
}
