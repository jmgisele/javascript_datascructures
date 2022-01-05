//ex swapping functions
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

const oneSwap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

//bubble sort 

function bubbleSort(arr) { //sorts in place!
    for (let j = arr.length; j > 0; j--) {
        for (let i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr
}
const t0 = performance.now()
console.log(bubbleSort([10, 1, 9, 2, 8, 3, 7, 6, 4, 5]))
const t1 = performance.now() - t0


//optimized bubble sort
function bubbleSortOptimized(arr) { //sorts in place!
    let ranLast = true;
    for (let j = arr.length; j > 0; j--) {
        if (ranLast === false) return arr;
        ranLast = false;
        for (let i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                ranLast = true;
            }
        }
    }
    return arr
}
const t2 = performance.now()
console.log(bubbleSortOptimized([10, 1, 9, 2, 8, 3, 7, 6, 4, 5]))
const t3 = performance.now() - t2


console.log(t1,t3)
