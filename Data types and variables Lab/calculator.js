function calculator(fstNum, oper, secndNum) {

    let firstNumber = fstNum;
    let operator = oper;
    let secondNum = secndNum;
    let result = 0;

    switch (operator) {
        case '+': result = firstNumber + secondNum; break;
        case '-': result = firstNumber - secondNum; break;
        case '*': result = firstNumber * secondNum; break;
        case '/': result = firstNumber / secondNum; break;
    }

    console.log(result.toFixed(2))
}
calculator(5,
    '+',
    10
)