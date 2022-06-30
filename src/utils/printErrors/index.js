import { printError } from '../printError';

export const printErrors = (errors) => {
  for (let key in errors) {
    printError(key, errors[key]);
  }
};
