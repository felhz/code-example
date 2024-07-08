const fun = (arr, amount) => {
  arr.sort((a, b) => b - a);
  let remaining = amount;
  let used = [];
  for (let index = 0; index < arr.length; index++) {
    while (remaining >= arr[index]) {
      remaining = remaining - arr[index];
      used.push(arr[index]);
    }
  }
  return used;
};
console.log(fun([1, 2], 5));
