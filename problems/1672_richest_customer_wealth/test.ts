import richestCustomerWealth from './index';

describe('Richest Customer Wealth', () => {
  test('should return the right sum for each input', () => {
    expect(
      richestCustomerWealth([
        [1, 2, 3],
        [3, 2, 1],
      ]),
    ).toBe(6);
    expect(
      richestCustomerWealth([
        [1, 5],
        [7, 3],
        [3, 5],
      ]),
    ).toBe(10);
    expect(
      richestCustomerWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ]),
    ).toBe(17);
  });
});
