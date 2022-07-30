function secretChat2(data) {

    let message = data.shift();
    
    for (let line of data) {

        if (line === 'Reveal') {
            break;
        }

        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command) {
            case 'ChangeAll':
                let elToReplace = tokens[1];
                let elToAdd  = tokens[2];

                if (message.includes(elToReplace)) {
                    while (message.includes(elToReplace)) {
                        message = message.replace(elToReplace, elToAdd)
                    }
                    console.log(message);
                }
                break;

            case 'Reverse':
                let lettersToreverse = tokens[1];

                if (message.includes(lettersToreverse)) {
                    let newMessage = lettersToreverse.split('').reverse().join('')
                    message = message.replace(lettersToreverse, '');
                    message += newMessage
                    console.log(message);
                } else {
                    console.log(`error`);
                }
                break;

            case 'InsertSpace':
                let index = Number(tokens[1]);
                let firstPart = message.slice(0, index);
                let secondPart = message.slice(index);
                message = firstPart + ' ' + secondPart;
                console.log(message)
                break;
        }
    }

    console.log(`You have a new text message: ${message}`)

}
secretChat2([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])