"use strict";
/**
 * Created by user on 2018/4/10/010.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function pipe(srcStream, destStream, options) {
    let _dest = destStream;
    _dest.pipFrom = srcStream;
    return srcStream.pipe(_dest);
}
exports.pipe = pipe;
const self = require("./index");
exports.default = self;
