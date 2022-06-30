import { cleanError } from '../cleanError';

export const cleanErrors = (formData) => {
  for (let key in formData) {
    cleanError(key);
  }
};
