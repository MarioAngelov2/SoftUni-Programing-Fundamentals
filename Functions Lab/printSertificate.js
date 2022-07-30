function printSertificate (grade, nameArr){

    printHeader();
    printName(nameArr);
    formatGrade(grade);

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
      }
      
      function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
      }
      
      function formatGrade (num){

        let grade = ''
        let formatedGrade = num.toFixed(2)
    
        if (Math.floor(formatedGrade) < 3.00){
            grade = 'Fail';
            formatedGrade = 2;
        } else if (formatedGrade < 3.50){
            grade = 'Poor';
        } else if (formatedGrade >= 3.50 && formatedGrade < 4.50){
            grade = 'Good';
        } else if (formatedGrade >= 4.50 && formatedGrade <= 5.50){
            grade = 'Very good';
        } else if (formatedGrade >= 5.50){
            grade = 'Excellent'
        }
    
        console.log(`${grade} (${formatedGrade})`)
    }
}

printSertificate (5.25, ['Peter', 'Carter']);
  