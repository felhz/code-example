// 插入排序是一种简单直观的排序算法，其工作原理类似于打扑克牌时整理手中的牌。
// 算法将数组分为已排序和未排序两部分，每次从未排序部分取出一个元素，将其插入到已排序部分的正确位置，直到所有元素都被插入到已排序部分。

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    // 将 arr[i] 插入到已排序部分的正确位置
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// 测试
let array = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', array);
let sortedArray = insertionSort(array);
console.log('Sorted array:', sortedArray);
