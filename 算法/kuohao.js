/**
 * @desc 寻找最长有效括号
 */

const fun = (s) => {
  const stack = [-1];
  let maxLength = 0;
  for (i = 0; i < s.length; i++) {
    let item = s[i];
    if (item === '{') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack.at(-1));
      }
    }
  }
  return maxLength;
};
console.log(fun('{}'));
// 707
/**
 *
 * @description 匹配括号是否有效
 */
function isValidParentheses(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in map) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== map[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// 示例用法
const str1 = '({})[]{}';
const str2 = '([)]';
// console.log(isValidParentheses(str1)); // 输出: true
// console.log(isValidParentheses(str2)); // 输出: false
