function solve(data) {

    let resultObj = {};
  
    while (data.length !== 0) {

        let resource = data.shift()
        let quantity = Number(data.shift())

        if (!resultObj.hasOwnProperty(resource)) {
            resultObj[resource] = quantity;
        } else {
            resultObj[resource] += quantity;
        }
    }

    let entries = Object.entries(resultObj);

    for (let [resource, quantity] of entries) {
        console.log(`${resource} -> ${quantity}`);
    }

}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])