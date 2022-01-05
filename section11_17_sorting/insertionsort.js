//colt's soln
function insertionSort(arr) { //sorts in place
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

//easy to read soln
function insertionSortEasyToRead(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            } else {
                break
            }
        }
    }
    return arr
}

//insertion sort AND binary search combo 
//binary search for index where the left side is lower
//and right side is higher -- don't need exact match
//returns index after which new num should be inserted
function binarySearchHelper(arr, num, start = 0, end = arr.length - 1) {
    if (arr.length === 1) {
        if (num >= arr[0]) return 0;
        if (num < arr[0]) return -1;
    }
    if (num > arr[end]) return end
    if (num < arr[start]) return start - 1
    if ((start + 1 === end) && (arr[start] <= num <= arr[end])) return start;
    let indexToCheck = Math.floor((end - start) / 2) + start;
    if (arr[indexToCheck] === num) return indexToCheck;
    if (arr[indexToCheck] > num) return binarySearchHelper(arr, num, start, indexToCheck - 1);
    if (arr[indexToCheck] < num) return binarySearchHelper(arr, num, indexToCheck + 1, end);
}

function binaryInsertion(arr) {
    if (arr.length === 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        indexOfI = binarySearchHelper(arr.slice(0, i), arr[i]);
        if (indexOfI === -1 && i<=arr.length - 1) arr = [].concat(arr[i], ...arr.slice(0, i), ...arr.slice(i + 1))
        else if (indexOfI === -1 && i === arr.length - 1) arr = [].concat(arr[i],...arr.slice(0,i))
        else {
            if (i === 1) arr = [].concat(arr[0], arr[i], ...arr.slice(i + 1))
            if (i < arr.length - 1) arr = [].concat(...arr.slice(0, indexOfI + 1), arr[i], ...arr.slice(indexOfI + 1, i), ...arr.slice(i + 1));
            if (i === arr.length - 1) arr = [].concat(...arr.slice(0, indexOfI + 1),arr[i], ...arr.slice(indexOfI + 1, i));
        }
    }
    return arr;
}

const t0 = performance.now()
console.log(binaryInsertion([10, 1, 9, 5, 10, 545434, 545435345354, 34534543,45, 455, 2, 8, 3, 7, 6, 4, 5, 5]));
console.log(binaryInsertion([10,1]))
console.log(binaryInsertion([1]))
const t1 = performance.now() - t0
console.log(t1)
