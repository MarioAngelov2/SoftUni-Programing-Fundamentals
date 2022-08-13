function solve(data) {

    let password = data.shift();
    let rawPass = '';

    let line = data.shift();

    while (line !== 'Done') {

        let splitted = line.split(' ');
        let command = splitted[0];

        if (command === 'TakeOdd') {
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    rawPass += password[i];
                }
            }
            password = rawPass;

            console.log(password);

        } else if (command === 'Cut') {
            let index = Number(splitted[1]);
            let length = Number(splitted[2]);

            let replacment = password.substring(index, index + length);
            password = password.replace(replacment, '');
            console.log(password);
        } else if (command === 'Substitute') {
            let substring = splitted[1];
            let substitute = splitted[2];

            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password);
            } else {
                console.log('Nothing to replace!')
            }
        }
        line = data.shift();
    }
    console.log(`Your password is: ${password}`)
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
