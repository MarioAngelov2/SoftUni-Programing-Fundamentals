function arrayModifier(arr) {

    let newArray = arr.shift().split(' ');
    
    for (let i = 0; i < arr.length; i++){
        let currentRow = arr[i].split(' ')
        let currentCommand = currentRow[0];
        let numOne = currentRow[1];
        let numTwo = currentRow[2];

        if (currentCommand === 'swap'){
            swap(newArray, numOne, numTwo);
        } else if (currentCommand === 'multiply'){
            multiply(newArray, numOne, numTwo);
        } else if (currentCommand === 'decrease'){
            decrease (newArray);
        } else {
            break;
        }
    }
    console.log(newArray.join(' '))

    function swap(newArray, index1, index2){

        let temp = newArray[index1];
        newArray[index1] = newArray[index2]
        newArray[index2] = temp;
    }

    function multiply(newArray, index1, index2){

        newArray[index1] = newArray[index1] * newArray[index2];

    }

    function decrease(newArray){
        for (let i = 0; i < newArray.length; i++){
            newArray[i] -= 1;
        }
    }

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'])