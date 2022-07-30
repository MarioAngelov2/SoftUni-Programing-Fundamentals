function numberModification (num){

    let numToString = num.toString()
    let newArr = [];
    let sum = 0;

    for(let i = 0; i < numToString.length; i++){
        newArr.push(numToString[i])
    }

    while (sum < 5){
        // sum = 0;
        for (let i = 0; i < numToString.length; i++){
            let currentDigit = Number(numToString[i]);
            sum += currentDigit
        }
        sum /= numToString.length;
        if (sum <= 5){
            newArr.push(9);
        } else{
            break;
        }
    }
    console.log(newArr.join(''))
    
}
numberModification (101)