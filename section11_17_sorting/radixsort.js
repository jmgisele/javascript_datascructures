const getDigit = (num, index) => {
    const str = String(num);
    return str[str.length - index]
}

const digitCount = (num) => String(num).length;

const getLongest = (arr) => Math.max(...arr.map((num) => digitCount(num)));

const radixSort = (arr) => {
    const num_digits = getLongest(arr);
    for (let k = 1; k <= num_digits; k++) {
        let dict = {}
        for (let i = 0; i < 10; i++) {
            dict[i] = []
        }
        for (let n = 0; n < arr.length; n++) {
            (digitCount(arr[n]) >= k) ? dict[`${getDigit(arr[n], k)}`].push(arr[n]) : dict['0'].push(arr[n])
        }
        let new_arr = []
        for (let i = 0; i < 10; i++) {
            new_arr = new_arr.concat(dict[String(i)])
        }
        arr = [...new_arr]
    }
    return arr
}

const arr_1 = [1, 243, 342, 4545, 45435345, 656, 7, 6, 4, 5646, 4, 3, 3, 2];

console.log(radixSort(arr_1))