function diagonalSum(arr) {
  let up = 0;
  let down = arr[0].length - 1;

  let upSum = 0;
  let downSum = 0;

  for (let i = 0; i < arr[0].length; i++) {
    upSum += arr[i][up];
    downSum += arr[i][down];
    up++;
    down--;
  }
  console.log(upSum, downSum);
}

  diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
  ]);
