function commonElements (arr1, arr2){

    let resultArray = []
    let commonElement = '';

    for (let i = 0; i < arr1.length; i++){
        let currentElementArr1 = arr1[i];
        for(let j = 0; j < arr2.length; j++){
            let currentElementArr2 = arr2[j];
            if (currentElementArr1 === currentElementArr2){
                commonElement = `${currentElementArr1} ${currentElementArr2}`;
                resultArray.push(commonElement)
            }
        }
    }
    console.log(resultArray.join('\n'))
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])