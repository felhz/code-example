var nums = [1, 2, 3, 4, 5];
var size = nums.length;

var array = [];
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    for (let g = j + 1; g < size; g++) {
      if (nums[i] + nums[j] + nums[g] === 13) {
        array.push([nums[i], nums[j], nums[g]]);
      }
    }
  }
}

// console.log(array);
var subsets = function (nums) {
  const res = [];
  const backtrack = (path, index) => {
    // res.push(path);
    // if (path.length === 2) res.push(path);
    for (let i = index; i < nums.length; i++) {
      const p = path.concat(nums[i]);
      res.push(p);
      if (p.length === 1) {
        backtrack(p, i + 1);
      }
    }
  };
  backtrack([], 0);
  return res;
};

console.log(subsets(nums));
function solveNQueens(n) {
  let result = [];
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  board[0][0] = 'Q'; // 初始化第一个皇后
  backtrack(board, 0, result);
  return result;
}

function backtrack(board, row, result) {
  if (row === board.length) {
    // 如果放置的皇后已经达到当前行的列数，说明已经成功放置了所有皇后
    result.push(board.map((row) => row.join(''))); // 把每行转化成字符串并组成最终结果数组
    return;
  }
  for (let col = 0; col < board.length; col++) {
    if (isValid(board, row, col)) {
      // 检查当前位置是否可以放置皇后
      board[row][col] = 'Q'; // 放置皇后
      backtrack(board, row + 1, result); // 递归进入下一行
      board[row][col] = '.'; // 回溯，撤销当前位置的皇后
    }
  }
}

function isValid(board, row, col) {
  const n = board.length;
  // 检查列上是否有其他皇后
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }
  // 检查左上方是否有其他皇后
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }
  // 检查右上方是否有其他皇后
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }
  return true; // 没有其他皇后，这个位置可以放置皇后
}
// solveNQueens(5);
//

const threeSum = (arr) => {
  arr.sort();
};
