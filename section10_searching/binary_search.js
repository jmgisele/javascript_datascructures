function binarySearch(arr, num, start=0, end=arr.length - 1){
    if (arr.length === 0) return -1;
    let indexToCheck = Math.floor((end - start) / 2 ) + start;
    if (arr[indexToCheck] === num) return indexToCheck;
    if (end <= start) return -1;
    if (arr[indexToCheck] > num) return binarySearch(arr, num, start, indexToCheck - 1);
    if (arr[indexToCheck] < num) return binarySearch(arr, num, indexToCheck + 1, end);
}

console.log(binarySearch([1,2,3,4,5], 4));