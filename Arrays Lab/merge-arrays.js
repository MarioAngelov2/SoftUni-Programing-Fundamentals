function mergeArrays(arr1, arr2) {
  let firstArr = arr1;
  let secondArr = arr2;
  let firstArrayL = firstArr.length;
  let resultArr = [];

  for (let i = 0; i < firstArrayL; i++) {
    let resultArrElement;
    if (i % 2 === 0) {
      resultArrElement = Number(firstArr[i]) + Number(secondArr[i]);
    } else {
      resultArrElement = firstArr[i] + secondArr[i];
    }
    resultArr.push(resultArrElement);
  }

  console.log(resultArr.join(' - '));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
