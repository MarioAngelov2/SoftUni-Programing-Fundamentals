function storeProvision(inStock, ordered) {

    let storeProducts = {};
    let inStockL = inStock.length;
    let orderedL = ordered.length;

    for (let i = 0; i < inStockL; i += 2) {
        let product = inStock[i];
        storeProducts[product] = Number(inStock[i + 1]);
    }

    for (let j = 0; j < orderedL; j += 2) {
        let product = ordered[j];
        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }
        storeProducts[product] += Number(ordered[j + 1])
    }

    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])