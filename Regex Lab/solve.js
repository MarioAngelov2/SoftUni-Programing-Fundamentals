function solve() {

    let text = '2015-05-11';
    let pattern = /\d{4}-\d{2}-\d{2}/;

    console.log(pattern.test(text));

}
solve()