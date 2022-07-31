function pirates(data) {

    let obj = {};
    let command = data.shift();

    while (command !== 'Sail') {

        let tokens = command.split('||');
        let [city, population, gold] = tokens;
        population = Number(population);
        gold = Number(gold);

        obj[city] = { population, gold };

        command = data.shift();
    }

    for (let line of data) {
        if (line === 'End') {
            break;
        }
        let tokens = line.split('=>');
        let command = tokens[0];
        let town;

        switch (command) {

            case 'Plunder':
                town = tokens[1];
                let peopleKilled = Number(tokens[2]);
                let goldStolen = Number(tokens[3]);

                obj[town].population -= peopleKilled;
                obj[town].gold -= goldStolen;
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`)

                if (obj[town].population === 0 || obj[town].gold === 0) {
                    delete obj[town];
                    console.log(`${town} has been wiped off the map!`)
                }
                break;

            case 'Prosper':
                town = tokens[1];
                let prosperAmount = Number(tokens[2]);

                if (prosperAmount < 0) {
                    console.log(`Gold added cannot be a negative number!`)
                } else {
                    obj[town].gold += prosperAmount;
                    console.log(`${prosperAmount} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`)
                }
                break;
        }
    }

    let cityCount = Object.entries(obj).length;
    if (cityCount === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`)
    }

    for (let town of Object.keys(obj)) {
        console.log(`${town} -> Population: ${obj[town].population} citizens, Gold: ${obj[town].gold} kg`);
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
