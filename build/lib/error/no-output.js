"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NoOutputError extends Error {
    constructor() {
        const message = `No output path specified.`;
        super(message);
        this.name = `NoOutputError`;
    }
}
exports.NoOutputError = NoOutputError;
//# sourceMappingURL=no-output.js.map