function calorieObj (input){

    let obj = { };

    for (let i = 0; i < input.length; i+= 2){
        let el = input[i];
        if(!obj.hasOwnProperty(el)){
            obj[el] = 0;
        }
        obj[el] += Number(input[i + 1]) ;
    }
   console.log(obj)
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])