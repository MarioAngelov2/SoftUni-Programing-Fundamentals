function heroesOfCode(data) {

        let numberOfHeros = Number(data.shift());
        let heroList = {};

        for (let i = 0; i < numberOfHeros; i++) {
            let [heroName, hp, mp] = data[i].split(' ');
            console.log(hp)
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