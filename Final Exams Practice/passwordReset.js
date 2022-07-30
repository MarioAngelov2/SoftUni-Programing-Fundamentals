function passwordReset(data) {

    let password = data.shift();
    let newPass = '';

    for (let line of data) {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Done') {
            break;
        }

        switch (command) {
            case 'TakeOdd':
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword.push(password[i]);
                    }
                }
                console.log(newPassword.join(''));
                break;

            case 'Cut':
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);

                newPassword.splice(index, length);
                console.log(newPassword.join(''));
                break;

            case 'Substitute':
                let substring = tokens[1]
                let subtitute = tokens[2]
                passAsString = newPassword.join('');
                
                if (!passAsString.includes(substring)){
                    console.log(`Nothing to replace!`);
                    continue;
                } 
                while (passAsString.includes(substring)) {
                    passAsString = passAsString.replace(substring, subtitute);
                }
                newPass = passAsString;
                console.log(passAsString)
                    break;
        }
    }
    console.log(`Your password is: ${newPass}`)
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

    passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
    
