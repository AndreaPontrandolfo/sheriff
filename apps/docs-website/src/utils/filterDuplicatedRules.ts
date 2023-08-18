import type { Entry } from "@sheriff/types";
import { isEqual } from "lodash-es";
import { removeElementFromArray } from "./removeElementFromArrayByValue";

const isSameItem = (firstOccurrence: Entry, secondOccurrence: Entry) => {
  return (
    isEqual(firstOccurrence.ruleOptions, secondOccurrence.ruleOptions) &&
    isEqual(firstOccurrence.affectedFiles, secondOccurrence.affectedFiles)
  );
};

export const filterDuplicateRules = (rules: Entry[]): Entry[] => {
  const alreadyFoundOccurrences: Entry[] = [];

  for (const currentRule of rules) {
    const ruleWithSameName = alreadyFoundOccurrences.find(
      (occurrence) => occurrence.ruleName === currentRule.ruleName,
    );

    if (ruleWithSameName && isSameItem(ruleWithSameName, currentRule)) {
      removeElementFromArray(alreadyFoundOccurrences, ruleWithSameName);
    }

    alreadyFoundOccurrences.push(currentRule);
  }

  return alreadyFoundOccurrences;
};
