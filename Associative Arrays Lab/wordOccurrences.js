function wordOccurrences(data) {

    let result = new Map();

    for (let line of data) {
        let word = line.split(' ');
        let counter = 0;

        if (!result.has(word)) {
            counter++;
            result.set(word, counter)
        }

        console.log(result)
    }
    

}
wordOccurrences([
"Here", 
"is", 
"the", 
"first", 
"sentence", 
"Here", "is", 
"another", 
"sentence", 
"And", 
"finally", 
"the", 
"third", 
"sentence"
])