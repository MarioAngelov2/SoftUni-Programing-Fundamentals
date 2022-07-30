function theLift(input) {

    let resultArr = [];
    let passengers = Number(input.shift());
    let arrOfWagons = input.shift().split(' ').map(Number);
   
    for (let i = 0; i < arrOfWagons.length; i++){
       let currentWagon = arrOfWagons[i];

       while (currentWagon !== 4){
           currentWagon++;
           passengers--;
           if (passengers === 0){
               break;
           }
       }

       arrOfWagons[i] = currentWagon;
       if (passengers === 0){
           break;
       }
    }

    let isFull = arrOfWagons.filter(w => w !== 4);

    if (isFull.length === 0 && passengers === 0) {
        console.log(arrOfWagons.join(' '))
    } else if (isFull.length !== 0) {
        console.log(`The lift has empty spots!`)
        console.log(`wagons separated by ${arrOfWagons.join(' ')}`)
    } else {
        console.log(`There isn't enough space! {people} people in a queue!`)
        console.log(arrOfWagons.join(' '))
    }

}
theLift([
    "15",
    "0 0 0 0 0"])