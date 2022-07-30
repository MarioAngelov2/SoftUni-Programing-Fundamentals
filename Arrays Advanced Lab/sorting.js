function sorting(arr) {

    let outputArray = [];
    let descendingArr = arr.sort((a,b) =>{ 
        return b - a;
    })
    
    for (let i = 0; i < descendingArr.length; i++){
        if (i === descendingArr.length - 1){
            descendingArr.push(descendingArr[i]);
        } else {
            outputArray.push(descendingArr[i]);
            let lastElement = descendingArr.pop();
            outputArray.push(lastElement);
        }
    }

    console.log(outputArray.join(' '))

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 12])