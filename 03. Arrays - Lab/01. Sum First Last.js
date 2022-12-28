function evenPosition (input){

    let firstN = Number(input.shift());
    let lastN = Number(input.pop());
    let result = firstN + lastN;
    console.log(result)
}
evenPosition(['20', '30', '40'])
evenPosition(['5', '10'])

