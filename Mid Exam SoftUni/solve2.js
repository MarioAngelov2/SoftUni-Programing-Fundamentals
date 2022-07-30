function chatLogger(input) {

    let chat = [];
    let command = input.shift();

    while (command !== 'end') {
        let row = command.split(' ');
        let currentCommand = row[0];
        let message = row[1];
        let message2 = row[2];
        let message3 = row[3];
        let message4 = row[4];
        let message5 = row[5];

        if (currentCommand === 'Chat') {
            chat.push(message);
        }
        if (currentCommand === 'Delete') {
            if (!chat.includes(message)) {
                break;
            } else {
                let index = chat.indexOf(message);
                chat.splice(index,1)
            }
        }
        if (currentCommand === 'Edit') {
            if (!chat.includes(message)) {
                break;
            } else {
                let index = chat.indexOf(message);
                chat.splice(index,1,message2);
            }
        }
        if (currentCommand === 'Pin') {
            if (!chat.includes(message)) {
                break;
            } else {
                let index = chat.indexOf(message);
                chat.splice(index,1);
                chat.push(message);
            }
        }
        if (currentCommand === 'Spam') {
            for (let i = 1; i < row.length; i++) {
                chat.push(row[i])
            }
        }
        command = input.shift();
    }
    console.log(chat.join('\n'))
}
chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])

// chatLogger(["Chat John",
// "Spam Let's go to the zoo",
// "Edit zoo cinema",
// "Chat tonight",
// "Pin John",
// "end"])