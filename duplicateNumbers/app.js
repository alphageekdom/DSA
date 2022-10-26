// Nested Loop takes 25 Steps
const hasDuplicateValue1 = arr => {
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            steps++;
            if (i !== j && arr[i] === arr[j]) {
                return true;
            }
        }
    }
    console.log(steps);
    return false;
};

console.log(hasDuplicateValue1([1, 4, 5, 2, 9]));


// This loop takes 5 Steps
const hasDuplicateValue2 = arr => {
    let steps = 0;
    let existingNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        steps++;
        if (existingNumbers[arr[i]] === 1) {
            return true;
        } else {
            existingNumbers[arr[i]] = 1;
        }
    }
    console.log(steps);
    return false;
};

let res = hasDuplicateValue2([1, 4, 5, 2, 9]);
console.log(res);