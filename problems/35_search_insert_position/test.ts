import searchInsert from './index';

describe('Search Insert Position', () => {
  test('should return the right output for each input', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
  test('should return the right output for each input', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });
  test('should return the right output for each input', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
  test('should return the right output for each input', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
  test('should return the right output for each input', () => {
    expect(searchInsert([1], 0)).toBe(0);
  });
});
