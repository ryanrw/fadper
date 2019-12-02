"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    goto(link) {
        console.info(`🚀 Prepare the rocket to ${link}..`);
    }
    successWarp(link) {
        console.info(`🌟 Successfully warp to ${link}..`);
    }
    successfullyCreateDownloadFolder(name) {
        console.info(`🚪 Successfully create download folder name ${name}..`);
    }
    skipCreateDownloadFolder(name) {
        console.info(`🙅🏻‍♀️ Path name ${name} is existed. Skipping...`);
    }
    downloadSuccessfully(imageName) {
        console.info(`🎉 Download ${imageName} successfully!`);
    }
    jobSuccess() {
        console.info(`🎊 Job completed!!!! 🎊`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map