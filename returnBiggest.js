const nums = [1, 1, 2, 5, 5, 6, 8, 9];

const returnLargestNth = (arr, n) => {
  const cleanedArr = arr
    .sort((a, b) => b - a)
    .filter((value, index, self) => {
      return self.indexOf(value) == index;
    });

  return cleanedArr[n - 1];
};
