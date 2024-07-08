/**
 * @description 最短路径
 */
const data = [
  [3, 4, 2, 1],
  [5, 2, 4, 1],
  [7, 6, 4, 3],
  [5, 9, 2, 4],
];
let minWeight = Infinity;
let n = data.length - 1;

const findShortPath = (data, i, j, weight) => {
  if (i == n && j == n) {
    if (weight < minWeight) minWeight = weight;
    return;
  }

  if (i < n) {
    findShortPath(data, i + 1, j, weight + data[i + 1][j]);
  }
  if (j < n) {
    findShortPath(data, i, j + 1, weight + data[i][j + 1]);
  }
};
console.log(findShortPath(data, 0, 0, data[0][0]), minWeight);
