01. Computer Store
function build(parts) {
    let totalNoTax = 0;
    let tax = 0;

    let command = parts.shift();
    while (command !== "special" && command !== "regular") {
        const currPrice = Number(command);
        if(currPrice<=0){
            console.log("Invalid price!");
            command = parts.shift();
            continue;
        }
        const currTax = currPrice * 0.2;

        totalNoTax += currPrice;
        tax += currTax;

        command = parts.shift();
    }

    let totalPrice = totalNoTax + tax;

    if (command === 'special') {
        totalPrice -= totalPrice * 0.1;
    }

    return totalPrice>0 ?
    `Congratulations you've just bought a new computer!\nPrice without taxes: ${totalNoTax.toFixed(2)}$\nTaxes: ${tax.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
    : "Invalid order!"
}

02. The Lift

function demo(input) {

    let passengers = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    let wagonsLength = wagons.length;

    for (let i = 0; i < wagonsLength; i++) {

        let currentWagon = wagons[i];

        while (currentWagon !== 4) {
            currentWagon++;
            passengers--;
            if (passengers === 0) {
                break;
            }
        }
        wagons[i] = currentWagon;
        if (passengers === 0) {
            break;
        }
    }

    let isFull = wagons.filter(w => w !== 4);

    if (isFull.length === 0 && passengers === 0) {
        console.log(wagons.join(' '));
    } else if (isFull.length !== 0) {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    } else {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(' '));
    }
}

03. Memory Game

function demo(input) {

    let passengers = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    let wagonsLength = wagons.length;

    for (let i = 0; i < wagonsLength; i++) {

        let currentWagon = wagons[i];

        while (currentWagon !== 4) {
            currentWagon++;
            passengers--;
            if (passengers === 0) {
                break;
            }
        }
        wagons[i] = currentWagon;
        if (passengers === 0) {
            break;
        }
    }

    let isFull = wagons.filter(w => w !== 4);

    if (isFull.length === 0 && passengers === 0) {
        console.log(wagons.join(' '));
    } else if (isFull.length !== 0) {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    } else {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(' '));
    }
}

01. SoftUni Reception

((input) => {
    const fEC = +input[0];
    const sEC = +input[1];
    const tEC = +input[2];
    let totalStudents = +input[3];

    const totalStudentsPerHours = (fEC + sEC + tEC);
    let hours = 1;

    while (totalStudents > 0) {

        if(hours % 4 !== 0 && hours > 0) {
            totalStudents -= totalStudentsPerHours;
        } else if(hours === 0) {
            totalStudents -= totalStudentsPerHours;
        }
        

        hours++;
    }

    hours--
    console.log(`Time needed: ${(hours)}h.`);
})

02. Array Modifier

((input) => {

    let arr = input.slice()[0].split(' ');

    input.slice(1, input.length - 1).forEach((cmd) => {
        let [command, indexOne, indexTwo] = cmd.split(' ');
        indexOne = +(indexOne);
        indexTwo = +(indexTwo);

        if (command === 'swap') {
            if (checkIndexes(indexOne, indexTwo, arr)) {
                let temp = arr[indexOne];
                arr[indexOne] = arr[indexTwo];
                arr[indexTwo] = temp;
            }
        } else if (command === 'multiply') {
            if(checkIndexes(indexOne, indexTwo, arr)) {
                arr[indexOne] = arr[indexOne] * arr[indexTwo];
            }
        } else if (command === 'decrease') {
            arr = arr.map((x) => x -= 1);
        }
    });

    console.log(arr.join(', '));

    function checkIndexes(iOne, iTwo, arr) {
        return (iOne >= 0 && iOne <= arr.length - 1) && (iTwo >= 0 && iTwo <= arr.length - 1);
    }

})

03. Numbers

((input) => {
    console.log(
        input[0].split(' ')
            .map(Number)
            .reduce((acc, curr, index, arr) => {
                const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
                if (curr > avg) { acc.push(curr); }
                return acc;
            }, [])
            .sort((a, b) => b - a)
            .slice(0, 5)
            .concat(['fillER'])
            .reduce((acc, curr, index, arr) => {
                arr = arr.filter((x) => x !== 'fillER')
                acc = arr.length >= 1 ? arr.join(' ') : 'No';
                return acc;
            }, '')
    );
})

01. Counter-Strike

function solve(input){
    let energy = +input.shift();
    let count = 0;
    let distance = +input.shift();
    while(!isNaN(distance)){
        if(distance>energy){
            return `Not enough energy! Game ends with ${count} won battles and ${energy} energy`;
        }
        energy-=distance;
        count++;
        if(count%3===0){
            energy+=count;
        }
        distance = +input.shift();
    }
    return `Won battles: ${count}. Energy left: ${energy}`;
}

02. Shoot for the Win

function solve(input){
    let targets = input.shift().split(" ").map(Number);
    let index = +input.shift();
    while(!isNaN(index)){
        if(index>-1&&index<targets.length&&targets[index]!==-1){
            targets = targets.map((target, i,arr)=>{
                if(i===index){
                    return -1;
                }
                if(target===-1){
                    return target;
                }
                return target <= arr[index]
                    ? target += arr[index]
                    : target -= arr[index]
            });
        }
        index = +input.shift();
    }

    return `Shot targets: ${targets.filter(t=>t===-1).length} -> ${targets.join(" ")}`
}

03. Moving Target

function solve(input) {

    function isIndexValid(arr, index) {
        if (index < 0 || index >= arr.length) {
            return false;
        }
        return true;
    }

    let targets = input.shift().split(" ").map(Number);
    let line = input.shift();
    const map = {
        'Shoot': shoot,
        'Add': add,
        'Strike': strike,
    }

    function shoot(targets, index, power) {
        if (!isIndexValid(targets, index)) {
            return targets;
        }
        targets[index] -= power;
        return targets.filter(t => t > 0);
    }

    function add(targets, index, value) {
        if (!isIndexValid(targets, index)) {
            console.log("Invalid placement!");
            return targets;
        }

        targets.splice(index, 0, value);
        return targets;
    }

    function strike(targets, index, radius) {
        for (let i = index - radius; i <= index + radius; i++) {
            if (!isIndexValid(targets, i)) {
                console.log(`Strike missed!`)
                return targets;
            }
        }
        return targets.filter((target, i, arr) => {
            if (i < index - radius || i > index + radius) {
                return true;
            }
            return false
        })
    }

    while (line !== 'End') {
        const tokens = line.split(" ");
        targets = map[tokens[0]](targets, +tokens[1], +tokens[2]);
        line = input.shift();
    }

    return targets.join("|");
}

01. Guinea Pig

function guineaPig(input) {
    let foodKg = Number(input[0]);
    let hayKg = Number(input[1]);
    let coverKg = Number(input[2]);
    let pigWeight = Number(input[3]);

    const grams = 1000;
    const dayFood = 300;
    let daysCounter = 0;

    let food = foodKg * grams;
    let hay = hayKg * grams;
    let cover = coverKg * grams;
    let weight = pigWeight * grams;

    for (let i = 1; i <= 30; i++) {
        daysCounter++;
        food -= dayFood;

        if (daysCounter % 2 === 0) {
            hay -= food * 0.05;
        }

        if (daysCounter % 3 === 0) {
            cover -= weight / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            break;
        }
    }

    if (food > 0 && hay > 0 && cover > 0) {
        food /= grams;
        hay /= grams;
        cover /= grams;
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}

02. Shopping List

function shopping(input) {
    const initialList = input.shift().split('!');
    let commandLine = input.shift();

    while (commandLine !== 'Go Shopping!') {
        let [command, grocery, newGrocery] = commandLine.split(' ');
        if (command === 'Urgent') {
            if (initialList.includes(grocery)) {
                commandLine = input.shift();
                continue;
            }
            initialList.unshift(grocery);
        } else if (command === 'Unnecessary') {
            if (!initialList.includes(grocery)) {
                commandLine = input.shift();
                continue;
            }
            const index = initialList.indexOf(grocery);
            initialList.splice(index, 1);
        } else if (command === 'Correct') {
            if (!initialList.includes(grocery)) {
                commandLine = input.shift();
                continue;
            }
            const index = initialList.indexOf(grocery);
            initialList.splice(index, 1, newGrocery);
        } else if (command === 'Rearrange') {
            if (!initialList.includes(grocery)) {
                commandLine = input.shift();
                continue;
            }
            const index = initialList.indexOf(grocery);
            initialList.splice(index, 1);
            initialList.push(grocery);
        }

        commandLine = input.shift();
    }
    console.log(initialList.join(', '));

}

03. Heart Delivery

function arraysDemo(arr) {

    let firstLine = arr.shift().split("@");
    let nextLine = arr.shift();
    let total = 0;

    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);

        if (total > firstLine.length - 1) {
            total = 0;
        }

        if (firstLine[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);
            }
        }
        nextLine = arr.shift();
    }
    console.log(`Cupid's last position was ${total}.`);
    let resultArr = [];
    let resultFlag = true;

    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);
        }
    });
    if (resultFlag) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }
}

