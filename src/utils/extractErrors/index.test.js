import { errors1, errors2 } from './mocks';
import { extractErrors } from './index';

describe('extractErrors', () => {
  it('CASE-1', () => {
    const result = extractErrors(errors1);
    expect(result).toMatchObject({
      name: 'name is a required field',
      companyId: 'companyId is a required field',
      materialId: 'materialId is a required field',
      price: 'price is a required field',
      quantity: 'quantity is a required field',
    });
  });

  it('CASE-2', () => {
    const result = extractErrors(errors2);
    expect(result).toMatchObject({
      name: 'name is a required field',
      nit: 'nit is a required field',
    });
  });
});
