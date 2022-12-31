function biggestElement(arr) {
    let minNumber = Number.MIN_SAFE_INTEGER;
  
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length; col++) {
        let currentNumber = arr[row][col];
        if (currentNumber > minNumber) {
          minNumber = arr[row][col];
        }
      }
    }
  
    return minNumber;
  }
  console.log(
    biggestElement([
      [20, 50, 10],
      [8, 33, 145],
    ])
  );
  console.log(
    biggestElement([
      [3, 5, 7, 12],
      [-1, 4, 33, 2],
      [8, 3, 0, 4],
    ])
  );
