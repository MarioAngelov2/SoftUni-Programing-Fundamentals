function travelTime2(data) {

    let result = {};

    for (let line of data) {
        let [country, town, travelCost] = line.split(' > ');
        
        if (!result.hasOwnProperty(country)) {
            result[country] = {};
        }

        if (!result[country].hasOwnProperty(town)) {
            result[country][town] = 0;
        }

        let oldCost = result[country][town];

        if (oldCost > travelCost || oldCost === 0) {
            result[country][town] = travelCost;
        }

        
    }
    let sortCountry = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    });

    for (let [key, townInfo] of sortCountry) {
        let sortedByCost = Object.entries(townInfo).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueA - valueB;
        });

        let buff = `${key} ->`

        for (let [townName, townCost] of sortedByCost) {
            buff += `${townName} -> ${townCost}`
        }
        console.log(buff)
    }
}
travelTime2([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])