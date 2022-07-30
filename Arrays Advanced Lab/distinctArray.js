function distinctArray(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++){
        if (!newArray.includes(arr[i])){
            newArray.push(arr[i]);
        }
    }
console.log(newArray.join(' '))
}
distinctArray([1, 2, 3, 4])