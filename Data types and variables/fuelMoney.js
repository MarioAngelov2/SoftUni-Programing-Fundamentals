function fuelMoney (distance, passengers, price){

    let needetFuel = (distance / 100) * 7;
    needetFuel += passengers * 0.1;
    let moneyCost = needetFuel * price;
    console.log(moneyCost)
}
fuelMoney (260, 9, 2.49)