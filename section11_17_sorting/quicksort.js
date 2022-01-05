function sort(arr, start, end) {
    const value = arr[start];
    let index = start;
    for (let i = start + 1; i < end; i++) {
        if (arr[i] <= value) {
            index++;
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    [arr[start], arr[index]] = [arr[index], arr[start]]
    return index
}
function quickSort(arr, start = 0, end = arr.length) {
    if (start < end) {
        const pivotIndex = sort(arr, start, end);
        quickSort(arr, start, pivotIndex)
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr
}
const array = [4, 756, 23, -1, -2, 0, 3, 23, 1, 4, 545, 0, 0, 0, 2343, 1, 11];

console.log(quickSort(array), array);

