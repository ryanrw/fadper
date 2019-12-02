"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const js_yaml_1 = require("js-yaml");
function getImageLinkList(file = `${__dirname}/image-list.yaml`) {
    const yamlFile = fs_1.readFileSync(file, 'utf8');
    const data = js_yaml_1.safeLoad(yamlFile);
    return data;
}
exports.getImageLinkList = getImageLinkList;
//# sourceMappingURL=yaml-getter.js.map