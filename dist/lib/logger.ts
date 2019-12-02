export class Logger {
  goto(link: string) {
    console.info(`🚀 Prepare the rocket to ${link}..`)
  }

  successWarp(link: string) {
    console.info(`🌟 Successfully warp to ${link}..`)
  }

  successfullyCreateDownloadFolder(name: string) {
    console.info(`🚪 Successfully create download folder name ${name}..`)
  }

  skipCreateDownloadFolder(name: string) {
    console.info(`🙅🏻‍♀️ Path name ${name} is existed. Skipping...`)
  }

  downloadSuccessfully(imageName: string) {
    console.info(`🎉 Download ${imageName} successfully!`)
  }

  jobSuccess() {
    console.info(`🎊 Job completed!!!! 🎊`)
  }
}
