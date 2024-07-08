let canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  if (flowerbed.length === 1) {
    if (flowerbed[0] === 0) count++;
    return count >= n;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // 第一个时
      if (i === 0 && flowerbed[i + 1] === 0) {
        count++;
        i++;
      } else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
        // 最后一个且 当前的前一个
        count++;
        i++;
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        // 前后都是0
        count++;
        i++;
      }
    }
  }
  return count >= n;
};
console.log(canPlaceFlowers([1, 0], 1));
