function thePianist(data) {

    let n = data.shift().split('').map(Number);
    let list = {};
    let piece;
    let composer;
    let key;

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = data[i].split('|');

        if (!list.hasOwnProperty(piece)) {
            list[piece] = [];
            list[piece].push(composer, key);
        }
    }

    for (let i = n; i < data.length; i++) {
        let tokens = data[i].split('|');
        let command = tokens[0];

        if (command === 'Stop') {
            break;
        }

        switch (command) {
            case 'Add':
                piece = tokens[1];
                composer = tokens[2];
                key = tokens[3];

                if (!list.hasOwnProperty(piece)) {
                    list[piece] = [];
                    list[piece].push(composer, key);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                } else {
                    console.log(`${piece} is already in the collection!`)
                }
                break;

            case 'Remove':
                piece = tokens[1];

                if (list.hasOwnProperty(piece)) {
                    delete list[piece];
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;

            case 'ChangeKey':
                piece = tokens[1];
                let newKey = tokens[2];

                if (list.hasOwnProperty(piece)) {
                    list[piece].pop(key);
                    list[piece].push(newKey);
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }
    }

    for (let line in list) {
        console.log(`${line} -> Composer: ${list[line][0]}, Key: ${list[line][1]}`)
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])