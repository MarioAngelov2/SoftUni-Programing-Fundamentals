function wordsTracker(data) {

    let result = new Map();
    // let result = {};

    let wordsToFind = data.shift().split(' ');

    for (let word of wordsToFind) {
        result.set(word, 0)
        // result[word] = 0;
    }
    for (let word of data) {
        if (result.has(word)) {
            let oldValue = result.get(word)
            result.set(word, oldValue + 1);

            // if (result.hasOwnProperty(word)) {
            //     let oldValue = result[word];
            //     result[word] = oldValue + 1;
            // }
        }
        let sortedResult = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueB - valueA
        })

        // let sortedResult = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        //     return valueB - valueA;
        // })

        for (let [key, value] of sortedResult) {
            console.log(`${key} - ${value}`)
        }
    }
}
    wordsTracker([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])