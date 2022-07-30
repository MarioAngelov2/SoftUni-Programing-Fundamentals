function commonElements (arr1, arr2){

    let resultArray = []
    let commonElement = '';

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i]){
            commonElement = `${arr1[i]} ${arr2[i]}`
            resultArray.push(commonElement)
        }
    }
    console.log(resultArray.join('\n'))
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])