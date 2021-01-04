function shuffle(nums: number[], n: number): number[] {
  const odd = nums.slice(0, n);
  const even = nums.slice(n);

  return odd.reduce((acc: number[], _current, index) => {
    return [...acc, odd[index], even[index]];
  }, []);
}

export default shuffle;
