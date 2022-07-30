function digitsWithWords (input){

    let num
  
    switch (input){
        case 'nine': num = 9; break;
        case 'two': num = 2; break;
        case 'zero': num = 0; break;
    }

    console.log(`${num}`)
}
digitsWithWords('zero')