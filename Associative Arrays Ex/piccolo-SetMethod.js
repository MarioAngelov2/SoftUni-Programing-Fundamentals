function piccolo(data) {

    let result = new Set()

    for (let line of data) {
        let [command, carNumber] = line.split(', ');
        
        switch(command) {
            case 'IN':
                result.add(carNumber)
                break;
            
            case 'OUT':
                result.delete(carNumber)
                break;
        }
    }

    if (result.size <= 0) {
        console.log(`Parking Lot is Empty`)
    }

    let sortedParking = Array.from(result.values()).sort();
        
    for (let carNumber of sortedParking) {
        console.log(carNumber)
    }
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