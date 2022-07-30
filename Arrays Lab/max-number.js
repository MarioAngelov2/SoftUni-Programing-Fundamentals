function maxNumber(input) {
  let arrayOfElements = input;
  let arrL = arrayOfElements.length;
  let resultArr = [];

  for (let i = 0; i < arrL; i++) {
    let currentNum = arrayOfElements[i];
    let isTopInteger = true;

    for (let j = i + 1; j < arrL; j++) {
      let nextElement = arrayOfElements[j];
      if (nextElement >= currentNum) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      resultArr.push(currentNum);
    }
  }
  console.log(resultArr.join(" "))
}

maxNumber([1, 4, 3, 2,]);
