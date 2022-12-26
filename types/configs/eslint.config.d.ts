export = exportableConfig;
declare let exportableConfig: (string | {
    files: string[];
    languageOptions: {
        parser: typeof typescriptParser;
        parserOptions: {
            ecmaFeatures: {
                modules: boolean;
            };
            project: string;
        };
    };
    plugins?: undefined;
    rules?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        '@typescript-eslint': typeof typescript;
        fp?: undefined;
        etc?: undefined;
        unicorn?: undefined;
        sonarjs?: undefined;
        import?: undefined;
        jsdoc?: undefined;
    };
    rules: {
        '@typescript-eslint/naming-convention': (number | {
            selector: string;
            format: string[];
            leadingUnderscore: string;
            trailingUnderscore: string;
            modifiers?: undefined;
            types?: undefined;
            prefix?: undefined;
        } | {
            selector: string;
            format: string[];
            modifiers: string[];
            types: string[];
            leadingUnderscore: string;
            trailingUnderscore: string;
            prefix?: undefined;
        } | {
            selector: string;
            types: string[];
            format: string[];
            prefix: string[];
            leadingUnderscore: string;
            trailingUnderscore: string;
            modifiers?: undefined;
        } | {
            selector: string;
            modifiers: string[];
            format: any;
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            types?: undefined;
            prefix?: undefined;
        })[];
        '@typescript-eslint/return-await': number;
        '@typescript-eslint/no-redundant-type-constituents': number;
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': number;
        '@typescript-eslint/prefer-ts-expect-error': number;
        '@typescript-eslint/no-throw-literal': number;
        '@typescript-eslint/no-use-before-define': number;
        '@typescript-eslint/consistent-type-assertions': number;
        '@typescript-eslint/consistent-type-imports': (number | {
            fixStyle: string;
        })[];
        '@typescript-eslint/consistent-type-exports': (number | {
            fixMixedExportsWithInlineTypeSpecifier: boolean;
        })[];
        '@typescript-eslint/explicit-module-boundary-types': number;
        '@typescript-eslint/switch-exhaustiveness-check': number;
        '@typescript-eslint/no-invalid-void-type': number;
        '@typescript-eslint/method-signature-style': number;
        '@typescript-eslint/no-confusing-void-expression': number;
        '@typescript-eslint/prefer-nullish-coalescing': (number | {
            ignoreTernaryTests: boolean;
        })[];
        '@typescript-eslint/no-unnecessary-condition': number;
        '@typescript-eslint/unified-signatures': number;
        '@typescript-eslint/no-unused-expressions': (number | {
            allowShortCircuit: boolean;
            allowTernary: boolean;
            allowTaggedTemplates: boolean;
            enforceForJSX: boolean;
        })[];
        '@typescript-eslint/no-array-constructor': number;
        '@typescript-eslint/array-type': number;
        '@typescript-eslint/no-empty-function': number;
        '@typescript-eslint/prefer-optional-chain': number;
        '@typescript-eslint/dot-notation': number;
        '@typescript-eslint/no-unsafe-assignment': number;
        '@typescript-eslint/no-shadow': (number | {
            hoist: string;
            allow: string[];
            ignoreTypeValueShadow: boolean;
            ignoreFunctionTypeParameterNameValueShadow: boolean;
        })[];
        'import/no-default-export'?: undefined;
    };
    languageOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    rules: {
        'func-style': number;
        'no-promise-executor-return': number;
        'no-unreachable-loop': number;
        'no-caller': number;
        'no-restricted-imports': (number | {
            paths: string[];
        })[];
        'no-extend-native': number;
        'no-extra-bind': number;
        'no-extra-label': number;
        'no-implicit-coercion': number;
        'no-multi-str': number;
        'no-negated-condition': number;
        'no-new-wrappers': number;
        'no-new-object': number;
        'no-restricted-properties': (number | {
            object: string;
            property: string;
            message: string;
        })[];
        strict: (string | number)[];
        'no-octal-escape': number;
        'no-proto': number;
        'no-sequences': (number | {
            allowInParentheses: boolean;
        })[];
        'no-unmodified-loop-condition': number;
        'no-void': number;
        'max-statements-per-line': (number | {
            max: number;
        })[];
        'no-array-constructor': number;
        'no-multi-assign': number;
        'no-plusplus': number;
        'prefer-destructuring': (number | {
            array: boolean;
            object: boolean;
            enforceForRenamedProperties?: undefined;
        } | {
            enforceForRenamedProperties: boolean;
            array?: undefined;
            object?: undefined;
        })[];
        'no-useless-call': number;
        'prefer-object-has-own': number;
        'no-constant-binary-expression': number;
        'no-lone-blocks': number;
        'no-var': number;
        'no-eval': number;
        'prefer-const': number;
        'prefer-rest-params': number;
        'no-return-assign': (string | number)[];
        'no-else-return': (number | {
            allowElseIf: boolean;
        })[];
        'prefer-template': number;
        'operator-assignment': (string | number)[];
        'logical-assignment-operators': (string | number)[];
        'padding-line-between-statements': (number | {
            blankLine: string;
            prev: string[];
            next: string;
        } | {
            blankLine: string;
            prev: string[];
            next: string[];
        } | {
            blankLine: string;
            prev: string;
            next: string;
        })[];
        'prefer-spread': number;
        'prefer-object-spread': number;
        'no-param-reassign': number;
        'no-redeclare': number;
        'array-callback-return': (number | {
            allowImplicit: boolean;
            checkForEach: boolean;
        })[];
        'object-shorthand': number;
        'no-unneeded-ternary': (number | {
            defaultAssignment: boolean;
        })[];
        'require-atomic-updates': number;
        'no-nested-ternary': number;
        'no-console': (number | {
            allow: string[];
        })[];
        eqeqeq: number;
        'prefer-arrow-callback': number;
        'arrow-body-style': (string | number)[];
        'no-restricted-syntax': (number | {
            selector: string;
            message: string;
        })[];
        'no-undef': number;
        'no-dupe-class-members': number;
        'no-return-await': number;
        'no-throw-literal': number;
        'no-use-before-define': number;
        'no-unused-expressions': number;
        'no-empty-function': number;
        'require-await': number;
        'no-unused-vars': number;
        'dot-notation': number;
        'no-shadow': number;
    };
    languageOptions?: undefined;
    plugins?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        fp: any;
        '@typescript-eslint'?: undefined;
        etc?: undefined;
        unicorn?: undefined;
        sonarjs?: undefined;
        import?: undefined;
        jsdoc?: undefined;
    };
    rules: {
        'fp/no-arguments': number;
        'fp/no-class': number;
        'fp/no-delete': number;
        'fp/no-proxy': number;
    };
    languageOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        etc: any;
        '@typescript-eslint'?: undefined;
        fp?: undefined;
        unicorn?: undefined;
        sonarjs?: undefined;
        import?: undefined;
        jsdoc?: undefined;
    };
    rules: {
        'etc/no-enum': number;
        'etc/no-misused-generics': number;
        'etc/no-assign-mutated-array': number;
    };
    languageOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        unicorn: any;
        '@typescript-eslint'?: undefined;
        fp?: undefined;
        etc?: undefined;
        sonarjs?: undefined;
        import?: undefined;
        jsdoc?: undefined;
    };
    rules: {
        'unicorn/better-regex': number;
        'unicorn/explicit-length-check': number;
        'unicorn/consistent-function-scoping': number;
        'unicorn/prefer-default-parameters': number;
        'unicorn/no-array-push-push': number;
        'unicorn/prefer-array-index-of': number;
        'unicorn/prefer-array-flat-map': number;
        'unicorn/prefer-array-some': number;
        'unicorn/prefer-array-find': number;
        'unicorn/prefer-array-flat': number;
        'unicorn/prefer-includes': number;
        'unicorn/prefer-top-level-await': number;
        'unicorn/prefer-spread': number;
        'unicorn/no-useless-spread': number;
        'unicorn/no-useless-undefined': number;
        'unicorn/no-for-loop': number;
        'unicorn/prefer-set-size': number;
        'unicorn/prefer-type-error': number;
        'unicorn/prefer-object-from-entries': number;
        'unicorn/no-instanceof-array': number;
        'unicorn/prefer-native-coercion-functions': number;
        'unicorn/prefer-logical-operator-over-ternary': number;
        'unicorn/prefer-event-target': number;
        'unicorn/no-await-expression-member': number;
        'unicorn/no-new-array': number;
        'unicorn/throw-new-error': number;
        'unicorn/no-array-reduce': number;
        'unicorn/no-useless-length-check': number;
        'unicorn/prefer-prototype-methods': number;
        'unicorn/prefer-date-now': number;
        'unicorn/prefer-export-from': (number | {
            ignoreUsedVariables: boolean;
        })[];
        'unicorn/no-new-buffer': number;
        'unicorn/no-unsafe-regex': number;
        'unicorn/prefer-query-selector': number;
        'unicorn/prefer-string-replace-all': number;
        'unicorn/prefer-switch': (number | {
            emptyDefaultCase: string;
        })[];
        'unicorn/switch-case-braces': number;
    };
    languageOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        sonarjs: typeof sonarjs;
        '@typescript-eslint'?: undefined;
        fp?: undefined;
        etc?: undefined;
        unicorn?: undefined;
        import?: undefined;
        jsdoc?: undefined;
    };
    rules: {
        'sonarjs/cognitive-complexity': number;
        'sonarjs/prefer-immediate-return': number;
        'import/no-default-export'?: undefined;
    };
    languageOptions?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        import: any;
        '@typescript-eslint'?: undefined;
        fp?: undefined;
        etc?: undefined;
        unicorn?: undefined;
        sonarjs?: undefined;
        jsdoc?: undefined;
    };
    rules: {
        'import/named': number;
        'import/namespace': number;
        'import/default': number;
        'import/no-named-as-default-member': number;
        'import/no-unresolved': (number | {
            commonjs: boolean;
        })[];
        'import/first': number;
        'import/order': (number | {
            'newlines-between': string;
        })[];
        'import/no-default-export': number;
        'import/no-named-as-default': number;
        'import/no-namespace': number;
        'import/no-duplicates': number;
        'import/newline-after-import': number;
        'import/no-useless-path-segments': (number | {
            noUselessIndex: boolean;
        })[];
    };
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': string[];
        };
        'import/resolver': {
            typescript: {
                alwaysTryTypes: boolean;
            };
            node: boolean;
        };
        jsdoc?: undefined;
    };
    languageOptions?: undefined;
} | {
    files: string[];
    rules: {
        'import/no-default-export': number;
    };
    languageOptions?: undefined;
    plugins?: undefined;
    settings?: undefined;
} | {
    files: string[];
    plugins: {
        jsdoc: any;
        '@typescript-eslint'?: undefined;
        fp?: undefined;
        etc?: undefined;
        unicorn?: undefined;
        sonarjs?: undefined;
        import?: undefined;
    };
    rules: {
        'jsdoc/require-description': number;
        'jsdoc/require-description-complete-sentence': number;
        'jsdoc/no-multi-asterisks': number;
        'jsdoc/no-defaults': number;
        'jsdoc/check-param-names': (number | {
            checkDestructured: boolean;
            enableFixer: boolean;
        })[];
        'jsdoc/newline-after-description': number;
        'jsdoc/require-returns-description': number;
        'jsdoc/check-tag-names': (number | {
            jsxTags: boolean;
        })[];
        'jsdoc/no-types': number;
        'jsdoc/require-param-name': number;
        'jsdoc/require-param-description': number;
    };
    settings: {
        jsdoc: {
            mode: string;
        };
        'import/parsers'?: undefined;
        'import/resolver'?: undefined;
    };
    languageOptions?: undefined;
})[];
import typescriptParser = require("@typescript-eslint/parser");
import typescript = require("@typescript-eslint/eslint-plugin");
import sonarjs = require("eslint-plugin-sonarjs");
//# sourceMappingURL=eslint.config.d.ts.map