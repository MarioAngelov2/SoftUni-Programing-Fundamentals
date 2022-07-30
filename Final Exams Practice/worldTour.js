function solve(data) {

    let trip = data.shift();
    
    for (let line of data) {
        let tokens = line.split(':');
        let command = tokens[0];

        switch(command) {
            case 'Add Stop':
                let indexToInsert = Number(tokens[1]);
                let newDestination = tokens[2];

                if (indexToInsert >= 0 && indexToInsert <= trip.length) {
                    trip = trip.slice(0, indexToInsert) + newDestination + trip.slice(indexToInsert);
                }
                console.log(trip);
                break;

            case 'Remove Stop':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (startIndex >= 0 && startIndex <= trip.length && endIndex >= 0 && endIndex <= trip.length) {
                    trip = trip.slice(0, startIndex) + trip.slice(endIndex);
                }
                console.log(trip);
                break;

            case 'Switch':
                let oldString = tokens[1];
                let newString = tokens[2];

                if (trip.includes(oldString)) {
                    trip = trip.replace(oldString, newString);
                }
                console.log(trip)
                break;

            case 'Travel':
                console.log(`Ready for world tour! Planned stops: ${trip}`)
                break;
        }
    }

}
solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])