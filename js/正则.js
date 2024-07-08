/**
 * 正则使用方式
 */
let reg = /(\d+)(.*)/;
let str = 'aa12dawdwa';
str.replace(reg, (...args) => {
  console.log(args);
});
