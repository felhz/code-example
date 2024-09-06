let item = {
  name: 12,
};
let item1 = {
  name: 'item1',
};

const removeDuplicat = [...new Set([item, item, item1])];
console.log(removeDuplicat);
