// Sort 1 step
const bubbleSort1 = arr => {
    arr.sort((a, b) => a - b);
    return arr;
};

// For Loop in 21 steps
const bubbleSort2 = arr => {
    const len = arr.length;
    // Iterate the array
    for (let i = 0; i < len; i++) {
        // Compare each value
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                console.log('Steps')
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

// While loop bubble sort in 21 sets
const bubbleSort3 = arr => {
    let unsortedIndex = arr.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsortedIndex; i++) {
            if (arr[i] > arr[i +1]) {
                console.log('Steps')
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
};


console.log(bubbleSort1([65, 55, 45, 35, 25, 15, 10]));
console.log(bubbleSort2([65, 55, 45, 35, 25, 15, 10]));
console.log(bubbleSort3([65, 55, 45, 35, 25, 15, 10]));