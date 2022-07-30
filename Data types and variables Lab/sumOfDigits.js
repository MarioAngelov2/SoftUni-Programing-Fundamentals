function sumOfDigits (input){

    let numberAsString = input.toString();
    let sumOfDigits = 0;

    for (let index = 0; index <numberAsString.length; index++){
        let currentNum = Number(numberAsString[index])
        sumOfDigits += currentNum
    }
    console.log(sumOfDigits)

}
sumOfDigits(245678)