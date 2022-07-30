function solve(data) {

    let rawPassword = data.shift();
    let correctPassword = '';

    for (let line of data) {
        let token = line.split(' ');
        let command = token[0];

        if (command === 'Done') {
            break;
        }

        switch (command) {

            case 'TakeOdd':
                for (let i = 0; i < rawPassword.length; i++) {
                    if (i % 2 !== 0) {
                        correctPassword += rawPassword[i];
                    }
                }
                rawPassword = correctPassword;
                console.log(rawPassword);
                break;

            case 'Cut':
                let index = Number(token[1]);
                let length = Number(token[2]);

                let stringToRemove = correctPassword.substring(index, index + length);
                correctPassword = correctPassword.replace(stringToRemove, '');
                rawPassword = correctPassword;
                console.log(correctPassword);
                break;

            case 'Substitute':
                let substring = token[1];
                let subtitute = token[2];

                if (!correctPassword.includes(substring)) {
                    console.log(`Nothing to replace!`);
                    continue;
                }

                while (correctPassword.includes(substring)) {
                    correctPassword = correctPassword.replace(substring, subtitute);
                }     
                console.log(correctPassword);           
                break;
        }
    }
    rawPassword = correctPassword;
    console.log(`Your password is: ${rawPassword}`)
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])