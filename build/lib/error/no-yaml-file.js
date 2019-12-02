"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NoYAMLFileError extends Error {
    constructor() {
        const message = `Your input folder doesn't contain any image list config`;
        super(message);
        this.name = `NoYAMLFileError`;
    }
}
exports.NoYAMLFileError = NoYAMLFileError;
//# sourceMappingURL=no-yaml-file.js.map