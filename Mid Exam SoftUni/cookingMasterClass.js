function cookingMasterClass(input) {

    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let counter = 0;
    let totalPrice = 0;
    let freeFlour = 0;
    let moreApron = 0;

    for (let i = 0; i < students; i++) {
        counter++;
        if (counter % 5 === 0) {
            freeFlour++;
        }

        moreApron = Math.ceil(students * 0.2)
        totalPrice = apronPrice * (students + moreApron) + eggPrice * 10 * (students) + flourPrice * (students - freeFlour)
    }
    
    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`)
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`)
    }
}
cookingMasterClass([50,
    2,
    1.0,
    0.10,
    10.0])

cookingMasterClass([100,
    25,
    4.0,
    1.0,
    6.0])
    
cookingMasterClass([946, 
    20, 
    12.05, 
    0.42, 
    27.89]) 
    