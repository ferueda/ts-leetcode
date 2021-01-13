function merge(nums1: number[], m: number, nums2: number[], n: number): any {
  while (n > 0) {
    if (m === 0 || nums2[n - 1] >= nums1[m - 1]) {
      nums1[m + n - 1] = nums2[n - 1];
      n -= 1;
    } else {
      nums1[m + n - 1] = nums1[m - 1];
      m -= 1;
    }
  }

  return nums1;
}

export default merge;
