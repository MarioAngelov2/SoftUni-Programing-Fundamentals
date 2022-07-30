function factorialDivision(num1, num2) {

    let result1 = 1;
    let result2 = 1;

   for (let i = 1; i <= num1; i++){
       result1 *= i;
   }
   
   for (let j = 1; j <= num2; j++){
       result2 *= j;
   }

   let result = result1 / result2;

   console.log(result.toFixed(2))

}
factorialDivision(6,2)