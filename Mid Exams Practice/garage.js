function garage(data) {

    let result = {};

    for (let line of data) {
        let [garage, carInfo] = line.split(' - ');
        carInfo = carInfo.split(': ').join(' - ');

        if (result.hasOwnProperty(garage)) {
            result[garage].push(carInfo);
        } else {
            result[garage] = [carInfo];
        }
    }

    console.table(result)

}
garage([
'1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])