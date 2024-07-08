/**
 *
 * 最大不重复的字符串长度
 */
function maxLengthWithoutRepeatingChars(str) {
  // 使用一个 Set 数据结构来存储已经出现过的字符
  // 初始化一个变量来存储最长子字符串的长度
  let set = new Set();
  let maxLength = 0;
  let start = 0;

  // 遍历字符串
  for (let end = 0; end < str.length; end++) {
    // 如果当前字符已经在 Set 中，那么需要移动 start 指针
    if (set.has(str[end])) {
      // 从 Set 中删除 start 指针指向的字符
      set.delete(str[start]);
      // 移动 start 指针
      start++;
    } else {
      // 如果当前字符不在 Set 中，那么将其添加到 Set 中
      set.add(str[end]);
      // 更新最长子字符串的长度
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }

  // 返回最长子字符串的长度
  return maxLength;
}

// 测试
console.log(maxLengthWithoutRepeatingChars('abcabcbb')); // 输出: 3
console.log(maxLengthWithoutRepeatingChars('abce')); // 输出: 3

const maxLength = (str) => {
  let maxl = 0;
  let start = 0;
  let set = new Set();
  for (i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      set.delete(str[i]);
      start++;
    } else {
      set.add(str[i]);
      maxl = Math.max(maxl, i - start + 1);
    }
  }
};
console.log(maxLength('abce'));
