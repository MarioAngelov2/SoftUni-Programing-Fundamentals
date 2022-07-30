function charactersInRange (char1, char2){

    let firstCharacter = Math.min(char1.charCodeAt(0), char2.charCodeAt(0)); //преобразуване от ASCII елемент към число
    let secondCharacter = Math.max(char1.charCodeAt(0), char2.charCodeAt(0)); 

    let charsInRangeArray = [];

    for (let current = firstCharacter + 1; current < secondCharacter; current++){
        let currentChar = String.fromCharCode(current)  //преобразуване от число към ASCII елемент
        charsInRangeArray.push(currentChar);
    }

    console.log(charsInRangeArray.join(' '))

}
charactersInRange ('#',':')