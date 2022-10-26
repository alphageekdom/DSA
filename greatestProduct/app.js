// 25 Steps for no duplicate array
const greatestProduct1 = arr => {
    let greatest = arr[0] * arr[1];
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            steps++;
            if (i !== j && arr[i] * arr[j] > greatest) {
                greatest = arr[i] * arr[j];
            }
        }
    }
    console.log(steps);
    return greatest;
};

let res = greatestProduct1([1, 2, 3, 4, 5]);
console.log(res);


// Lower steps with filtered out duplicates
const greatestProduct2 = arr => {
    // filter out duplicate numbers
    let sortedArr = arr.filter((a, b) => a - b);
    // multiply last and second to last in new arr
    let greatest = sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
    return greatest;
}

let result = greatestProduct2([1, 2, 3, 4, 5, 5, 30]);
console.log(result);


// Finds highest pair product in 6 steps, no repeat integers
const greatestProduct3 = arr => {
    let highest = 0;
    let nextHighest = 0;
    let newArr = arr.filter((a, b) => a - b);
    let steps = 0;

    for (let i = 0; i < newArr.length; i++) {
        steps++;
        if (arr[i] > highest) {
            nextHighest = highest;
            highest = arr[i];
        } else if (arr[i] > nextHighest){
            nextHighest = arr[i];
        } else {
            continue;
        }
    }
    console.log(steps)
    return highest * nextHighest;
};


console.log(greatestProduct3([1, 2, 3, 4, 5, 6, 6]))