/*
  
*/
var reverseWords = function (s) {
  s = s.trim();
  const res = s.split(' ').reverse().join(' ');

  return res.replace(/\s+/g, ' ');
};
console.log(reverseWords('the sky is blue'));
