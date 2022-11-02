function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let midpoint = Math.floor((start + end) / 2);
        if (array[midpoint] === target) {
            return true;
        } else if (array[midpoint] < target) {
            start = midpoint + 1;
        } else {
            end = midpoint - 1;
        }
    }
    return false;
};

console.log(binarySearch([3, 17, 75, 80, 202], 22));