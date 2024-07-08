/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

    题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

    请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
    示例 1:

    输入: nums = [1,2,3,4]
    输出: [24,12,8,6]
    示例 2:

    输入: nums = [-1,1,0,-3,3]
    输出: [0,0,9,0,0]
 * 
 */
const productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(0);
  let leftProduct = 1;
  // 计算左边的乘积
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  console.log(answer);
  let rightProduct = 1;
  // 计算右边的乘积
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};
console.log(productExceptSelf([2, 3, 8, 6]));
