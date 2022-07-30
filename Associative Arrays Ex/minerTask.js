function minerTask(data) {

    let result = {};
    let resource;
    let quantity;

    for (let i = 0; i < data.length; i++) {
        let currentEl = data[i].split(' ');

        if (i % 2 === 0) {
            if (!result.hasOwnProperty(currentEl)) {
                resource = currentEl;
                result[resource] = 0;
            }
        } else {
                currentEl = Number(currentEl);
            if (!result[resource].hasOwnProperty(currentEl)) {
                quantity = currentEl;
                result[resource] = quantity;
                
            }
        }
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`)
    } 
}
// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )