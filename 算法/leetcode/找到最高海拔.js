/**
 * 有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。

给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let n = gain.length + 1;
  let height = new Array(n);
  height[0] = 0;
  for (let i = 1; i < n; i++) {
    let curH = height[i - 1] + gain[i - 1];
    height[i] = curH;
  }
  return Math.max(...height);
};
console.log(largestAltitude([0, -5, -4, 1, 1, -6]));
console.log(largestAltitude(-4, -3, -2, -1, 4, 3, 2));
