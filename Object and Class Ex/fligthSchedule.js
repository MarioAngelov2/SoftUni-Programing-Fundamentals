function fligthSchedule(data) {

    class Flight {
        constructor(flyNumber, destination) {
            this.flyNumber = flyNumber;
            this.destination = destination;
            this.status = 'Ready to fly';
        }
    }

    for (let flightInfo of data[0]) {
        let tokens = flightInfo.split(' ');
        let flightNumber = tokens.shift();
        let destination = tokens.join(' ')
        
        console.log(flightInfo)
    }

}
fligthSchedule([[
'WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])