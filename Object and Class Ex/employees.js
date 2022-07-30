function employees(input) {

    let listObject = {};

    for (let person of input) {
        listObject.name = person;
        listObject.number = person.length;
        console.log(`Name: ${listObject.name} -- Personal Number: ${listObject.number}`);
    }


}
employees ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])