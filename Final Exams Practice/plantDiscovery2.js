function plantDiscovery(data) {

    let numberOfPlants = Number(data.shift());
    let plantList = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [plant, rarity] = data[i].split('<->');
        rarity = Number(rarity);

        plantList[plant] = { rarity, rating: []};
    }

    for (let i = numberOfPlants; i < data.length; i++) {
        if (data[i] === 'Exhibition') {
            break;
        }

        let tokens = data[i].split(': ');
        let command = tokens[0];
        let plantInfo = tokens[1].split(' - ');
        let givenPlant;

        switch (command) {
            case 'Rate':
                givenPlant = plantInfo[0];
                let givenRating = Number(plantInfo[1]);

                if (plantList[givenPlant]) {
                    plantList[givenPlant].rating.push(givenRating);

                } else {
                    console.log(`error`);
                }
                break;

            case 'Update':
                givenPlant = plantInfo[0];
                let newRarity = Number(plantInfo[1]);

                if (plantList[givenPlant]) {
                    plantList[givenPlant].rarity = newRarity;
                } else {
                    console.log(`error`);
                }
                break;

            case 'Reset':
                givenPlant = plantInfo[0];

                if (plantList[givenPlant]) {
                    plantList[givenPlant].rating = [];
                } else {
                    console.log(`error`);
                }
                break;
        }
    }
    console.log(`Plants for the exhibition:`);

    for (let plant of Object.keys(plantList)) {
        console.log(`- ${plant}; Rarity: ${plantList[plant].rarity}; Rating: ${avgRating(plantList[plant].rating).toFixed(2)}`)
    }

    function avgRating(arr) {
        if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}
plantDiscovery(["3",
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
