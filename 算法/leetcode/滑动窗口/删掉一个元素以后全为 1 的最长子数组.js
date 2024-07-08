/**
 * 给你一个二进制数组 nums ，你需要从中删掉一个元素。

    请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

    如果不存在这样的子数组，请返回 0 。

    提示 1：

    输入：nums = [1,1,0,1]
    输出：3
    解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
    示例 2：

    输入：nums = [0,1,1,1,0,1,1,0,1]
    输出：5
    解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
    示例 3：

    输入：nums = [1,1,1]
    输出：2
    解释：你必须要删除一个元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestSubarray = function (nums) {
  let left = 0;
  let maxCount = 0;
  let zeroCount = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    }
    // 超过1个的时候
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--; // 移动左边界，如果左边界是0，则0的计数减1
      }
      left++; // 移动左边界
    }
    maxCount = Math.max(maxCount, i - left);
  }
  return maxCount;
};
console.log(longestSubarray([1, 1, 0, 1]));
