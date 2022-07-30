function solve(num) {

    let matrix = [];

    for (let i = 0; i < num; i++) {

        let row = [];

        for (j = 0; j < num; j++){
            row.push(num);
        }
        matrix.push(row.join(' '))
    }
console.log(matrix.join('\n'))
}
solve(3)