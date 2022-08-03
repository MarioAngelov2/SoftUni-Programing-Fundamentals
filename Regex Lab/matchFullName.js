function solve(data) {

    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1, }/g
    let result = [];

    let match = pattern.exec(data);

    while (match !== null) {
        result.push(match[0]);

        match = pattern.exec(data);
    }
    console.log(result.join(' '));

}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")