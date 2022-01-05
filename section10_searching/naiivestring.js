//my naiive soln
function myNaiiveString(longStr, short) {
    let i = 0;
    let matches = 0;
    while (i < longStr.length) {
        let initial_i = i;
        for (let j = 0; j < short.length; j++) {
            if (longStr[i] === short[j]) { // this char matches
                i++;
                if (j === short.length - 1) { //if the WHOLE string matches
                    matches++;
                    i = initial_i;
                    break
                }
            } else { //this char means it's not a match
                i = initial_i;
                break
            }
        }
        i++;
    }
    return matches;
}

//official soln
function naiiveString(long, short) {
    let count = 0;
    for (let i = 0;i<long.length;i++){
        for (let j = 0; j < short.length;j++) {
            if (short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}


console.log(naiiveString('aaabacbbaabbabbbbabbbabbabb', 'abb'));

