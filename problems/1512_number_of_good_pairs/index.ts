function numIdenticalPairs(nums: number[]): number {
  let count = 0;

  const cache: { [key: number]: number } = {};

  nums.forEach((num) => {
    if (cache[num]) {
      count += cache[num];
      cache[num] += 1;
    } else {
      cache[num] = 1;
    }
  });

  return count;
}

export default numIdenticalPairs;
