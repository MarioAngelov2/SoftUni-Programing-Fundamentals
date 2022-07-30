function memoryGame(input) {

    let arrOfElements = input.shift().split(' ');
    let command = input.shift();
    let arrLength = arrOfElements.length;
    let turnCounter = 1;

    while (command !== 'end') {
        let currentRow = command.split(' ').map(Number);
        let first = currentRow[0];
        let second = currentRow[1]; 
        let isInvalid = ((first < 0 || first >= arrLength) || (second < 0 || second >= arrLength) || first === second);

        if (isInvalid) {
            console.log("Invalid input! Adding additional elements to the board")
            let middleIndex = arrOfElements.length / 2;
            let elementToAdd = `-${turnCounter}a`
            arrOfElements.splice(middleIndex, 0, elementToAdd, elementToAdd);
        } else {
            if (arrOfElements[first] === arrOfElements[second]) {
                console.log(`Congrats! You have found matching elements - ${arrOfElements[first]}!`)
                arrOfElements = arrOfElements.filter(el => el !== arrOfElements[first]);
            } else {
                console.log(`Try again!`)
            }
        }
        if (arrOfElements.length === 0) {
            console.log(`You have won in ${turnCounter} turns!`)
            break;
        } 

        command = input.shift();
        turnCounter++;
    }

    if (arrOfElements.length > 0) {
        console.log(`Sorry you lose :(`)
        console.log(arrOfElements.join(' '))
    }
}
// memoryGame([
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"])

    memoryGame([
        "a 2 4 a 2 4", 
        "0 3", 
        "0 2",
        "0 1",
        "0 1", 
        "end"])