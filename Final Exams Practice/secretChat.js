function solve(data) {

    let message = data.shift();
    
    for (let line of data) {
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command) {
            case 'ChangeAll':
                let substring = tokens[1];
                let replacement = tokens[2];

                while (message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
                console.log(message)
                break;
            
            case 'Reverse':
                lettersToreverse = tokens[1];
                if (!message.includes(lettersToreverse)) {
                    console.log('error');
                    continue;
                } else {
                    let newWord = lettersToreverse.split('').reverse().join('');
                    message = message.replace(lettersToreverse, '');
                    message += newWord;
                    console.log(message);
                }
                break;

            case 'InsertSpace':
                let index = Number(tokens[1]);
                message = message.split('');

                for (let element of message) {
                    let indexOfLetter = message.indexOf(element);
                    if (indexOfLetter === index) {
                        message.splice(index, 0, ' ')
                    }
                }
                message = message.join('');
                console.log(message)
                break;

            case 'Reveal': 
                console.log(`You have a new text message: ${message}`)
        }
    }
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])