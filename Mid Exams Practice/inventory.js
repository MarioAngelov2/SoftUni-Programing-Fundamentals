function inventory(input) {

    let inventory = input.shift().split(', ')
    let command = input.shift()
    
    while (command !== 'Craft!') {
        let row = command.split(' - ')
        let currentCommand = row[0];
        let item = row[1];
        let newItem = row[2];
        
        if (currentCommand === 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        }
        if (currentCommand === 'Drop') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index,1);
            }
        }
        if (currentCommand === 'Combine Items') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index,1,newItem);
            }
        }
        if (currentCommand === 'Renew') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index,1,item)
            }
        }
        command = input.shift();
    }
    console.log(inventory)

}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'])

    inventory([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'])