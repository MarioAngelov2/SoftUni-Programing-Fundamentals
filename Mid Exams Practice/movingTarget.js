function movingTarget (arr) {

    let arrOfTargets = arr.shift().split(' ').map(Number);
    let command = arr.shift();
    
    while (command !== 'End') {
        let currentRow = command.split(' ')
        let currentCommand = currentRow[0];
        let currentIndex = Number(currentRow[1]);
        let power = Number(currentRow[2]);
        
       for (let i = 0; i < arrOfTargets.length; i++) {
           let currentTarget = arrOfTargets[i];

           switch (currentCommand) {
               case 'Shoot':
                if (currentIndex === i) {
                    currentTarget -= power;
                    if (currentTarget <= 0) {
                        let index = arrOfTargets.indexOf(currentTarget);
                        arrOfTargets.splice(index,1);
                    }
                }
                break;
               case 'Strike':
                if (currentIndex - power >= 0 && currentIndex + power < arrOfTargets.length) {
                    arrOfTargets.splice(currentIndex - power, power + power + 1);
                } else {
                    console.log(`Strike missed!`)
                }
                break;
               case 'Add':
                if (currentIndex >= 0 && currentIndex < arrOfTargets.length) {
                    arrOfTargets.splice(currentIndex, 0, power);
                } else {
                    console.log(`Invalid placement!`)
                }
           }
       }

        command = arr.shift();
    }
    console.log(arrOfTargets.join(' | '))
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
