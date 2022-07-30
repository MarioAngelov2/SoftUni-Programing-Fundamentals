function magicSum (arr, num){

    let arrOfValidPairs = [];
    let validPair = '';

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === num){
                validPair = `${arr[i]} ${arr[j]}`
                arrOfValidPairs.push(validPair);
            }
        }
    }
    console.log(arrOfValidPairs.join('\n'))
}
magicSum ([1, 7, 6, 2, 19, 23],8)