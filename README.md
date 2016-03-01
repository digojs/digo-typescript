# digo-typescript
[digo](https://github.com/digojs/digo) 插件：使用 [TypeScript](https://github.com/Microsoft/TypeScript) 编译 TypeScript。

## 安装
```bash
npm install digo-typescript -g
```

## 用法
### 编译 TypeScript 并重命名为 JS
```js
digo.src("*.ts", "*.tsx").pipe("digo-typescript");
```

### 源映射(Source Map)
本插件支持生成源映射，详见 [源映射](https://github.com/digojs/digo/wiki/源映射)。

## 选项
```js
digo.src("*.ts").pipe("digo-typescript", {
	allowNonTsExtensions: true,	    // 允许非 .ts 扩展名。[1]
    charset: "utf8",				// 设置源文件编码[1]
    declaration: false,				// 生成 '.d.ts' 定义文件。
    declarationDir: "",			    // 生成定义文件的文件夹。
    diagnostics: false,			    // 显示错误信息。
    emitBOM: false,			        // 在输出文件追加 UTF-8 字节标记(BOM)。
    help: false,			        // 打印帮助信息。
    init: false,			        // 初始化创建 tsconfig.json
    inlineSourceMap: false,			// 内联源映射到输出文件。
    inlineSources: false,			// 内联源码到源映射。
    jsx: 2,			                // JSX 语法(如 <div />) 的处理方式。0：不支持。1：保留。2：转为 React.createElement。[1]
    reactNamespace: "React",		// 指定处理 jsx 语法时，生成的 createElement 和 __spread 调用方。
    listFiles: false,			    // 列出正在编译的文件列表。
    typesSearchPaths: [],			// 类型搜索路径。
    locale: "en-us",			    // 本地语言包。
    mapRoot: "",			        // 源映射跟路径。
    module: 0,			            // 模块类型：0：无；1：CommonJS；2：AMD；3：UMD；4： UMD；5：System；6：ES6(ES2015)。
    newLine: 0,			            // 换行符。0：Windows 风格：'\r\n'；1：Unix 风格：'\n'。
    noEmit: false,			        // 不输出。
    noEmitHelpers: false,			// 不输出辅助函数，如 __extends。
    noEmitOnError: false,			// 如果存在错误则不输出。
    noErrorTruncation: false,		// 如果存在错误则不输出。
    noImplicitAny: false,			// 不允许隐式 any 类型。
    noImplicitThis: false,			// 不允许隐式 this 类型。
    noLib: false,			        // 不包含库文件(lib.d.ts)。
    noResolve: false,			    // 不包含 // / <reference /> 代码。
    outFile: "",			        // 重定向输出文件名。
    outDir: "",			            // 重定向输出文件夹。
    preserveConstEnums: false,		// 保留枚举常量值。具体见 [枚举](https:// github.com/Microsoft/TypeScript/blob/master/doc/spec.md#94-constant-enum-declarations)
    pretty: 0,			            // 格式化错误信息。0：不格式。1：以控制台方式格式化。
    project: "",			        // 指定编译所在项目文件(tsconfig.json)。具体见 [tsconfig.json](http:// www.typescriptlang.org/docs/handbook/tsconfig.json.html)
    removeComments: false,			// 输出时删除注释。
    rootDir: string,			    // 输入文件的跟目录。用于计算文件在 outDir 中的相对路径。
    sourceMap: false,			    // 是否生成源映射。
    sourceRoot: string,			    // 源映射中的跟路径。
    suppressExcessPropertyErrors: false,	// 忽略 JSON 对象属性访问错误。
    suppressImplicitAnyIndexErrors: false,	// 忽略 JSON 对象索引访问错误。另参考: [issue #1232](https:// github.com/Microsoft/TypeScript/issues/1232#issuecomment-64510362)
    target: 1,			            // 生成目标语法。0：ES3；1：ES5；2：ES6(ES2015)
    version: false,			        // 打印编译器版本。
    watch: false,			        // 启用监听模式。
    isolatedModules: false,			// 强制导入未解析的模块。
    experimentalDecorators: false,
    emitDecoratorMetadata: false,
    moduleResolution: 1,			// 模块解析方式。0：经典；1：NodeJs。具体见 [模块解析方式](http:// www.typescriptlang.org/docs/handbook/module%20resolution.html)
    allowUnusedLabels: false,		// 允许未使用的标签。
    allowUnreachableCode: false,	// 允许永远无法执行的代码。如 if(false) { ... } 中的代码。
    noImplicitReturns: false,       // 不使用隐式返回 undefined。
    noFallthroughCasesInSwitch: false,  // 不允许跨 case 语句(强制使用 break)。
    forceConsistentCasingInFileNames: false, // 区分文件名大小写。
    baseUrl: "",
    paths: {},
    rootDirs: [],                   // 跟文件夹路径。
    traceResolution: false,			// 调试模块依赖关系。
    allowSyntheticDefaultImports: false,  // 允许对未使用默认导出的模块使用默认导入。此选项不影响输出，只对类型检查有效。当模块类型为 System 时，默认为 true。
    allowJs: true,			        //  允许编译 JS。
    noImplicitUseStrict: true,		// 禁止插入 "use strict"。[1]
    strictNullChecks: false,		// 是否启用严格 NULL 检查模式。 开启后，null 和 undefined 只能赋予自身和 any 类型变量。
    listEmittedFiles: false,        // 列出已输出的文件列表。
    lib: [],                        // 指定库文件。
    stripInternal: false,			// 删除包含 JSDoc 注释 /** @internal */的成员定义。
    skipDefaultLibCheck: false,		// 不检查库文件以提速。
    suppressOutputPathCheck: false, // 不检查输出文件路径。
    configFilePath: "",             // 配置文件路径。
    typesRoot: "",
    types: [],
    list: []
});
```

> [1]: 插件内部已重设了此配置的默认值。

另参考: [http://www.typescriptlang.org/docs/handbook/compiler-options.html](http://www.typescriptlang.org/docs/handbook/compiler-options.html)