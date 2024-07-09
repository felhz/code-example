/**
 * 正则使用方式
 */
let reg = /(\d+)(.*)/;
let str = 'aa12dawdwa';
str.replace(reg, (...args) => {
  console.log(args);
});

const regex = /quick (\w+)/g;
const str = 'The quick brown fox jumps over the lazy dog.';
let match;

while ((match = regex.exec(str)) !== null) {
  console.log(`Found ${match[0]} at index ${match.index}`);
  console.log(`Group 1: ${match[1]}`);
}
// 输出 Found quick brown at index 4
// 输出 Group 1: brown
