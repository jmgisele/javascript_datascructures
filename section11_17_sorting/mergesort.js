function merge (arrA, arrB) {
    const singleSorted = [];
    while (arrA.length && arrB.length) {
        (arrA[0] < arrB[0]) ? singleSorted.push(arrA.shift()) : singleSorted.push(arrB.shift());
    }
    if (arrA.length) singleSorted.concat(arrA);
    if (arrB.length) singleSorted.concat(arrA);
    return singleSorted.concat(arrA, arrB)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))
    return merge(left, right)
}

console.log(mergeSort([4,756,23,23,1,4,545,0,0,0,2343,1,11]));
