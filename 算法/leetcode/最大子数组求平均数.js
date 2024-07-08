/**
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

示例 1：

输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
示例 2：

输入：nums = [5], k = 1
输出：5.00000
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length <= k) {
    let sum = 0;
    nums.forEach((i) => {
      sum += i;
    });
    return sum / k;
  }
  let maxAve = 0;
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0;
    nums.slice(i, i + k).forEach((i) => {
      sum += i;
    });
    maxAve = Math.max(maxAve, sum / k);
  }
  return maxAve;
};
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([1], 1));
console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
