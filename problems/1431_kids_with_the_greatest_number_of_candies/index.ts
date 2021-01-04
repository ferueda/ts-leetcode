function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greatest: number = Math.max(...candies);
  return candies.map((numCandies) => numCandies + extraCandies >= greatest);
}

export default kidsWithCandies;
