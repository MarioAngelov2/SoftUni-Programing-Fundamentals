function storeProvision2(currentStock, forDelivery) {

    let storeProducts = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        storeProducts[product] = Number(currentStock[i + 1]);
    }

    for (let j = 0; j < forDelivery.length; j += 2) {
        let product = forDelivery[j];
        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }
        storeProducts[product] += Number(forDelivery[j + 1]);
    }

    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`)
    }

}
storeProvision2([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])