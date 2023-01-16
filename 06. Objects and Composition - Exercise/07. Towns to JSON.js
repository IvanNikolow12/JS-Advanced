function townsToJSON (input){

    let newArr = [];
    for (let i = 0; i < input.length; i++){
        let params = input[i].split('|');
        params = params.filter(e => String(e).trim());
        
        newArr.push(params);
    }
    let obj = {};
    let resultTowns = [];
    let resultLatitude = [];
    let resultLongitude = [];

    for (let i = 0; i < newArr.length; i++){
        let [Town, Latitude, Longitude] = newArr[i];
        Town = Town.split(' ')
        Town = Town.filter(e => String(e).trim());
        if(Town.length > 1){
            Town = Town.join(' ');
            
        }else {
            Town = Town.join();
        }
        if(i >= 1) {
            Latitude = Number(Latitude);
            Longitude = Number(Longitude);
            Latitude = Latitude.toFixed(2);
            Longitude =  Longitude.toFixed(2);
            Latitude = Number(Latitude);
            Longitude = Number(Longitude);
        }
        
        obj.Town = Town;
        resultTowns.push(obj.Town)
        obj.Latitude = Latitude;
        resultLatitude.push(obj.Latitude);
        obj.Longitude = Longitude;
        resultLongitude.push(obj.Longitude);
    }
    // console.log(resultTowns)
    // console.log(resultLatitude);
    // console.log(resultLongitude)

    let objResult = {
        Town: resultTowns[1],
        Latitude: resultLatitude[1],
        Longitude: resultLongitude[1]
    }

    let finalArr = [];
    finalArr.push(objResult)

    objResult = {
        Town: resultTowns[2],
        Latitude: resultLatitude[2],
        Longitude: resultLongitude[2]
    }
    finalArr.push(objResult)
    // console.log(finalArr)
    finalArr.join('')

    let result = JSON.stringify(finalArr)
    console.log(result)
    

}
// townsToJSON(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |'])
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])