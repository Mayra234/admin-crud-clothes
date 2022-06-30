export const extractErrors = (errors) => {
  console.log(errors.inner);
  return {
    name: 'name is a required field',
    companyId: 'company is a required field',
    materialId: 'materialId is a required field',
  };
};
