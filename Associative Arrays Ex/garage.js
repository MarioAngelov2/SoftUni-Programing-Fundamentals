function garage(data) {

    let resultObject = {};

    for (let line of data) {
        let [garage, carInfo] = line.split(' - ')
        carInfo = carInfo.split(': ').join(' - ')
        
        if (resultObject.hasOwnProperty(garage)) {
            resultObject[garage].push(carInfo);
        } else {
            resultObject[garage] = [carInfo];
        }
    }

    let entries = Object.entries(resultObject);
    for (let line of entries) {
        let garageNum = line.shift();
        console.log(`Garage № ${garageNum}:`)
        for (let carrArr of line) {
            for (let carInfo of carrArr) {
                console.log(`---${carInfo}`)
            }
        }
    }

}
garage([
'1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])