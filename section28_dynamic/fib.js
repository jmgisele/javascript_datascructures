let naiiveFib = (num) => {
    if (num === 0) return 0
    if (num === 1 || num === 2) return 1
    return naiiveFib(num - 1) + naiiveFib(num - 2)
}


let memoizedFib = (num, dynamicDict = { 0: 0, 1: 1, 2: 1 }) => {
    if (dynamicDict[num] !== undefined) return dynamicDict[num]
    dynamicDict[num] = memoizedFib(num - 1, dynamicDict) + memoizedFib(num - 2, dynamicDict)
    return dynamicDict[num]
}

let tabulatedFib = (num) => {
    if (num === 0) return 0
    if (num === 1 || num === 2) return 1
    let tabDict = {0:0, 1: 1, 2: 1}
    for(let i = 3; i <= num; i++) tabDict[i] = tabDict[i - 1] + tabDict[i-2];
    return tabDict[num]
}
