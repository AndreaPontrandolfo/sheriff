export interface NoRestrictedSyntaxSlice {
  selector: string;
  message: string;
}

export interface NoRestrictedSyntaxOverride {
  adjuncts: NoRestrictedSyntaxSlice[];
  allows: string[];
}

export interface Entry {
  ruleName: string;
  parentPluginName: string;
  severity: NumericSeverity;
  ruleOptions: RuleOptionsConfig;
  affectedFiles: string;
  docs: {
    description: string;
    url: string;
  };
}

export type NumericSeverity = 0 | 1 | 2;

export type Severity = NumericSeverity | 'error' | 'warn' | 'off';

export type RuleOptions =
  | [Severity, ...(Record<string, unknown> | string)[]]
  | Severity;

export type Plugins =
  | {
      [key: string]:
        | {
            files?: string[];
            rules: any;
            configs?: any;
          }
        | undefined;
    }
  | null
  | undefined;

export interface BarebonesConfigAtom {
  rules?: Record<string, RuleOptions> | undefined;
  plugins?: Plugins;
  files?: string[] | undefined;
}

export interface ExportableConfigAtom {
  rules?: Record<string, any>;
  plugins?: Plugins;
  files?: string[];
  languageOptions?: Record<string, unknown>;
  settings?: Record<string, unknown>;
  ignores?: string[];
}

export type RuleOptionsConfig = (Record<string, any> | string)[];

export interface SheriffSettings {
  /**
   * React support.
   */
  react?: boolean;
  /**
   * Lodash support.
   */
  lodash?: boolean;
  /**
   * Nextjs support.
   */
  next?: boolean;
  /**
   * Playwright support.
   */
  playwright?: boolean;
  /**
   * Jest support. Select this or vitest, not both.
   */
  jest?: boolean;
  /**
   * Vitest support. Select this or jest, not both.
   */
  vitest?: boolean;
  /**
   * This parameter allows you to override the paths for some Sheriff settings.
   */
  pathsOveriddes?: {
    /**
     * With this setting, if you have multiple tsconfig.json files in your project (like tsconfig.json, tsconfig.eslint.json, tsconfig.node.json, etc...) you can specify which config Sheriff will pickup. You can also specify a list of paths, see: https://typescript-eslint.io/linting/typed-linting/monorepos/#one-tsconfigjson-per-package-and-an-optional-one-in-the-root.
     */
    tsconfigLocation?: string | string[];
    /**
     * This setting overrides the default Sheriff "ignores" filepaths. It accepts an array of filepaths, dictaced by minimatch syntax. Sheriff will ignore these files.
     */
    ignores?: string[];
    /**
     * This setting overrides the default Sheriff filepaths for test files. It accepts an array of filepaths, dictaced by minimatch syntax. Sheriff will apply Jest or Vitest rules only on these files.
     */
    tests?: string[];
  };
  /**
   * This setting accepts an array of filepaths, dictaced by minimatch syntax. Only the matching files found in this array will be linted. All other files will be ignored. This is useful if you want to lint only a subset of your project.
   */
  files?: string[];
  /**
   * This setting allows you to override the default no-restricted-syntax rule configuration. You can add your own rules to the existing ones, or you can override the existing ones. You can also disable the existing ones by adding them to the allows array.
   */
  noRestrictedSyntaxOverride?: NoRestrictedSyntaxOverride;
}
