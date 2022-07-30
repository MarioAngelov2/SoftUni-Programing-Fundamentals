function carWash (arr){

    let startValue = 0;

    for (let i = 0; i < arr.length; i++){
        let currentCommand = arr[i];

        switch (currentCommand){
            case 'soap': startValue += 10; break;
            case 'water': startValue *= 1.20; break;
            case 'vacuum cleaner': startValue *= 1.25; break;
            case 'mud': startValue *= 0.90; break; 
        }
    }
    console.log(`The car is ${startValue.toFixed(2)} clean.`)

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])