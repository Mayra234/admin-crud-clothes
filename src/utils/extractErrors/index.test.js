import { error1 } from './mocks';
import { extractErrors } from './index';

describe('extractErrors', () => {
  it('CASE-1', () => {
    const result = extractErrors(error1);
    expect(result).toMatchObject({
      name: 'name is a required field',
      companyId: 'company is a required field',
      materialId: 'materialId is a required field',
    });
  });
});
