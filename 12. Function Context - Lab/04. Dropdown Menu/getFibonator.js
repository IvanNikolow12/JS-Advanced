// function solution () {
//     let result = '';

//     return {
//      append (string) {
//         result += string; 
//     },
//      removeStart (n) {
//         result = result.substring(n);
//     },
//     removeEnd (n) {
//         result = result.substring(0, result.length - n);
//     },
//      print () {
//         console.log(result);
//     },
// }
// }

// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();

function getFibonator() {
    let current = 0;
    let next = 1;

    function fibonator () {
        let newNumber = current + next;
        current = next;
        next = newNumber;

        return current;
    }

    return fibonator;
    

}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());