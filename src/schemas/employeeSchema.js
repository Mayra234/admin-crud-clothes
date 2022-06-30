import * as yup from 'yup';

export const employeeSchema = yup.object({
  firstName: yup.string().required(),
  secondName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(15).required(),
});
