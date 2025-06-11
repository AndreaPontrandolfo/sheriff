export const removeElementFromArrayByValue = <T>(
  array: T[],
  value: T,
): void => {
  const index = array.indexOf(value);

  if (index !== -1) {
    array.splice(index, 1);
  }
};
