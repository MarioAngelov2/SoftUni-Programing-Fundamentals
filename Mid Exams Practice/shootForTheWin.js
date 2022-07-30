function shootForTheWin(arr) {

    let newArr = arr.shift().split(' ').map(Number);
    let passedIndexes = [];
    let shotCounter = 0;

    let index = 0;
    let command = arr[index];
    index++;

    while (command !== "End"){
        let indexToBeShot = Number(command);
        let currentNum = Number(command);

        if (indexToBeShot < arr.length - 1 && indexToBeShot >= 0) {
            newArr[indexToBeShot] = -1;

            for (let i = 0; i < newArr.length; i++) {
                if (currentNum >= newArr[i]) {
                    if (newArr[i] === -1){
                        continue;
                    }
                    newArr[i] += currentNum;
                } else {
                    if (newArr[i] === -1){
                        continue;
                    }
                    newArr -= currentNum;
                }
            }
        }
        command = arr[index];
        index++
    }

    for (let el of newArr){
        if (el === -1) {
            shotCounter++;
        }
    }

    console.log(shotCounter)
    
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])