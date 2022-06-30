import * as yup from 'yup';

export const materialSchema = yup.object({
  name: yup.string().required(),
});
