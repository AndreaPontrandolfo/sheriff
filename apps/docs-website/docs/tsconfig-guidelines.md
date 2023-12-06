---
sidebar_position: 13
---

# ✍ TSConfig guidelines

Typescript configuration is a very wide and complex topic. Depending on the environments that you are going to target, setting up correctly a proper `TSConfig` can be daunting and time consuming.<br />
In this section I'll try to illustrate a rundown of the choices that you should make when tweaking a `TSConfig` in a modern Typescript project that use Sheriff.

If you don't know much about `TSConfig` and you are uncertain, this can be a good starting point. But in the end you must be sure that the chosen settings fit your project.

## Resources

- in [this project](https://github.com/tsconfig/bases/tree/main) you can find a lot of `TSConfig` examples for different scenarios
- If you are having hard-to-debug issues, consider using [these debugging tools](https://www.typescriptlang.org/tsconfig#Compiler_Diagnostics_6251)
- for any doubt, make sure to check out the official [TSConfigs documentation](https://www.typescriptlang.org/tsconfig)

## Sheriff's TSConfig reference

```JSONC title="tsconfig.json"
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "include": ["src"],
  "exclude": ["node_modules", "dist", "build", "coverage"], // this is already a good default. Generally you want to put here build artifacts. Some other possible build artifacts are: "artifacts", "lib"...
  "compilerOptions": {
    "target": "es6",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",
    "composite": false, // you should enable this only for using TS project references. But they are fairly discourages nowadays.
    "incremental": true,
    "tsBuildInfoFile": "node_modules/.cache/tsbuildinfo.json",
    // highlight-next-line
    "strict": true, // this is required for Sheriff to perform correctly.
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": false, // this looks nice on paper, but is actually extremely annoying in practice.
    "noUnusedLocals": false, // this is already covered by Sheriff.
    "noUnusedParameters": false, // this is already covered by Sheriff.
    // highlight-next-line
    "isolatedModules": true, // this is required for Sheriff to perform correctly.
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    // highlight-next-line
    "verbatimModuleSyntax": true, // this is required for Sheriff to perform correctly.
    "noEmit": true, // you should pretty much never need this, most projects are transpiled and bundled with specific tools like Rollup nowadays.
    "skipLibCheck": true,
    "allowJs": false,
    "checkJs": false,
    "experimentalDecorators": false,
    "paths": {}, // define here your paths if you want to use absolute paths in your project, which is highly recommended.
  },
}
```
