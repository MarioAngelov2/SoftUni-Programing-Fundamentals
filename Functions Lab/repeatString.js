function repeatString (word, counter){

    let result = ''

    for (let i = 0; i < counter; i++){
        result += word;
    }
    return result;

}
console.log(repeatString ("abc", 3))