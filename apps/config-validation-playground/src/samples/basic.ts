// Function to add two numbers
export const addNumbers = function (a: number, b: number): number {
  return a + b;
};

// Function to check if a number is even
export const isEven = (num: number): boolean => num % 2 === 0;

// Function to calculate the factorial of a number
export const factorial = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};
