function spiceMustFlow (input){

    let startingYield = input
    let minedSpice = 0;
    let days = 0;

    while (startingYield >= 100){
        days++;
        minedSpice += startingYield
        startingYield -= 10;
        minedSpice -= 26;

        if (startingYield < 100){
            minedSpice -= 26;
            break;
        }
    }
    console.log(`${days} 
${minedSpice} `)

}
spiceMustFlow (450)