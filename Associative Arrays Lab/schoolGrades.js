function schoolGrades(data) {

    let result = {};

    for (let line of data) {
        let counter = 0;
        let sum = 0;
        let token = line.split(' ')
        let name = token.shift()

        for (let i = 0; i < token.length; i++) {
            counter++;
            sum += Number(token[i]);
        }

        let avgGrade = sum / counter;

        if (!result.hasOwnProperty(name)) {
            result[name] = avgGrade;
        } else {
            let oldAvgGrade = result[name];
            let newAvgGrade = (oldAvgGrade + avgGrade) / 2;
            result[name] = newAvgGrade;
        }
    }

    let sortetEntries = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })

    for (let [key, value] of sortetEntries) {
        console.log(`${key}: ${value.toFixed(2)}`)
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])