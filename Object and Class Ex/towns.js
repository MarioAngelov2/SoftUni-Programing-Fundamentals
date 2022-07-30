function towns(input) {

    let result = {};
    
    for (let town of input) {
        let token = town.split(' | ')
        let currentTown = token[0];
        let latitude = Number(token[1]);
        let longitude = Number(token[2]);
        
        result.town = currentTown;
        result.latitude = latitude.toFixed(2);
        result.longitude = longitude.toFixed(2);

        console.log(result);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
       'Beijing | 39.913818 | 116.363625'])