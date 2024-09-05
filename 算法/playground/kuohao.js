const vaildBrackets = (str = '') => {
  if (!str) return false;
  let stack = [-1];
  let maxLength = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === '(') {
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
console.log(vaildBrackets('()'));
