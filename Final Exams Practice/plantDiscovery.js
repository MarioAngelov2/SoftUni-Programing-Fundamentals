function solve(data) {

    let n = data.shift().split().map(Number);
    let plantsList = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = data[i].split('<->');
        rarity = Number(rarity);

        if (!plantsList.hasOwnProperty(plant)) {
            plantsList[plant] = {};
            plantsList[plant]['rarity'] = rarity;
            plantsList[plant]['rating'] = [];
            plantsList[plant]['counter'] = 0;
        }
    }

    for (let i = n; i < data.length; i++) {
        let tokens = data[i].split(': ');
        let command = tokens[0];

        if (command === 'Exhibition') {
            break;
        }

        let [plant, rating] = tokens[1].split(' - ');
        rating = Number(rating);

        switch (command) {
            case 'Rate':
                if (plantsList.hasOwnProperty(plant)) {
                    plantsList[plant]['rating'].push(rating);
                    plantsList[plant]['counter']++;
                } else {
                    console.log('error');
                }
                break;

            case 'Update':
                let newRarity = rating;
                if (plantsList.hasOwnProperty(plant)) {
                    plantsList[plant]['rarity'] = newRarity;
                } else {
                    console.log('error');
                }
                break;

            case 'Reset':
                if (plantsList.hasOwnProperty(plant)) {
                    plantsList[plant]['rating'] = [];
                    plantsList[plant]['counter'] = 0;
                } else {
                    console.log('error');
                }
                break;
        }
    }
    console.log(`Plants for the exhibition:`)

    for (let key in plantsList) {
        let average = 0;
    }

}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
