const a = '13abccba32';
let result = '';
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let txt = a.slice(i, j);

    if (txt === txt.split('').reverse().join('')) {
      if (result.length <= txt.length) {
        result = txt;
      }
    }
  }
}
console.log(result);
