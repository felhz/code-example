/**
 * 
 * 给你一个字符数组 chars ，请使用下述算法压缩：

从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：

如果这一组长度为 1 ，则将字符追加到 s 中。
否则，需要向 s 追加字符，后跟这一组的长度。
压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。

请在 修改完输入数组后 ，返回该数组的新长度。

你必须设计并实现一个只使用常量额外空间的算法来解决此问题。
 */
const compress = (chars) => {
  if (chars.length === 1) return chars.length;
  let newArr = [];
  for (i = 0; i < chars.length; i++) {
    let char = chars[i];
    let count = 1;
    while (char === chars[i + 1] && i < chars.length - 1) {
      count++;
      i++;
    }
    newArr.push(char);
    if (count > 1) {
      for (let j of count.toString()) {
        newArr.push(j);
      }
    }
  }
  return newArr.length;
};
console.log(
  compress([
    'a',
    'a',
    'b',
    'b',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
    'c',
  ])
);
console.log(compress(['a']));
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
