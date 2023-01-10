function cityTaxes(town, population, treasury) {
    
    
    let city = {
        name: town,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury = Math.floor(treasury + population * this.taxRate);
            
        },
        applyGrowth(percent){
            this.population = Math.floor(population + (population * (percent / 100)));
            
        },
        applyRecession(percent){   
            this.treasury = Math.floor(treasury - (treasury * (percent / 100)));
        }
    }

        return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
