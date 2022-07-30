function needForSpeed(input) {
    let Num = +input.shift();
    let Obj = {};
    for (let i = 0; i < Num; i++) {
      let [car, mileage, fuel] = input.shift().split("|");
      Obj[car] = { [mileage]: [fuel] };
    }
    for (let i = 0; i< input.length; i++) {
      let tolken = input[i].split(" : ");
      let command = tolken[0];    
   
      if (command === "Drive") {
        let car = tolken[1];
        let distance = +tolken[2];
        let fuel = +tolken[3];
        for (const key in Obj) {
          if (key === car) {
            console.log(Object.entries(Obj))
            Object.entries(Obj[car])[0][1];
            if (+Object.entries(Obj[car])[0][1] > fuel) {
              let NewDistance = +Object.entries(Obj[car])[0][0] + distance;
              let Newcurfuel = +Object.entries(Obj[car])[0][1] - fuel;
              Obj[car] = {[NewDistance] : [Newcurfuel]}           
              console.log(
                `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
              );
              if (NewDistance >= 100000) {
                  delete Obj[car]
                  console.log(`Time to sell the ${car}!`);
              }
   
            } else {
              console.log(`Not enough fuel to make that ride`);
            }
          }
        }
      } else if (command === "Refuel") {
        let car = tolken[1];
        let fuel = +tolken[2];
        for (const key in Obj) {
          if (key === car) {
           if ((+Object.entries(Obj[car])[0][1] + fuel) <= 75) {
              let Newcurfuel = +Object.entries(Obj[car])[0][1] + fuel
              let NewDistance = +Object.entries(Obj[car])[0][0]
              Obj[car] = {[NewDistance] : [Newcurfuel]}
              console.log(`${car} refueled with ${fuel} liters`);
           }
          }
        }
      } else if (command === 'Revert') {
        let car = tolken[1];
        let mileage = +tolken[2];
        let NewDistance = +Object.entries(Obj[car])[0][0] - mileage;
        let Newcurfuel = +Object.entries(Obj[car])[0][1]
        if (+Object.entries(Obj[car])[0][0] - mileage <= 10000) {
          Obj[car] = {[10000] : [Newcurfuel]}
      } else {
        Obj[car] = {[NewDistance] : [Newcurfuel]}
        console.log(`${car} mileage decreased by ${mileage} kilometers`);
      }
      } else if (command === 'Stop') {
          let aray = Object.entries(Obj)
          //console.table(Object.entries(Obj));
              aray.forEach(el => {
                  let car = el[0]
                  //console.table(Object.entries(el[1]));
                  let mileage = Object.entries(el[1])[0][0]
                  //console.log(mileage);
                  let fuel = Object.entries(el[1])[0][1]
                  //console.log(fuel);
                  console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel.join(' ')} lt.`);
              });
          }
   
      }
    }
    needForSpeed([
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