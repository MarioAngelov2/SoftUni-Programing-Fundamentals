function adressBook(data) {

    let result = {};

    for (let line of data) {
        let [name, street] = line.split(':')
        result[name] = street;
    }
    
    let entries = Object.entries(result);
    let sortetEntries = entries.sort((a,b) => {
        return a[0].localeCompare(b[0]);
    })

    for (let [key, value] of sortetEntries) {
        console.log(`${key} -> ${value}`)
    }

}
adressBook([
'Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'
])