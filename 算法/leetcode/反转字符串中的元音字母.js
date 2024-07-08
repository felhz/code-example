/**
 * 元音字母  'a'、'e'、'i'、'o'、'u'
 * 
 * 输入：s = "leetcode"
    输出："leotcede"
 */
let reverseVowels = function (s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (
      vowels.includes(arr[left].toLowerCase()) &&
      vowels.includes(arr[right].toLowerCase())
    ) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (vowels.includes(arr[left].toLowerCase())) {
      right--;
    } else {
      left++;
    }
  }
  return arr.join('');
};
console.log(reverseVowels('leetcode'));
