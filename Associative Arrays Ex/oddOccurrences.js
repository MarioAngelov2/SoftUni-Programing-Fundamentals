function solve (data) {

    let result = {};
    let words = data.split(' ');
    
    for (let word of words) {
        word = word.toLowerCase();
        if (!result.hasOwnProperty(word)) {
           result[word] = 0;
        }

        let oldValue = result[word];
        result[word] = oldValue + 1;
    }

    let filterResult = Object.entries(result).filter(([key, value]) => {
        return value % 2 !== 0;
    });

    let buff = '';

    for (let [key, value] of filterResult) {
        buff += key + ' ';
    }
    
console.log(buff)

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')