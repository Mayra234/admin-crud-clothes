import * as yup from 'yup';

export const companySchema = yup.object({
  name: yup.string().required(),
  nit: yup.number().required(),
});
