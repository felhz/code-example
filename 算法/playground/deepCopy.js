const deepCopy = (obj, map = new Map()) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (map.get(obj)) {
    return map.get(obj);
  }
  let result = Array.isArray(obj) ? [] : {};
  map.set(obj, result);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key], map);
    }
  }
  return result;
};

let obj = {
  a: 1,
};
obj.b = obj;
let copy = deepCopy(obj);
console.log(copy); // {a: 1, b: {c: 2}};
