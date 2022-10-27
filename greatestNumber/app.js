
// Finds largest number in array in 10 Steps
const greatestNumber1 = (array) => {
    
    let greatest = 0;
    let steps = 0; 

    for (let i = 0; i < array.length; i++) {
        steps++;
        if (array[i] > greatest) {
            steps++;
            greatest = array[i];
        }
    }
    console.log(`Steps ${steps}`)
    return greatest; 
};


// Finds largest number in array in 9 Steps
const greatestNumber2 = (array) => {
    let greatest = array[0];
    let steps = 0;

    for (let i of array) {
        steps++;
        if (i > greatest) {
            steps++;
            greatest = i;
        }
    }
    console.log(`Steps ${steps}`)
    return greatest;
};


console.log(greatestNumber1([1, 2, 3, 4, 5]));
console.log(greatestNumber2([1, 2, 3, 4, 5]));