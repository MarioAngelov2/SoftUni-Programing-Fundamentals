function palindromeIntegers (arr){

    for (let element of arr) {
        let currentEl = String(element);
        let reversed = String(element).split('').reverse().join('');

        if (currentEl === reversed){
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
palindromeIntegers([123,323,421,121])