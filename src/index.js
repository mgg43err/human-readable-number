module.exports = function toReadable(number) {
    let obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
    }
    let objD = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'

    }
    let objT = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'

    }
    let sNumber = number.toString();
    let fPart = Number(sNumber[1]);
    let sPart = Number(sNumber[0]);
    let ePart = Number(sNumber[2]);
    if (number in obj) {
        console.log(obj[number]);
        return obj[number];
    } else if (number > 13) {
        if (sNumber.length === 2) {
            if (number < 20) {
                if (fPart !== 5 && fPart !== 8) {
                    console.log(`${obj[fPart]}${'teen'}`);
                    return (`${obj[fPart]}${'teen'}`);
                }
                if (fPart === 5) {
                    console.log('fifteen');
                    return 'fifteen';
                }
                if (fPart === 8) {
                    console.log('eighteen');
                    return 'eighteen';
                }
            } else if (sPart === 2) {
                if (fPart === 0) {
                    console.log(`twenty`);
                    return 'twenty';
                } else {
                    console.log(`twenty ${obj[fPart]}`);
                    return (`twenty ${obj[fPart]}`);
                }
            }
            if (sPart === 3) {
                if (fPart === 0) {
                    console.log(`thirty`);
                    return 'thirty';
                } else {
                    console.log(`thirty ${obj[fPart]}`);
                    return (`thirty ${obj[fPart]}`);
                }

            }
            if (sPart === 4) {
                if (fPart === 0) {
                    console.log(`forty`);
                    return 'forty';
                } else {
                    console.log(`forty ${obj[fPart]}`);
                    return (`forty ${obj[fPart]}`);
                }

            }
            if (sPart === 5) {
                if (fPart === 0) {
                    console.log(`fifty`);
                    return 'fifty';
                } else {
                    console.log(`fifty ${obj[fPart]}`);
                    return (`fifty ${obj[fPart]}`);
                }

            }
            if (sPart === 6) {
                if (fPart === 0) {
                    console.log(`sixty`);
                    return 'sixty';
                } else {
                    console.log(`sixty ${obj[fPart]}`);
                    return (`sixty ${obj[fPart]}`);
                }

            }
            if (sPart === 7) {
                if (fPart === 0) {
                    console.log(`seventy`);
                    return 'seventy';
                } else {
                    console.log(`seventy ${obj[fPart]}`);
                    return (`seventy ${obj[fPart]}`);
                }

            }
            if (sPart === 8) {
                if (fPart === 0) {
                    console.log(`eighty`);
                    return 'eighty';
                } else {
                    console.log(`eighty ${obj[fPart]}`);
                    return (`eighty ${obj[fPart]}`);
                }

            }
            if (sPart === 9) {
                if (fPart === 0) {
                    console.log(`ninety`);
                    return 'ninety';
                } else {
                    console.log(`ninety ${obj[fPart]}`);
                    return (`ninety ${obj[fPart]}`);
                }

            }

        }
        if (sNumber.length === 3) {
            if (fPart === 0 && ePart === 0) {
                console.log(`${obj[sPart]} hundred`);
                return (`${obj[sPart]} hundred`);
            }
            if (fPart === 1) {
                console.log(`${obj[sPart]} hundred ${objT[ePart]}`);
                return (`${obj[sPart]} hundred ${objT[ePart]}`);
            }
            if (fPart === 0 && ePart !== 0) {
                console.log(`${obj[sPart]} hundred ${obj[ePart]}`);
                return (`${obj[sPart]} hundred ${obj[ePart]}`);
            }
            if (fPart !== 0 && ePart === 0) {
                console.log(`${obj[sPart]} hundred ${objD[fPart]}`);
                return (`${obj[sPart]} hundred ${objD[fPart]}`);
            }
            if (fPart > 1 && ePart !== 0) {
                console.log(`${obj[sPart]} hundred ${objD[fPart]} ${obj[ePart]}`);
                return (`${obj[sPart]} hundred ${objD[fPart]} ${obj[ePart]}`);
            }

        }
    }
}


/* toReadable(14); */