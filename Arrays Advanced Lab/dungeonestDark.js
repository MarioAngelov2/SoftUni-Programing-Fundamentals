function dungeonestDark(input) {
    
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let dungeonRooms = input.shift().split('|');

    for (let i = 0; i < dungeonRooms.length; i++) {
        let currentRow = dungeonRooms[i].split(' ');
        roomCounter++;

        if (currentRow[0] === 'potion') {
            let healCount = 0;
            let oldHealth = 0;
            oldHealth = health;
            healCount = Number(currentRow[1]);
            health += Number(currentRow[1]);
            if (health > 100) {
                healCount = 100 - oldHealth
                health = 100;
            }
            console.log(`You healed for ${healCount} hp.`)
            console.log(`Current health: ${health} hp.`)

        } else if (currentRow[0] === 'chest') {
            coins += Number(currentRow[1]);
            console.log(`You found ${currentRow[1]} coins.`)
        } else {
            health -= currentRow[1];

            if (health > 0) {
                console.log(`You slayed ${currentRow[0]}.`)
            } else {
                console.log(`You died! Killed by ${currentRow[0]}.`)
                console.log(`Best room: ${roomCounter}`)
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`) 
        console.log(`Coins: ${coins}`) 
        console.log(`Health: ${health}`)
    }

}
dungeonestDark (["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log(`----------------------------`)
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])