/**
 * 
 * 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
    示例 1：

    输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
    输出：6
    解释：[1,1,1,0,0,1,1,1,1,1,1]
    粗体数字从 0 翻转到 1，最长的子数组长度为 6。
    示例 2：

    输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
    输出：10
    解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let longestOnes = function (nums, k) {
  let maxCount = 0; // 最大连续1的个数
  let zeroCount = 0; // 当前窗口内0的个数
  let left = 0; // 窗口左边界

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++; // 遇到0，增加0的计数
    }

    // 如果0的个数超过了k，则需要移动左边界
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--; // 移动左边界，如果左边界是0，则0的计数减1
      }
      left++; // 移动左边界
    }

    // 更新最大连续1的个数
    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
};
console.log(longestOnes([1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1], 1));

const longgestOnes1 = (nums, k) => {
  let left = 0;
  let zeroCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--; // 移动左边界，如果左边界是0，则0的计数减1
      }
      left++;
    }
    maxCount = Math.max(maxCount, i - left + 1);
  }
  return maxCount;
};
console.log(longgestOnes1([1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1], 1));
