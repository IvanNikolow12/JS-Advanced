function cityRecord (town, population, tresure){

    let obj = {
        name: town,
        population: population,
        treasury: tresure
    }

   return obj;

}
console.log(cityRecord('Tortuga', 7000, 15000))