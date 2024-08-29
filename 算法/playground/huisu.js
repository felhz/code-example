const weight = [3, 2, 4];
const value = [5, 4, 6];
const capacity = 8;
const n = weight.length;
//斐波那契数列
// const fib = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

let solution = (capacity, value, weight) => {
  const dp = Array.from({ length: value.length + 1 }, () =>
    Array(capacity + 1).fill(0)
  );
  console.log(dp);

  for (let i = 1; i <= value.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (j < weight[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j - weight[i - 1]] + value[i - 1],
          dp[i - 1][j]
        );
      }
    }
  }
  return dp;
};
let a = solution(capacity, value, weight);
console.log(solution(capacity, value, weight));
