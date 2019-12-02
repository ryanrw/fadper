#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
// @todo add properly error handling
const downloader_1 = require("../lib/downloader");
const yaml_getter_1 = require("../lib/yaml-getter");
const user_input_1 = require("../lib/user-input");
const argumentValue = user_input_1.userInput();
const isUserProvideConfigFile = argumentValue.configFile;
const data = isUserProvideConfigFile
    ? yaml_getter_1.getImageLinkList(argumentValue.configFile)
    : yaml_getter_1.getImageLinkList();
data.imageList.forEach((current) => __awaiter(void 0, void 0, void 0, function* () {
    const option = {
        link: current.link,
        selector: data.target,
        folder: {
            root: argumentValue.output,
            name: current.name,
        },
    };
    yield downloader_1.downloader(option);
}));
//# sourceMappingURL=index.js.map