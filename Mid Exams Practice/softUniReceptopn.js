function softUniReceptopn(arr) {

    let employee1 = Number(arr[0]);
    let employee2 = Number(arr[1]);
    let employee3 = Number(arr[2]);
    let studentsCount = Number(arr[3]);

    let hourCounter = 0;
    let breakTimeCounter = 0;

    while (studentsCount > 0){
        hourCounter++;
        let checkedStPerHour = employee1 + employee2 + employee3;
        studentsCount -= checkedStPerHour;
        if (hourCounter % 4 === 0){
            breakTimeCounter++;
        }
        if (studentsCount < 0){
            studentsCount = 0;
            break;
        }
    }

    let totalTimeNeeded = breakTimeCounter + hourCounter;

    console.log(`Time needed: ${totalTimeNeeded}h.`)
    // console.log(studentsCount)

}
softUniReceptopn(['5','6','4','20'])