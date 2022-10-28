// Bubble Sort in 1 step
const bubbleSort1 = arr => {
    let steps = 0;
    arr.sort((a, b) => a - b);
    steps++;

    console.log(`Steps: ${steps}`)
    return arr;
};

// Bubble Sort in 30 steps
const bubbleSort2 = arr => {
    const len = arr.length;
    let steps = 0;
    // Iterate the array
    for (let i = 0; i < len; i++) {
        // Compare each value
        steps++;
        for (let j = 0; j < len; j++) {
            steps++;
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(`Steps: ${steps}`)
    return arr;
};

// Bubble Sort in 20 steps
const bubbleSort3 = arr => {
    let unsortedIndex = arr.length - 1;
    let sorted = false;
    let steps = 0;

    while (!sorted) {
        steps++;
        sorted = true;
        for (let i = 0; i < unsortedIndex; i++) {
            steps++;
            if (arr[i] > arr[i +1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    console.log(`Steps: ${steps}`)
    return arr;
};


console.log(bubbleSort1([11, 33, 53, 3, 2]));
console.log(bubbleSort2([65, 55, 45, 35, 25]));
console.log(bubbleSort3([4, 2, 7, 1, 3]));