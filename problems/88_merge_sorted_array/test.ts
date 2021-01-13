import merge from './index';

describe('Merge Sorted Array', () => {
  test('should return the right output for each input', () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
    expect(merge([1], 1, [], 0)).toEqual([1]);
  });
});
