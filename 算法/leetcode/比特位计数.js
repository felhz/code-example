/**
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
    示例 1：

    输入：n = 2
    输出：[0,1,1]
    解释：
    0 --> 0
    1 --> 1
    2 --> 10
    示例 2：

    输入：n = 5
    输出：[0,1,1,2,1,2]
    解释：
    0 --> 0
    1 --> 1
    2 --> 10
    3 --> 11
    4 --> 100
    5 --> 101
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  for (let index = 0; index <= n; index++) {
    let bits = index.toString(2).split('');
    console.log(bits);
    let counts = 0;
    bits.forEach((item) => {
      if (item == 1) counts++;
    });
    arr.push(counts);
  }
  return arr;
};

console.log(countBits(5));
