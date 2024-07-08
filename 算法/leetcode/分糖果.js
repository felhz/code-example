let kidsWithCandies = (candies, extraCandies) => {
  let max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
