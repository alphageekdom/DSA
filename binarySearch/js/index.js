function binarySearch(arr, number) {
    
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === number) {
            return mid;
        } else if (number < mid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return `${number} is not in the array.`;
}

let array = [3, 17, 75, 80, 202];
console.log(binarySearch(array, 22));