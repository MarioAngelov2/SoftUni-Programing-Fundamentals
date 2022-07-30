function partyTime(data) {

    let vip = new Set();
    let regular = new Set();
    let isParty = false;

    for (let line of data) {
        let command = line;
        if (command === 'PARTY') {
            isParty = true;
            continue;
        }

        if (!isParty) {
            let firstChar = Number(line[0])
            if (isNaN(firstChar)) {
                regular.add(line);
            } else {
                vip.add(line);
            }
        } else {
            vip.delete(line);
            regular.delete(line);
        }
    }

    let size = vip.size + regular.size;
    console.log(size)

    for (let el of vip) {
        console.log(el)
    }
    for (let el of regular) {
        console.log(el)
    }
}
partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])