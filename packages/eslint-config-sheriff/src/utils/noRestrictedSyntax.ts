import createNoRestrictedSyntax from "eslint-no-restricted/syntax";

const baseNoRestrictedSyntaxRules = [
  {
    selector: "LabeledStatement",
    name: "noLabels",
    message:
      "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
  },
  {
    selector: "ForInStatement",
    name: "noForInLoops",
    message:
      "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
  },
  {
    selector: "Identifier[name='Reflect']",
    name: "noReflect",
    message:
      "Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.",
  },
  {
    selector: "Identifier[name='Proxy']",
    name: "noProxy",
    message: "Avoid Proxy.",
  },
  // this needs to be temporarily disabled because of a Typescript limitation with discriminated unions. See: https://github.com/microsoft/TypeScript/issues/44253.
  // {
  //   selector: "BinaryExpression[operator='in']",
  //   name: 'noInOperator',
  //   message:
  //     "Avoid the 'in' operator. In real-world scenarios there is rarely a need for this operator. For most usecases, basic property access is all you need. For every other case, use the Object.hasOwn() or the Object.prototype.hasOwnProperty() method. In the really niche cases where you actually need to check for the existence of a property both in the object itself AND in it's prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
  // },
  {
    selector: [
      "PropertyDefinition[accessibility='public']",
      "PropertyDefinition[accessibility='protected']",
      "PropertyDefinition[accessibility='private']",
    ],
    name: "noAccessModifiers",
    message:
      "Avoid access modifiers. In Javascript modules there is no need to limit developer access to properties.",
  },
  {
    selector: ["Identifier[name='PropTypes']", "Identifier[name='propTypes']"],
    name: "noPropTypes",
    message: "Avoid PropTypes. Use Typescript instead.",
  },
  {
    selector: "UnaryExpression[operator='delete']",
    name: "noDeleteOperator",
    message: 'Avoid the "delete" operator. Use omit() instead.',
  },
  {
    selector: "TSEnumDeclaration",
    name: "noEnums",
    message: "Avoid enums.",
  },
  {
    selector: ["ClassDeclaration", "ClassExpression"],
    name: "noClasses",
    message: "Avoid classes. Use functions and objects instead.",
  },
];

export const noRestrictedSyntax = createNoRestrictedSyntax(
  ...baseNoRestrictedSyntaxRules,
);
