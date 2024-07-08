// 斐波那契数列
const fun = (n) => {
  const arr = new Array(n + 1);
  arr[0] = 1;
  arr[1] = 1;
  for (i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
const fun1 = (n) => {
  var a = 0,
    b = 1,
    c = 1;
  for (i = 2; i < n + 1; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
};

console.log(fun(4));
/**
 * 背包问题
 */
const solution = () => {
  const weight = [1, 2, 3, 2];
  const values = [10000, 3000, 4000, 8000];
  const capacity = 6;
  const dep = [];
  for (let i = 0; i < values.length; i++) {
    dep[i] = [];

    for (let j = 0; j <= capacity; j++) {
      // 重量为0是设置默认值
      if (j === 0) {
        dep[i][j] = 0;
        continue;
      }
      // 如果放不进去
      if (weight[i] > j) {
        if (i === 0) {
          dep[i][j] = 0;
        } else {
          dep[i][j] = dep[i - 1][j];
        }
      } else {
        // 可以放进去
        if (i === 0) {
          dep[i][j] = values[i];
        } else {
          dep[i][j] = Math.max(
            values[i] + dep[i - 1][j - weight[i]],
            dep[i - 1][j]
          );
        }
      }
    }
  }
  console.log(dep);
  // format
  console.log(dep);
  let i = values.length - 1,
    j = capacity;
  while (i > 0 && j > 0) {
    if (dep[i][j] != dep[i - 1][j]) {
      j = j - weight[i];
      console.log('选择物品', i, '价值', values[i]);
      i--;
    } else {
      i--;
    }
  }
  if (i == 0) {
    if (dep[i][j] != 0) {
      //那么第一行的物品也可以取
      console.log('选择物品', i, '价值', values[i]);
    }
  }
};

solution();

function minCoins(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}

// 测试示例
let coins = [1, 2];
let amount = 5;

// console.log(minCoins(coins, amount)); // 输出 3，最少需要 3 枚硬币来找零 11 元
// dec jan feb march april may june july aug sep october november
// jan feb march april mauy june july aug sep october  nov dec  monday s
// sunday monday tuesday  wedenesday  thursday friday satday
