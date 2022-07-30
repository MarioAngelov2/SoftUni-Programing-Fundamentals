function shootForTheWin2(arr) {

    let arrayOfTargets = arr.shift().split(' ').map(Number);
    let shotCounter = 0;

    let command = arr.shift();

    while (command !== 'End') {
        let indexOfTarget = Number(command);

        if (indexOfTarget >= 0 && indexOfTarget < arrayOfTargets.length) {
            for (let i = 0; i < arrayOfTargets.length; i++) {
                let currentTarget = arrayOfTargets[indexOfTarget];

                if (i !== indexOfTarget && arrayOfTargets[i] !== -1) {
                    if (arrayOfTargets[i] > currentTarget) {
                        arrayOfTargets[i] -= currentTarget;
                    } else {
                        arrayOfTargets[i] += currentTarget;
                    }
                }
            }
            arrayOfTargets[indexOfTarget] = -1;
            shotCounter++;
        }
       command = arr.shift();
    }
    console.log(arrayOfTargets)
}
shootForTheWin2(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])