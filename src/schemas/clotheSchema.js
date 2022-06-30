import * as yup from 'yup';

export const clotheSchema = yup.object({
  name: yup.string().required(),
  companyId: yup.number().required(),
  materialId: yup.number().required(),
  price: yup.number().required(),
  quantity: yup.number().lessThan(100).required(),
});
