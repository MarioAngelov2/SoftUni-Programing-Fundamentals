function maxNumber (input){

    let arr = input;
    let arrLength = arr.length;
    let resultArr = [];

    for (let i = 0; i < arrLength; i++){
        let currentNumber = arr[i];

        if (currentNumber > i){
            let topInteger = currentNumber;
            resultArr.join(topInteger)
        }
    }
    console.log(resultArr)
}
maxNumber([1, 4, 3, 2])