function oddAndEvenSum (number){

    let numToStr = String(number)
    let oddSum = 0;
    let evenSum = 0;

   for (let i = 0; i < numToStr.length; i++){
       let currentNum = Number(numToStr[i])

       if (currentNum % 2 === 0){
        evenSum += currentNum;
       } else {
        oddSum += currentNum;
       }
   }
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum (3495892137259234)