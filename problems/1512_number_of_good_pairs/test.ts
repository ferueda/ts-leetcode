import numIdenticalPairs from './index';

describe('Number of Good Pairs', () => {
  test('should return the right output for each input', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
