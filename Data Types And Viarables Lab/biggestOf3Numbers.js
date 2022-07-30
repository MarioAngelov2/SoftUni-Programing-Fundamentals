function biggestOf3Numbers (num1, num2, num3){

    if (num1 > num2 && num1 > num3){
        console.log(num1)
    } 
    if (num2 > num1 && num2 > num3){
        console.log(num2)
    } 
    if (num3 > num1 && num3 > num2){
        console.log(num3)
    }

}
biggestOf3Numbers (5,
    -2,
    7
    )