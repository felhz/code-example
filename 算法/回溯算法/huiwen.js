/**
 * 给定字符串找到最长的回文,暴力算法
 */
const fun = (s) => {
  let result = '';
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length; j++) {
      let str = s.slice(i, j);
      if (str === str.split('').reverse().join('')) {
        if (str.length > result.length) {
          result = str;
        }
      }
    }
  }
  return result;
};

console.log(fun('13abccba32'));
