function selectionSort(arr) { //sorts in place
    for (let i = 0; i < arr.length; i++) {
        let minDex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minDex]) minDex = j;
        }
        [arr[i], arr[minDex]] = [arr[minDex], arr[i]];
    }
    return arr
}

const t0 = performance.now()
console.log(selectionSort([10, 1, 9, 2, 8, 3, 7, 6, 4, 5]));
const t1 = performance.now() - t0
console.log(t1)