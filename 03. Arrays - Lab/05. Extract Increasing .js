function extractIncreasing(input) {
  let newArr = [];
  newArr.push(input.shift());
  for (let i = 0; i < input.length; i++) {
    let el = input[i];
    if (el > newArr.slice(-1)) {
      newArr.push(el);
    }
  }
  return newArr.join("\n");
}
console.log(extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));
//extractIncreasing([1, 2, 3, 4]);
//extractIncreasing([20, 3, 2, 15, 6, 1]);
