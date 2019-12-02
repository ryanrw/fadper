"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const path_1 = __importDefault(require("path"));
const root_folder_not_exist_1 = require("./error/root-folder-not-exist");
const logger_1 = require("./logger");
function downloader(target) {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new logger_1.Logger();
        const browser = yield puppeteer_1.default.launch();
        try {
            const page = yield browser.newPage();
            yield page.goto(target.link);
            const rootFolderPath = target.folder.root;
            checkFolderExist(rootFolderPath);
            const saveImagePath = createImageFolder(rootFolderPath, target.folder.name);
            const data = yield getTargetElement({
                page,
                selector: target.selector,
            });
            logger.successWarp(target.link);
            downloadAllImage(data, saveImagePath);
            logger.jobSuccess();
        }
        catch (error) {
            console.error(error.message);
        }
        finally {
            yield browser.close();
        }
    });
}
exports.downloader = downloader;
function checkFolderExist(absoluteRootFolderPath) {
    const isRootFolderExist = fs_1.default.existsSync(absoluteRootFolderPath);
    if (!isRootFolderExist) {
        throw new root_folder_not_exist_1.RootFolderNotExistError(absoluteRootFolderPath);
    }
}
function createImageFolder(rootFolderPath, folderName) {
    const logger = new logger_1.Logger();
    const saveImagePath = path_1.default.join(rootFolderPath, folderName);
    const isSaveImagePathExist = fs_1.default.existsSync(saveImagePath);
    if (!isSaveImagePathExist) {
        fs_1.default.mkdirSync(saveImagePath);
        logger.successfullyCreateDownloadFolder(folderName);
    }
    else {
        logger.skipCreateDownloadFolder(folderName);
    }
    return saveImagePath;
}
function getTargetElement(target) {
    return __awaiter(this, void 0, void 0, function* () {
        return target.page.$$eval(target.selector, imgs => imgs.map(img => img.getAttribute('src')));
    });
}
function downloadAllImage(data, saveImagePath) {
    const logger = new logger_1.Logger();
    data.forEach((imgSrc) => __awaiter(this, void 0, void 0, function* () {
        const imgName = imgSrc.split('/').pop();
        const file = fs_1.default.createWriteStream(path_1.default.join(saveImagePath, imgName));
        https_1.default.get(imgSrc, res => res.pipe(file));
        logger.downloadSuccessfully(imgName);
    }));
}
//# sourceMappingURL=downloader.js.map