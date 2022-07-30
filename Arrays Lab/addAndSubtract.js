function addAndSubtract (arr){

    let sumOfNewArr = 0;
    let sumOfOldArr = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        sumOfOldArr += arr[i];
        if (currentNum % 2 === 0){
            currentNum += i;
            sumOfNewArr += currentNum;
        } else {
            currentNum -= i;
            sumOfNewArr += currentNum;
        }
        newArr.push(currentNum);
    }
    console.log(newArr)
    console.log(sumOfOldArr)
    console.log(sumOfNewArr)
}
addAndSubtract([5, 15, 23, 56, 35])