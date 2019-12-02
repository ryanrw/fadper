"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const no_output_1 = require("./error/no-output");
function userInput() {
    try {
        const userInput = process.argv;
        commander_1.default
            .version(`1.0.0`)
            .name(`fadper`)
            .usage(`[-c destination] -o /your/output/path`)
            .option(`-c, --config-file <image-list.yaml>`, `Destination of image-list.yaml file`)
            .option(`-o, --output <folder>`, `Output folder`);
        commander_1.default.parse(userInput);
        if (!commander_1.default.output) {
            throw new no_output_1.NoOutputError();
        }
        return {
            configFile: commander_1.default.configFile,
            output: commander_1.default.output,
        };
    }
    catch (error) {
        console.error(error.message);
    }
}
exports.userInput = userInput;
//# sourceMappingURL=user-input.js.map