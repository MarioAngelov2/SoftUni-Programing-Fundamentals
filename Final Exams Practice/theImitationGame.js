function theImitationGame(data) {

    let message = data.shift();

    for (let line of data) {
        if (line === 'Decode') {
            break;
        }
        let tokens = line.split('|');
        let command = tokens[0];

        switch (command) {
            case 'ChangeAll':
                let elToReplace = tokens[1];
                let replacement = tokens[2];

                while (message.includes(elToReplace)) {
                    message = message.replace(elToReplace, replacement);
                }
                break;

            case 'Insert':
                let index = Number(tokens[1]);
                let valueToAdd = tokens[2];

                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index);
                message = firstPart + valueToAdd + secondPart;
                break;

            case 'Move':
                let numberOfLetters = Number(tokens[1]);
                let firstLetters = message.slice(0, numberOfLetters);
                let secondLetters = message.slice(numberOfLetters);
                message = secondLetters + firstLetters;
                break;
        }

    }

    console.log(`The decrypted message is: ${message}`)
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)