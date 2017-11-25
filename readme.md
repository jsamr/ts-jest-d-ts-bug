# `ts-jest` bug with `d.ts` files

Just run

```
npm install
```
and
```
npm test
```

You should have the following output in your console (absolute path replaced for privacy concerns)

```
Failed to collect coverage from <rootDir>/src/dummy.d.ts
ERROR: Error: Debug Failure. False expression: Output generation failed
STACK: Error: Debug Failure. False expression: Output generation failed
at Object.transpileModule (<rootDir>/node_modules/typescript/lib/typescript.js:86543:18)
at Object.process (<rootDir>/node_modules/ts-jest/dist/preprocessor.js:22:32)
at ScriptTransformer.transformSource (<rootDir>/node_modules/jest-runtime/build/script_transformer.js:218:35)
at exports.default (<rootDir>/node_modules/jest/node_modules/jest-cli/build/generate_empty_coverage.js:32:5)
at module.exports (<rootDir>/node_modules/jest/node_modules/jest-cli/build/reporters/coverage_worker.js:52:94)
at handle (<rootDir>/node_modules/worker-farm/lib/child/index.js:44:8)
at process.<anonymous> (<rootDir>/node_modules/worker-farm/lib/child/index.js:51:3)
at emitTwo (events.js:126:13)
at process.emit (events.js:214:7)
at emit (internal/child_process.js:772:12)

```
