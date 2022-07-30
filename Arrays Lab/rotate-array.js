function rotateAarray (arr){

    let newArr = [];
    let rotations = Number(arr[arr.length - 1]);

    for (let i = 0; i < rotations; i++){
        let elementToMove = arr.shift();
        newArr.push(elementToMove)
    }
    
    console.log(newArr.join(' '))

}
rotateAarray (['1', '2', '3', '4', '2'])
rotateAarray (['Banana', 'Orange', 'Coconut', 'Apple', '15'])