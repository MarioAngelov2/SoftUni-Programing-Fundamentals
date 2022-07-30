function solve (arr){

  let maxNumber = Number.MIN_SAFE_INTEGER;
  let newArr = [];

    for (let number of arr) {   //взимаме всеки стринг от масив
        if (number >= maxNumber){
            maxNumber = number;
            newArr.push(maxNumber);
        }
    }
console.log(newArr.join(' '))
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])