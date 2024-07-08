/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
let mergeAlternately = function (word1, word2) {
  let newstr = '';
  let maxLen = Math.max(word1.length, word2.length);

  for (i = 0; i < maxLen; i++) {
    // word1结束
    if (!word1[i]) {
      newstr += word2.slice(i);
      break;
    }
    // word2结束
    if (!word2[i]) {
      newstr += word1.slice(i);
      break;
    }
    newstr += word1[i] + word2[i];
  }
  return newstr;
};
console.log(mergeAlternately('abc', 'pqr'));
