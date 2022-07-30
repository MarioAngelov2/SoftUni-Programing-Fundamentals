function worldTour2(data) {

    let stops = data.shift();

    for (let line of data) {

        if (line === 'Travel') {
            break;
        }
        let tokens = line.split(':');
        let command = tokens[0];

        switch (command) {
            case 'Add Stop':
                let index = Number(tokens[1]);
                let stopToAdd = tokens[2];

                if (index > 0 && index <= stops.length) {
                    let startToInsert = stops.substring(0, index);
                    let endToInsert = stops.substring(index);
                    stops = startToInsert + stopToAdd + endToInsert;
                    console.log(stops)
                }
                break;

            case 'Remove Stop':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (startIndex > 0 && startIndex <= stops.length && endIndex > 0 && endIndex <= stops.length) {
                    let elementToRemove = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(elementToRemove, '');
                    console.log(stops)
                }
                break;

            case 'Switch':
                let oldDestination = tokens[1];
                let newDestination = tokens[2];

                if (stops.includes(oldDestination)) {
                    stops = stops.replace(oldDestination, newDestination);
                    console.log(stops)
                }
                break;
        }

    }
console.log(`Ready for world tour! Planned stops: ${stops}`)
}
worldTour2(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])