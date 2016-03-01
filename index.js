var path = require("path");
var ts = require("typescript");

module.exports = function TS(file, options) {

    // 忽略 .d.ts 文件。
    if (/\.d\.ts$/i.test(file.srcPath)) {
        file.content = "";
        return;
    }

    // 设置默认值。
    if (typeof options === "string") {
        options = require(path.resolve(options)).compilerOptions;
    }

    options = {
        compilerOptions: Object.assign({
            sourceMap: file.sourceMap,
            charset: file.encoding,
            experimentalDecorators: true,
            newLine: "LF",
            jsx: /x$/i.test(file.srcPath) ? 2/*React*/ : 1/*Preserve*/
        }, options),
        fileName: file.srcPath,
        reportDiagnostics: true
    };
    delete options.compilerOptions.outDir;

    // 更改扩展名。
    file.ext = ".js";

    // 生成。
    var result = ts.transpileModule(file.content, options);
    if (result.sourceMapText) {
        // TS 未提供 API 以删除 # sourceMappingURL，手动删除之。
        result.outputText = result.outputText.replace(/\/\/# sourceMappingURL=.*\s*$/, "");
    }

    // 报告错误。
    for (var i = 0; i < result.diagnostics.length; i++) {
        var diagnostic = result.diagnostics[i];
        var startLoc = diagnostic.file && diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        var endLoc = diagnostic.file && diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start + diagnostic.length);
        file.error({
            plugin: TS.name,
            message: diagnostic.messageText,
            fileName: diagnostic.file ? diagnostic.file.fileName : options.fileName,
            line: startLoc && startLoc.line,
            column: startLoc && startLoc.character,
            endLine: endLoc && endLoc.line,
            endColumn: endLoc && endLoc.character
        });
    }

    // 保存。
    file.content = result.outputText;
    if (result.sourceMapText) {
        var map = JSON.parse(result.sourceMapText);
        for (var i = 0; i < map.sources.length; i++) {
            map.sources[i] = file.resolve(map.sources[i]);
        }
        file.applySourceMap(map);
    }
};
