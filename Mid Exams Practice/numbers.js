function numbers(input) {

    let arrOfNumbers = input.split(' ').map(Number);
    let resultArr = [];
    let avg = 0;

    for (let i = 0; i < arrOfNumbers.length; i++) {
        let currentNum = arrOfNumbers[i];
        avg += currentNum / arrOfNumbers.length;

    }

    for (let el of arrOfNumbers) {
        if (el > avg) {
            resultArr.push(el);
        }
    }

    let topFive = resultArr.sort((a, b) => b - a).slice(0, 5);

    if (resultArr <= 1) {
        console.log(`No`)
    } else {
        console.log(topFive.join(' '))
    }
}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')