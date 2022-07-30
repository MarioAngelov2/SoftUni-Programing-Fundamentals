function bombNumbers(sequenceOfNum, bomb) {

    let result = 0;
    let bombNum = bomb[0];
    let bombPower = bomb[1];

    for (let i = 0; i < sequenceOfNum.length; i++){
        let currentNum = Number(sequenceOfNum[i]);

        if (currentNum === bombNum){
            let index = sequenceOfNum.indexOf(currentNum);
            sequenceOfNum.splice(index,1);
        }
    }
    sequenceOfNum.splice(bombPower,4);
    
    for (let j = 0; j < sequenceOfNum.length; j++) {
        currentNum = Number(sequenceOfNum[j]);
        result += currentNum;
    }

    console.log(sequenceOfNum)
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])