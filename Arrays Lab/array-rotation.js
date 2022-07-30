function arrayRotation (arr, rotationsCount){

    let arrayOfElements = arr;
    let rotations = rotationsCount;

    for (let i = 0; i < rotations; i++){
        let numberToMove = arrayOfElements.shift();
        arrayOfElements.push(numberToMove);
    }
    console.log(arrayOfElements);

}
arrayRotation ([51, 47, 32, 61, 21], 2)