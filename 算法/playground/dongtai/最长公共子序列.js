/**
 * 最长公共子序列（Longest Common Subsequence, LCS）问题是计算机科学中的一个经典问题，
 * 它指的是两个或多个序列之间的最长公共子序列的长度，这个子序列不必是连续的。
 * 在JavaScript中，我们可以通过动态规划的方法来解决这个问题。
 */
function longestCommonSubsequence(str1, str2) {
  // 获取两个字符串的长度
  const len1 = str1.length;
  const len2 = str2.length;

  // 创建一个二维数组dp，dp[i][j]表示str1的前i个字符和str2的前j个字符的最长公共子序列的长度
  const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

  // 填充dp数组
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // 如果当前字符相等，则当前位置的最长公共子序列长度等于左上角位置的值加1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 如果当前字符不相等，则当前位置的最长公共子序列长度等于上方和左方位置的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // dp[len1][len2]就是两个字符串的最长公共子序列的长度
  return dp[len1][len2];
}

// 示例
const str1 = '11';
const str2 = 'GXTXAYB';
console.log(longestCommonSubsequence(str1, str2)); // 输出 4，因为最长公共子序列是 GTAB
