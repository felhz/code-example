/**
 * 给你一个整数数组 nums 和一个整数 k 。
    每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。
    返回你可以对数组执行的最大操作数。

    示例 1：
    输入：nums = [1,2,3,4], k = 5
    输出：2
    解释：开始时 nums = [1,2,3,4]：
    - 移出 1 和 4 ，之后 nums = [2,3]
    - 移出 2 和 3 ，之后 nums = []
    不再有和为 5 的数对，因此最多执行 2 次操作。
    
    示例 2：
    输入：nums = [3,1,3,4,3], k = 6
    输出：1
    解释：开始时 nums = [3,1,3,4,3]：
    - 移出前两个 3 ，之后nums = [1,4,3]
    不再有和为 6 的数对，因此最多执行 1 次操作。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0;
  let count = 0;
  nums.sort((a, b) => a - b);
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < k) {
      left++;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else {
      left++;
      right--;
      count++;
    }
  }
  return count;
};
// console.log(maxOperations([1, 2, 3, 4], 5));
// console.log(maxOperations([3, 1, 3, 4, 3], 6));
console.log(
  maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)
);
