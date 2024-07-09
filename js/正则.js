/**
 * 正则使用方式
 */
let reg = /(\d+)(.*)/;
let str1 = 'aa12dawdwa';
str1.replace(reg, (...args) => {
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

// 请输入6-20位密码，包含数字字母
export const PWD_REG = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;

// 空格
// export const SPACE_REG = /(^\s*)|(\s*$)/g
export const SPACE_REG = /\s+/g;

//中文
export const CHINESE_REG = /[\u4e00-\u9fa5]]/gi;

export const mobileRegex = /^1[3456789]\d{9}$/;
export const emailRegex =
  /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
