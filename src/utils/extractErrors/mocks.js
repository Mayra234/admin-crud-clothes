export const errors1 = {
  value: {},
  errors: [
    'name is a required field',
    'companyId is a required field',
    'materialId is a required field',
    'price is a required field',
    'quantity is a required field',
  ],
  inner: [
    {
      path: 'name',
      type: 'required',
      errors: ['name is a required field'],
      params: {
        path: 'name',
      },
      inner: [],
      name: 'ValidationError',
      message: 'name is a required field',
    },
    {
      path: 'companyId',
      type: 'required',
      errors: ['companyId is a required field'],
      params: {
        path: 'companyId',
      },
      inner: [],
      name: 'ValidationError',
      message: 'companyId is a required field',
    },
    {
      path: 'materialId',
      type: 'required',
      errors: ['materialId is a required field'],
      params: {
        path: 'materialId',
      },
      inner: [],
      name: 'ValidationError',
      message: 'materialId is a required field',
    },
    {
      path: 'price',
      type: 'required',
      errors: ['price is a required field'],
      params: {
        path: 'price',
      },
      inner: [],
      name: 'ValidationError',
      message: 'price is a required field',
    },
    {
      path: 'quantity',
      type: 'required',
      errors: ['quantity is a required field'],
      params: {
        path: 'quantity',
      },
      inner: [],
      name: 'ValidationError',
      message: 'quantity is a required field',
    },
  ],
  name: 'ValidationError',
  message: '5 errors occurred',
};

export const errors2 = {
  value: {},
  errors: ['name is a required field', 'nit is a required field'],
  inner: [
    {
      path: 'name',
      type: 'required',
      errors: ['name is a required field'],
      params: { path: 'name' },
      inner: [],
      name: 'ValidationError',
      message: 'name is a required field',
    },
    {
      path: 'nit',
      type: 'required',
      errors: ['nit is a required field'],
      params: { path: 'nit' },
      inner: [],
      name: 'ValidationError',
      message: 'nit is a required field',
    },
  ],
  name: 'ValidationError',
  message: '2 errors occurred',
};
