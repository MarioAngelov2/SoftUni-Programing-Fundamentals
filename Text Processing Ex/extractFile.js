function extractFile(input) {

    let extracted = input.split('\\');
    let fileName = extracted[extracted.length - 1].split('.');
    let extension = fileName.pop();
    
    fileName = fileName.join('.');
    
    console.log(fileName)

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')