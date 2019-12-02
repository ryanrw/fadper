"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootFolderNotExistError extends Error {
    constructor(path) {
        const message = `Root folder ${path} is not exist. \n
    Please try to check your following input: \n
    \t${path}
    `;
        super(message);
        this.name = `RootFolderNotExistError`;
    }
}
exports.RootFolderNotExistError = RootFolderNotExistError;
//# sourceMappingURL=root-folder-not-exist.js.map