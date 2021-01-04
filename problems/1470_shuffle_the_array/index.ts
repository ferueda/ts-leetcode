function shuffle(nums: number[], n: number): number[] {
  const output = [];

  for (let i = 0; i < n; i++) {
    output.push(nums[i], nums[i + n]);
  }

  return output;
}

export default shuffle;
