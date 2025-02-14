---
sidebar_position: 2
---

# `tsconfig.json` guidelines

TypeScript configuration is a vastly complex topic. Depending on the environments that you are going to target, setting up correctly a proper `tsconfig` can be daunting and time-consuming.<br />
This section will illustrate the choices that you should make when tweaking a `tsconfig` in a modern TypeScript project that uses Sheriff. If you don’t know much about `tsconfig`s and are uncertain what do choose,
this can be a good starting point. In the end, however, you must be sure the chosen settings fit your project.

## Resources

- In the [tsconfig project](https://github.com/tsconfig/bases/tree/main), you can find a lot of examples for different scenarios
- If you are having hard-to-debug issues, consider using [these debugging tools](https://www.typescriptlang.org/tsconfig#Compiler_Diagnostics_6251)
- When in any doubt, make sure to check out the official [tsconfig documentation](https://www.typescriptlang.org/tsconfig)
- Matt Peacock has also published an [interesting deep-dive](https://www.totaltypescript.com/tsconfig-cheat-sheet)

## Sheriff’s reference `tsconfig`

```JSONC title="tsconfig.json"
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "include": ["src"],
  "exclude": ["node_modules", "dist", "build", "coverage"], // This is already a good default. Generally, you want to put build artifacts here. Some other possible build artifacts include: "artifacts", "lib"...
  "compilerOptions": {
    "target": "es6",
    "module": "preserve", // This assumes that you are gonna build your project with a modern bundler instead of `tsc`.
    "moduleResolution": "bundler", // This assumes that you are gonna build your project with a modern bundler instead of `tsc`.
    "noEmit": true, // This assumes that you are gonna build your project with a modern bundler instead of `tsc`.
    "allowImportingTsExtensions": true, // This assumes that you are gonna build your project with a modern bundler instead of `tsc`.
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",
    "composite": false, // TS project references are fairly discouraged nowadays.
    "incremental": true,
    "tsBuildInfoFile": "node_modules/.cache/tsbuildinfo.json",
    // highlight-next-line
    "strict": true, // This is required for Sheriff to perform correctly.
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": false, // This looks nice on paper, but is actually extremely annoying in practice due to lack of ecosystem buy-in.
    "noUnusedLocals": false, // This is already covered by Sheriff.
    "noUnusedParameters": false, // This is already covered by Sheriff.
    // highlight-next-line
    "isolatedModules": true, // This is required for Sheriff to perform correctly.
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "noUncheckedSideEffectImports": true,
    // highlight-next-line
    "verbatimModuleSyntax": true, // This is required for Sheriff to perform correctly.
    "skipLibCheck": true,
    "allowJs": false,
    "checkJs": false, // Sheriff doesn’t support vanilla JS.
    "experimentalDecorators": false,
  },
}
```
