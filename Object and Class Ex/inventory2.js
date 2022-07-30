function inventory2(data) {

    let heroes = [];

    for (let hero of data) {
        let [name, level, items] = hero.split(' / ')
        
        let currentHero = {
            name: name,
            level: Number(level),
            items: items
        }

        heroes.push(currentHero);
    }

    let sortedByLevel = heroes.sort((a,b) => {
        return a.level - b.level
    });

    for (let hero of sortedByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }


}
inventory2([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])