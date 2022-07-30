function heroesOfCode(data) {

    let numberOfHeros = Number(data.shift());
    let heroList = {};

    for (let i = 0; i < numberOfHeros; i++) {
        let [heroName, hp, mp] = data[i].split(' ');

        heroList[heroName] = {};
        heroList[heroName]['heroName'] = heroName;
        heroList[heroName]['hp'] = Number(hp);
        heroList[heroName]['mp'] = Number(mp);
    }

    for (let i = numberOfHeros; i < data.length; i++) {
        if (data[i] === 'End') {

            for (let el in heroList) {
                let name = heroList[el]['heroName'];
                let hp = heroList[el]['hp'];
                let mp = heroList[el]['mp'];
                console.log(name);
                console.log(`  HP: ${hp}`);
                console.log(`  MP: ${mp}`);
            }

            break;
        }

        let tokens = data[i].split(' - ');
        let command = tokens[0];
        let givenHeroName;
        let givenMP;
        let givenSpell;

        switch (command) {
            case 'CastSpell':
                givenHeroName = tokens[1];
                givenMP = Number(tokens[2]);
                givenSpell = tokens[3];

                if (heroList[givenHeroName]['mp'] >= givenMP) {
                    let oldMP = heroList[givenHeroName].mp;
                    heroList[givenHeroName]['mp'] = oldMP - givenMP;
                    console.log(`${givenHeroName} has successfully cast ${givenSpell} and now has ${oldMP - givenMP} MP!`);
                } else if (heroList[givenHeroName]['mp'] < givenMP) {
                    console.log(`${givenHeroName} does not have enough MP to cast ${givenSpell}!`);
                }
                break;

            case 'TakeDamage':
                givenHeroName = tokens[1];
                let damage = Number(tokens[2]);
                let attacker = tokens[3];

                let oldHP = heroList[givenHeroName].hp;
                heroList[givenHeroName]['hp'] = oldHP - damage;

                if (heroList[givenHeroName]['hp'] > 0) {
                    console.log(`${givenHeroName} was hit for ${damage} HP by ${attacker} and now has ${oldHP - damage} HP left!`);
                } else {
                    delete heroList[givenHeroName];
                    console.log(`${givenHeroName} has been killed by ${attacker}!`);
                }
                break;

            case 'Recharge':
                givenHeroName = tokens[1];
                let rechargeMP = Number(tokens[2]);
                let oldAmountMP = heroList[givenHeroName].mp;

                heroList[givenHeroName]['mp'] = oldAmountMP + rechargeMP;
                let sum = oldAmountMP + rechargeMP;

                if (sum > 200) {
                    heroList[givenHeroName]['mp'] = 200;
                    console.log(`${givenHeroName} recharged for ${heroList[givenHeroName]['mp'] - oldAmountMP} MP!`);
                } else {
                    heroList[givenHeroName]['mp'] = oldAmountMP + rechargeMP;
                    console.log(`${givenHeroName} recharged for ${rechargeMP} MP!`);
                }
                break;

            case 'Heal':
                givenHeroName = tokens[1];
                let rechargeHP = Number(tokens[2]);
                let oldAmountHP = heroList[givenHeroName].hp;

                heroList[givenHeroName]['hp'] = oldAmountHP + rechargeHP;
                let sumHP = oldAmountHP + rechargeHP;

                if (sumHP > 100) {
                    heroList[givenHeroName]['hp'] = 100;
                    console.log(`${givenHeroName} healed for ${heroList[givenHeroName]['hp'] - oldAmountHP} HP!`);
                } else {
                    heroList[givenHeroName]['hp'] = oldAmountHP + rechargeHP;
                    console.log(`${givenHeroName} healed for ${rechargeHP} HP!`);
                }
                break;
        }
    }
}
heroesOfCode([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])

// heroesOfCode([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
//   ])