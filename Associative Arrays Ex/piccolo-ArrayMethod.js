function piccolo(data) {

    let result = [];

    for (let line of data) {
        let [state, carNumber] = line.split(', ');
        
        if (state === 'IN') {
            result.push(carNumber);
        } else if (state === 'OUT') {
            let index = data.indexOf(carNumber);
            result.splice(index,1);
        } 
        if (result.length <= 0) {
            console.log(`Parking Lot is Empty`)
        }
    }

    let sortedCars = result.sort((a,b) => {
        return a.localeCompare(b)
    })

    console.log(sortedCars.join('\n'))
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
