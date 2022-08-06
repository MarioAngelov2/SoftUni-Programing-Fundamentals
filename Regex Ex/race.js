function solve(data) {

    let racerName = data.shift().split(', ');
    let racersList = {};

    for (let name of racerName) {
        racersList[name] = 0;
    }

    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    let line = data.shift();

    while (line !== 'end of race') {

        let racer = line.match(namePattern).join('')
        let distance = line.match(distancePattern).map(Number);

        let totalDistance = 0;

        for (let x of distance) {
            totalDistance += x;
        }

        if (racersList[racer] !== undefined) {
            racersList[racer] += totalDistance;
        }

        line = data.shift();
    }

    let result = Object.entries(racersList).sort((a, b) => b[1] - a[1]);

    if (result[0]) {
        console.log(`1st place:${result[0][0]}`)
    }
    if (result[1]) {
        console.log(`2nd place:${result[1][0]}`)
    }
    if (result[2]) {
        console.log(`3rd place:${result[2][0]}`)
    }

 
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])