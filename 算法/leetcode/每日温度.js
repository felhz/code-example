/**
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，
 * 其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

const dailyTemperatures = (temperatures) => {
  const answer = new Array(temperatures.length).fill(0);
  for (i = 0; i < temperatures.length; i++) {
    let flag = false;
    for (j = i; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        answer[i] = j - i;
        flag = true;
        break;
      }
    }
    if (!flag) answer[i] = 0;
  }
  return answer;
};
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 60, 90]));
/**
 * 单调栈实现方式
 */
const daily = (nums) => {
  const stack = []; // 单调栈，存储数组元素的索引
  const result = new Array(nums.length).fill(-1); // 结果数组，初始值为-1

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      // 如果栈不为空且栈顶元素对应的值小于等于当前元素，则出栈
      // 并更新结果数组中对应索引的值
      result[stack.pop()] = nums[i];
    }
    // 将当前元素的索引入栈
    stack.push(i);
  }

  return result;
};
console.log(daily([90, 80, 60]));
