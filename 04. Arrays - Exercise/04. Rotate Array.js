function rotateArray(input, n) {

  for (let i = 0; i < n; i++) {
    let el = input.pop();
    input.unshift(el);
  }
  return input.join(" ");
}
console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2));
console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));
