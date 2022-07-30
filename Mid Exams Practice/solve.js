function shootForTheWin(input) {
    let arr = input.shift().split(' ');
    arr = arr.map(Number);
    let passedIndexes = [];
    let shotTargets = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'End') {
            console.log(`Shot targets: ${shotTargets} -> ${arr.join(' ')}`);
            break;
        }
        let index = Number(input[i]);
        let isTheIndexValid = isItInBounds(index);
        if (isTheIndexValid && !passedIndexes.includes(arr[index])) {
            let currentTarget = arr[index];
            arr.splice(index, 1, -1);
            passedIndexes.push(index);
            shotTargets++;
            for (let j = 0; j < arr.length; j++) {
                if (j === index) {
                    continue;
                    
                }
 
                if (arr[j] !== -1) {
                    if (arr[j] > currentTarget) {
                        arr[j] = arr[j] - currentTarget;
                    } else {
                        arr[j] = arr[j] + currentTarget;
                    }
                }
            }
        }
    }
 
    function isItInBounds(index) {
        if (index >= 0 && index < arr.length) {
            return true;
        } else {
            return false;
        }
    }
 
}