function main (first, second, third){

    let sumFirstAndSecond = sum (first, second);
    let finalResult = subtract (sumFirstAndSecond, third);
    
    console.log(finalResult);

    function sum (first, second){
        return first + second;
    }

    function subtract (sumFirstAndSecond, third){
        return sumFirstAndSecond - third;
    }

}
main (23,6,10)