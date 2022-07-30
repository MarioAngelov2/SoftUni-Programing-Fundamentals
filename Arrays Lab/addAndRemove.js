function addAndRemove (arr){

    let initialNum = 1;
    let currentNum = 0;
    let newArr = [];
    let arrL = arr.length;
    
    for (let i = 0; i < arrL; i++){
        let currentCommand = arr[i];
        currentNum += initialNum;

        if (currentCommand === "add"){
            newArr.push(currentNum);
        }

        if (currentCommand === "remove"){
            newArr.pop(currentNum);
        }
    }

    if (newArr.length === 0){
        console.log('Empty')
    } else {
        console.log(newArr.join(' '))
    }
}
addAndRemove (['add', 'add', 'remove', 'add', 'add'])