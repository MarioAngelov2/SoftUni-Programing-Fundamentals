function activationKeys(data) {

    let rawKey = data.shift();

    for (let line of data) {

        if (line === 'Generate') {
            break;
        }

        let tokens = line.split('>>>');
        let command = tokens[0];

        switch (command) {
            case 'Contains':
                let substring = tokens[1];
                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;

            case 'Flip':
                if (tokens.includes('Upper')) {
                    let startIndex = Number(tokens[2]);
                    let endIndex = Number(tokens[3]);

                    let firstPart = rawKey.slice(0, startIndex);
                    let secondPart = rawKey.slice(endIndex);

                    let lettersToUpperCase = rawKey.substring(startIndex, endIndex);
                    rawKey = rawKey.replace(lettersToUpperCase, '')
                    lettersToUpperCase = lettersToUpperCase.toUpperCase();
                    rawKey = firstPart + lettersToUpperCase + secondPart

                    console.log(rawKey)
                } else if (tokens.includes('Lower')) {
                    let startIndex = Number(tokens[2]);
                    let endIndex = Number(tokens[3]);

                    let firstPart = rawKey.slice(0, startIndex);
                    let secondPart = rawKey.slice(endIndex);

                    let lettersToLowerCase = rawKey.substring(startIndex, endIndex);
                    rawKey = rawKey.replace(lettersToLowerCase, '')
                    lettersToLowerCase = lettersToLowerCase.toLowerCase();
                    rawKey = firstPart + lettersToLowerCase + secondPart

                    console.log(rawKey)
                }
                break;

            case 'Slice':
                let indexToStart = Number(tokens[1]);
                let indexToEnd = Number(tokens[2]);

                let charactersToDelete = rawKey.substring(indexToStart, indexToEnd);
                rawKey = rawKey.replace(charactersToDelete, '');
                console.log(rawKey)
                break;
        }
    }
    console.log(`Your activation key is: ${rawKey}`)
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
