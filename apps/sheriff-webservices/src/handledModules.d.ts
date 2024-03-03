/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module "@eslint/js" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "@next/eslint-plugin-next" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "@regru/eslint-plugin-prefer-early-return" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-unicorn" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-playwright" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-jsdoc" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-lodash-f" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-import" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-fp" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-jest" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-storybook" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-react*" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-jsx-a11y" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-react-hooks" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-react-refresh" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-plugin-fsecond" {
  const config: {
    rules: Record<string, import("@sherifforg/types").RuleOptions>;
  };

  export default config;
}
declare module "eslint-config-sheriff" {
  const config: (
    userConfigChoices: import("@sherifforg/types").SheriffSettings,
    areAllRulesForced?: boolean,
  ) => import("@sherifforg/types").ExportableConfigAtom[];

  export default config;
}
