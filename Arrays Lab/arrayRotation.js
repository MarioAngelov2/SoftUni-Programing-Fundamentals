function arrayRotation(arr, numOfRotations) {

    for (let i = 0; i < numOfRotations; i++){
        let element = arr.shift();
        arr.push(element)
    }
    console.log(arr.join(' '))
}
arrayRotation([51, 47, 32, 61, 21], 2)