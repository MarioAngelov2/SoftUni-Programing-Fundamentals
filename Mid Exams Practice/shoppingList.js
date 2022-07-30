function shoppingList(input) {

    let shoppingList = input.shift().split('!');
    let command = input.shift();

    while (command !== 'Go Shopping!') {
        let row = command.split(' ');
        let currentCommand = row[0];
        let groceries = row[1];
        let newItem = row[2];

        if (currentCommand === 'Unnecessary') {
            if (shoppingList.includes(groceries)) {
                let index = shoppingList.indexOf(groceries);
                shoppingList.splice(index,1);
            }
        }

        if (currentCommand === 'Urgent') {
            if (!shoppingList.includes(groceries)) {
                shoppingList.unshift(groceries)
            } 
        }

        if (currentCommand === 'Correct') {
            if (shoppingList.includes(groceries)) {
                let index = shoppingList.indexOf(groceries)
                shoppingList.splice(index,1,newItem)
            }
        }

        if (currentCommand === 'Rearrange') {
            if (shoppingList.includes(groceries)) {
                let index = shoppingList.indexOf(groceries)
                shoppingList.splice(index,1)
                shoppingList.push(groceries) 
            }
        }

        command = input.shift();
        
    }
    console.log(shoppingList.join(', '))
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

// shoppingList(["Milk!Pepper!Salt!Water!Banana",
// "Urgent Salt",
// "Unnecessary Grapes",
// "Correct Pepper Onion",
// "Rearrange Grapes",
// "Correct Tomatoes Potatoes",
// "Go Shopping!"])

