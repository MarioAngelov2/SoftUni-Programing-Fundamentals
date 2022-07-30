function printNelement (input){

    let arr = input;
    let resultArr = [];
    
    let step = Number(arr[arr.length - 1]);

    for (let i = 0; i < arr.length - 1; i += step){
        resultArr.push(arr[i])
    }

    console.log(resultArr.join(" "))
}
printNelement (['5', '20', '31', '4', '20', '2'])