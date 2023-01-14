function lowestPrices (arr){

    let productsArr = [];
    let objArr = []
    

    for (const line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        
        if(!productsArr.includes(product)){
            productsArr.push(product);
        }
        objArr.push([town,product, price])
    }
    let result = [];
    let forPush = '';

    for (let i = 0; i < productsArr.length; i++){
        let product = productsArr[i];
        let lowest = 100000;
        for (let j = 0; j < objArr.length; j++){
            if (product === objArr[j][1]){
                if(objArr[j][2] < lowest){
                    lowest = objArr[j][2];
                    forPush = `${product} -> ${lowest} (${objArr[j][0]})`;
                }
            }
        }
        result.push(forPush)
    }

  
    
    for (const el of result) {
        console.log(el)
    }

}
lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])
// lowestPrices(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'Mexico City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Washington City | Mercedes | 1000'])