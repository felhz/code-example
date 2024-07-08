/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  //是否存在最大公因子
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  // 辗转相除法
  var gcd = function (a, b) {
    return b === 0 ? a : gcd(b, a % b);
  };
  return str1.substring(0, gcd(str1.length, str2.length));
};
console.log(gcdOfStrings('ABAB', 'AB'));
