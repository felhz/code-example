// 插入排序是一种简单直观的排序算法，其工作原理类似于打扑克牌时整理手中的牌。
// 算法将数组分为已排序和未排序两部分，每次从未排序部分取出一个元素，将其插入到已排序部分的正确位置，直到所有元素都被插入到已排序部分。

function insertionSort(arr) {
  // 对于数组的每一个元素，从它开始到0位置，比较该元素和前一个元素的大小
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    // 如果该元素小于前一个元素，那么前一个元素向后移动，并继续向前比较
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 如果该元素大于前一个元素，那么它将放到合适的位置
    arr[j + 1] = current;
  }
  // 返回排序后的数组
  return arr;
}

// 测试
let array = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', array);
let sortedArray = insertionSort(array);
console.log('Sorted array:', sortedArray);
