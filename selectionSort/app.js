// Selection Sort in 20 Steps

const selectionSort = (arr) => {
    let steps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        steps++;
        let lowestNumberIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            steps++;
            if (arr[j] < arr[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }
        if (lowestNumberIndex != i) {
            let temp = arr[i];
            arr[i] = arr[lowestNumberIndex];
            arr[lowestNumberIndex] = temp;
        }
    }
    console.log(`Steps: ${steps}`)
    return arr
};

console.log(selectionSort([4, 2, 7, 1, 3]))