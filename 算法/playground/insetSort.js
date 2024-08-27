const inertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > element) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = element;
  }
  return arr;
};
console.log(inertSort([10, 1, 20, 5]));
