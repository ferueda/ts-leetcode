function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (target === nums[mid]) return mid;

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

/* NAIVE SIMPLE IMPLEMENTATION

function searchInsert(nums: number[], target: number): number {
  let counter = 0;

  while (counter < nums.length && nums[counter] < target) {
    counter += 1;
  }

  return counter;
}

*/

export default searchInsert;
