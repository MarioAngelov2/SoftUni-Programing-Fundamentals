function solve(data) {

    let text = data.join(' ');
    let resultArr = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;

    let match = pattern.exec(text);

    while (match !== null) {
        let validName = match.groups['furniture'];
        let validPrice = Number(match.groups['price']);
        let validQuantity = Number(match.groups['quantity']);

        resultArr.push(validName);
        totalSum += validPrice * validQuantity;

        match = pattern.exec(text)
    }

    console.log(`Bought furniture:`);
    resultArr.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum}`)

}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])