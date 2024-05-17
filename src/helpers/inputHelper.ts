/* eslint-disable no-param-reassign */

export const removeNonDigits = (str: string) => str.replace(/\D/g, '');

export const numericInitiate = (input: string) => {
  let inputValue = input;
  if (inputValue === '0' && /^\d$/.test(inputValue)) {
    inputValue = input;
  }

  const numericValue = removeNonDigits(input);

  return numericValue;
};