01. Bonus Scoring System

function count(input) {

  let countOfstudents = Number(input.shift())
    let countOfLectures = Number(input.shift())
    let bounus = Number(input.shift())
      let high = 0

  for (let i of input){
    if (i > high ){
      high = +i
    }
  }
  let total = (+high / +countOfLectures) * (5 + +bounus)

  if (countOfLectures == 0){

console.log(`Max Bonus: ${Math.round(0)}.`);
console.log(`The student has attended ${high} lectures.`);
  } else {
    console.log(`Max Bonus: ${Math.round(total)}.`);
console.log(`The student has attended ${high} lectures.`);
  }

  

}

02. MuOnline

function solve(input) {
    let playerHealth = 100;
    let bitcoins = 0;
    let isAlive = true;

    const takePotion = (health) => {
        health = Number(health);

        let updatedHealth = Math.min(playerHealth + health, 100);

        console.log(`You healed for ${updatedHealth - playerHealth} hp.`);
        playerHealth = updatedHealth;
        console.log(`Current health: ${playerHealth} hp.`);
    };
    const addBitcoins = (amount) => {
        amount = Number(amount);
        bitcoins += amount;

        console.log(`You found ${amount} bitcoins.`);
    };
    const attack = (monster, dmg) => {
        dmg = Number(dmg);
        playerHealth -= dmg;

        if (playerHealth <= 0) {
            console.log(`You died! Killed by ${monster}.`);

            return false;
        }

        console.log(`You slayed ${monster}.`);
        return true;
    };   

    const inputLines = input[0].split('|');
    let room = 1;
    for (const i of inputLines) {
        const [ cmd, number ] = i.split(' ');
        if (cmd === 'potion') {
            takePotion(number);
        } else if (cmd === 'chest') {
            addBitcoins(number);
        } else {
            isAlive = attack(cmd, number);

            if (!isAlive) {
                console.log(`Best room: ${room}`);
                break;
            }
        }

        room++;
    }

    if (isAlive) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${playerHealth}`);
    }
}

03. Inventory

function solve(input) {
    input.pop();

    let journal = input
        .shift()
        .split(', ');

    let commandExecutor = {
        'Collect': (quest) => startQuest(quest),
        'Drop': (quest) => completeQuest(quest),
        'Combine Items': (quest, sideQuest) => addSideQuest(quest, sideQuest),
        'Renew': (quest) => renewQuest(quest)
    };

    input.forEach(inputRow => {
        let [ command, quest, sideQuest ]
            = inputRow.split(' - ');

        if (quest && !sideQuest) {
            let tokens = quest.split(':');
            quest = tokens[0];
            sideQuest = tokens[1];
        }

        commandExecutor[command](quest, sideQuest);
    });

    console.log(journal.join(', '));
    
    function startQuest(quest) {
        if (!journal.includes(quest)) {
            journal.push(quest);
        }
    }
    
    function completeQuest(quest) {
        if (journal.includes(quest)) {
            let index = journal.indexOf(quest);
            journal.splice(index, 1);
        }
    }

    function addSideQuest(quest, sideQuest) {
        if (journal.includes(quest)) {
            let indexOfQuest = journal.indexOf(quest);
            let indexOfSideQuest = journal.indexOf(sideQuest);

            if (indexOfSideQuest === -1) {
                journal.splice(indexOfQuest + 1, 0, sideQuest);
            }
        }
    }

    function renewQuest(quest) {
        if (journal.includes(quest)) {
            let index = journal.indexOf(quest);
            journal.splice(index, 1);
            journal.push(quest);
        }
    }
}

01. Black Flag

function solve(input) {
  let [days, dailyPlunder, expectedPlunder] = input.map(Number);
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;

    if (i % 3 === 0) {
      totalPlunder += dailyPlunder * 0.50;
    }

    if (i % 5 === 0) {
      totalPlunder *= 0.70;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}


02. Treasure Hunt

function solve(input) {
  let chest = input.shift().split('|');

  const loot = function () {
    for (let i = 0; i < arguments.length; i++) {
      let current = arguments[i];
      if (!chest.includes(current)) {
        chest.unshift(current);
      }
    }
  }

  const drop = (index) => {
    index = Number(index);

    if (index >= 0 && index < chest.length) {
      let item = chest[index];
      chest.splice(index, 1);
      chest.push(item);
    }
  }

  const steal = (count) => {
    count = Number(count);
    let startIndex = Math.max(0, chest.length - count);
    let items = chest.splice(startIndex);
    console.log(items.join(', '));
  }

  let cmdParser = {
    loot,
    drop,
    steal
  };

  for (let line of input) {
    let tokens = line.split(' ');
    let command = tokens.shift()
      .toLowerCase();

    if (command === 'yohoho!') {
      break;
    }

    cmdParser[command](...tokens);
  }

  if (chest.length > 0) {
    let averageGain = chest.map(i => i.length).reduce((a, b) => a + b, 0) / chest.length;
    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
  } else {
    console.log('Failed treasure hunt.');
  }
}

03. Man O War

function solve(input) {
  let pirateShip = input.shift()
    .split('>')
    .map(Number);
  let warship = input.shift()
    .split('>')
    .map(Number);
  let maxHealth = Number(input.shift());
  let hasWinner = false;

  const fire = (index, damage) => {
    index = Number(index);
    damage = Number(damage);

    if (index >= 0 && index < warship.length) {
      warship[index] -= damage;
    }
  };

  const defend = (startIndex, endIndex, damage) => {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);
    damage = Number(damage);

    if (startIndex >= 0 && startIndex < pirateShip.length
      && endIndex >= 0 && endIndex < pirateShip.length) {
      for (let i = startIndex; i <= endIndex; i++) {
        pirateShip[i] -= damage;
      }
    }
  };

  const repair = (index, health) => {
    index = Number(index);
    health = Number(health);

    if (index >= 0 && index < pirateShip.length) {
      const currentHealth = pirateShip[index];
      pirateShip[index] = Math.min(currentHealth + health, maxHealth);
    }
  };

  const shipHasSunken = (ship) => {
    return ship.filter(s => s <= 0).length > 0;
  }

  const checkStatus = () => {
    let percentageCheck = 0.2 * maxHealth;
    let damagedShips = pirateShip
      .filter(s => s < percentageCheck).length;

    console.log(`${damagedShips} sections need repair.`);
  };

  let cmdParser = {
    'Fire': fire,
    'Defend': defend,
    'Repair': repair,
    'Status': checkStatus
  };

  for (let line of input) {
    let tokens = line.split(' ');
    let cmd = tokens.shift();

    if (cmd === 'Retire') {
      break;
    }

    cmdParser[cmd](...tokens);

    if (shipHasSunken(pirateShip)) {
      console.log('You lost! The pirate ship has sunken.');
      hasWinner = true;
      break;
    }

    if (shipHasSunken(warship)) {
      console.log('You won! The enemy ship has sunken.');
      hasWinner = true;
      break;
    }
  }

  if (!hasWinner) {
    let pirateShipHealth = pirateShip.reduce((a, b) => a + b, 0);
    let warshipHealth = warship.reduce((a, b) => a + b, 0);

    console.log(`Pirate ship status: ${pirateShipHealth}`);
    console.log(`Warship status: ${warshipHealth}`);
  }
}