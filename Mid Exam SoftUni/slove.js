function friendList(input) {

    let userNames = input.shift().split(', ');
    let command = input.shift();
    let blackListedCount = 0;
    let lostCount = 0;

    while (command !== 'Report') {
        let row = command.split(' ')
        let currentCommand = row[0];
        let name = row[1];
        let newName = row[2];

        if (currentCommand === 'Blacklist') {
            if (userNames.includes(name)) {
                blackListedCount++;
                let currentName = name;
                let index = userNames.indexOf(name)
                name = 'Blacklisted';
                userNames.splice(index, 1, name)
                console.log(`${currentName} was blacklisted.`)
            } else {
                console.log(`${name} was not found.`)
            }
        }
        if (currentCommand === 'Error') {
            if (!userNames[name] === 'Lost') {
                break;
            } else {
                if (userNames[name] === 'Lost') {
                } else {
                    let indexNum = Number(name)
                    if (indexNum <= 0 || indexNum <= userNames.length) {
                        if (userNames[indexNum] !== 'Blacklisted') {
                            lostCount++;
                            let currentName = userNames[indexNum];
                            let index = userNames.indexOf(currentName)
                            name = 'Lost';
                            userNames.splice(index, 1, name);
                            console.log(`${currentName} was lost due to an error.`)
                        }
                    }
                }
            }
        }
        if (currentCommand === 'Change') {
            let indexNum = Number(name)
            if (indexNum <= 0 || indexNum < userNames.length) {
                let currentName = userNames[indexNum]
                let index = userNames.indexOf(currentName)
                userNames.splice(index, 1, newName);
                console.log(`${currentName} changed his username to ${newName}.`)
            }
        }

        command = input.shift();
    }
    console.log(`Blacklisted names: ${blackListedCount}`);
    console.log(`Lost names: ${lostCount}`)
    console.log(userNames.join(' '))

}
// friendList(["Mike, John, Eddie",
// "Blacklist Mike",
// "Error 0",
// "Report"])

// friendList(["Mike, John, Eddie, William",
// "Error 3",
// "Error 3",
// "Change 0 Mike123",
// "Report"])

friendList(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])