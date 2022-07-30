function orders (product, quantity){

    let result = 0;

    switch (product){
        case 'coffee': result = quantity * 1.50; break;
        case 'water': result = quantity * 1.00; break;
        case 'coke': result = quantity * 1.40; break;
        case 'snacks': result = quantity * 2.00; break;
    }

    console.log(result.toFixed(2))

}
orders ("coffee", 2)