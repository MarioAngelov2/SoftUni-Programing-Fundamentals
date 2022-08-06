function solve(data) {

    let travelPoints = 0;
    let destination = [];
    const pattern = /([=\/])[A-Z][A-Za-z]{3,}([=\/])/g;
    const found = data.match(pattern);

    if (found) {
        found.forEach((el, i) => {
            if (el[0] === el[el.length - 1]) {
                el = el.substring(1, el.length - 1);
                travelPoints += el.length;
                destination.push(el);
            }
        });

    }

    console.log(`Destinations: ${destination.join(', ')} `);
    console.log(`Travel Points: ${travelPoints}`)

}
solve(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))