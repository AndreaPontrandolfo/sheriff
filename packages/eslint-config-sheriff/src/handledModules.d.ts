declare module '@eslint/js' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module '@next/eslint-plugin-next' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
      'core-web-vitals': {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module '@regru/eslint-plugin-prefer-early-return' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin;

  export default defaultExport;
}

declare module 'eslint-plugin-unicorn' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-playwright' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      'playwright-test': {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-jsdoc' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-lodash-f' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-import' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin;

  export default defaultExport;
}

declare module 'eslint-plugin-fp' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin;

  export default defaultExport;
}

declare module 'eslint-plugin-jest' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    environments: {
      globals: {
        globals: Record<string, boolean>;
      };
    };
    configs: {
      style: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-storybook' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.Linter.Plugin & {
    configs: {
      recommended: TSESLint.ClassicConfig.Config & {
        overrides: [TSESLint.ClassicConfig.ConfigOverride];
      };
      csf: TSESLint.ClassicConfig.Config & {
        overrides: [TSESLint.ClassicConfig.ConfigOverride];
      };
      'csf-strict': TSESLint.ClassicConfig.Config & {
        overrides: [TSESLint.ClassicConfig.ConfigOverride];
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-react' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin;

  export default defaultExport;
}

declare module 'eslint-plugin-react/configs/recommended.js' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Rules;

  export default defaultExport;
}

declare module 'eslint-plugin-react/configs/jsx-runtime.js' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Rules;

  export default defaultExport;
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-react-hooks' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin & {
    configs: {
      recommended: {
        rules: TSESLint.FlatConfig.Rules;
      };
    };
  };

  export default defaultExport;
}

declare module 'eslint-plugin-react-refresh' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin;

  export default defaultExport;
}

declare module 'eslint-plugin-fsecond' {
  import type { TSESLint } from '@typescript-eslint/utils';

  declare const defaultExport: TSESLint.FlatConfig.Plugin;

  export default defaultExport;
}
