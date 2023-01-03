function printEveryNth(arr, n) {


  let newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    let el = arr[i];
    newArr.push(el)
}
return newArr;
}
console.log(printEveryNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2));
// console.log(printEveryNth(["dsa", "asd", "test", "tset", "2"]));
// console.log(printEveryNth(["1", "2", "3", "4", "5", "6"]));
