function storeCatalogue(input) {
    
    let sorted = input.sort((a, b) => a.localeCompare(b));

    let str = sorted.join(', ')

    let newArr = [];
    let arrFromStart = [];

    for( let i = 0; i < sorted.length; i++){
        let str = sorted[i];
        newArr.push(str[0])
        if(!arrFromStart.includes(str[0])){
            arrFromStart.push(str[0]);
        }
    }

    let arrLength = arrFromStart.length;

    for (let i = 0; i < arrLength; i++){
        let currentChar = arrFromStart[i];
        for (let j = 0; j < sorted.length; j++){
            let str = sorted[j];
            if(str.startsWith(currentChar)){
                arrFromStart.push(str)
            }
        }
    }

    let result = arrFromStart.join(', ').split(', ')
    let sortedResult = result.sort((a, b) => a.localeCompare(b));

    for (const el of sortedResult) {
        if(el.length > 1){
            let [product, price] = el.split(' : ');
            price = Number(price);
            console.log(`  ${product}: ${price}`);
        } else {
            console.log(el)
        }
    }

}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
