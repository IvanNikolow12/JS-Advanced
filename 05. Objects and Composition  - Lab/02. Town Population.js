function townPopulation (input) {

    let townPopulation = {};

    for (const line of input) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if(!townPopulation.hasOwnProperty(town)){
            townPopulation[town] = 0;
        }
        townPopulation[town] += population;
    }
    let result = Object.entries(townPopulation);

    for (const line of result) {
        console.log(`${line[0]} : ${line[1]}`);
    }

}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])

