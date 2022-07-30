function addAndSubstract(arr1, arr2) {
  let firstArray = arr1;
  let secondArray = arr2;
  let firstL = firstArray.length;
  let secondL = secondArray.length;

  for (let i = 0; i < firstL; i++) {
    let firstArrElement = firstArray[i];
    for (let j = 0; j < secondL; j++) {
      let secondElement = secondArray[j];
      if (firstArrElement === secondElement) {
        console.log(secondElement);
      }
    }
  }
}
addAndSubstract(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
