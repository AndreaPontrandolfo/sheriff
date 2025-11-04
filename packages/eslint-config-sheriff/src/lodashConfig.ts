import lodashPlugin from "eslint-plugin-lodash-f";
import { supportedFileTypes } from "@sherifforg/constants";
import { lodashHandPickedRules } from "./handpickedRules/lodashHandPickedRules";

export const lodashConfig = {
  files: [supportedFileTypes],
  plugins: {
    "lodash-f": lodashPlugin,
  },
  rules: {
    ...lodashPlugin.configs.recommended.rules,
    ...lodashHandPickedRules,
  },
};
