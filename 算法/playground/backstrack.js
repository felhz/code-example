const arr = [1, 2, 3, 4, 5];
const result = [];
const backTrack = (path, index) => {
  result.push(path);
  for (let i = index; i < arr.length; i++) {
    backTrack(path.concat(arr[i]), i + 1);
  }
};
backTrack([], 0);
console.log(result);
