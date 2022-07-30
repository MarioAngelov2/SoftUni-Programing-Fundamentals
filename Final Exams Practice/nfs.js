function nfs2(data) {

    let n = Number(data.shift());
    let carList = {};
    
    for (let i = 0; i < n; i++) {
        let [car, distance, fuel] = data[i].split('|');
        
        if (!carList.hasOwnProperty(car)) {
            carList[car] = {};
            carList[car]['car'] = car;
            carList[car]['distance'] = Number(distance);
            carList[car]['fuel'] = Number(fuel);
        }
    }

    for (let i = n; i < data.length; i++) {
        let tokens = data[i].split(' : ');
        let command = tokens[0];
        let givenCar;
        let givenDistance;
        let givenFuel

        if (command === 'Stop') {
            for (let el in carList) {
                let carName = carList[el]['car'];
                let mileage = carList[el]['distance'];
                let fuel = carList[el]['fuel'];
                console.log(`${carName} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`)
            }
            break;
        }

        switch (command) {
            case 'Drive':
                givenCar = tokens[1];
                givenDistance = Number(tokens[2]);
                givenFuel = Number(tokens[3]);

               if (carList[givenCar]['fuel'] < givenFuel) {
                console.log(`Not enough fuel to make that ride`);
               } else if (carList[givenCar]['fuel'] >= givenFuel) {
                let oldFuel = carList[givenCar].fuel;
                carList[givenCar]['fuel'] = oldFuel - givenFuel;
                carList[givenCar]['distance'] += givenDistance;
                console.log(`${givenCar} driven for ${givenDistance} kilometers. ${givenFuel} liters of fuel consumed.`)
               };

               if (carList[givenCar]['distance'] > 100000) {
                delete carList[givenCar];
                console.log(`Time to sell the ${givenCar}!`);
               }
                break;

            case 'Refuel':
                givenCar = tokens[1];
                givenFuel = Number(tokens[2]);

                let sumFuel = givenFuel + carList[givenCar]['fuel'];

                if (sumFuel > 75) {
                    carList[givenCar]['fuel'] = 75;
                    sumFuel -= 75;
                    console.log(`${givenCar} refueled with ${givenFuel - sumFuel} liters`);
                } else {
                    carList[givenCar]['fuel'] = sumFuel;
                    console.log(`${givenCar} refueled with ${givenFuel} liters`)
                }
                break;

            case 'Revert':
                givenCar = tokens[1];
                let givenKilometers = Number(tokens[2]);

                let oldDistance = carList[givenCar].distance;
                carList[givenCar]['distance'] = oldDistance - givenKilometers;
                
                if (carList[givenCar]['distance'] < 10000) {
                    carList[givenCar]['distance'] = 10000;
                    break;
                }
                console.log(`${givenCar} mileage decreased by ${givenKilometers} kilometers`);
                break;
        }
    }
}
nfs2([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])