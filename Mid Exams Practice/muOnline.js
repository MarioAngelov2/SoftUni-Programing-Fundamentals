function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let dungeon = input.split('|');
    let counter = 0;
    let oldHealth = 0;
    
    for (let i = 0; i < dungeon.length; i++) {
        counter++;
        let row = dungeon[i].split(' ');
        let command = row[0];
        let number = Number(row[1]);
        
        if (command === 'potion') {
            oldHealth = health;
            oldHealth += number;
            if (oldHealth > 100) {
                oldHealth -= number;
            }
            console.log(`You healed for ${number} hp.`)
            console.log(`Current health: ${oldHealth} hp.`)
        }

        if (command === 'chest') {
            console.log(`You found ${number} bitcoins.`)
        } if (command !== 'chest' || command !== 'potion') {
            health -= number;
            if (oldHealth >= 0) {
                console.log(`you slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${counter}`)
            }
        }
        
        
    }


}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")