const evenNumbers1 = (upperLimit) => {
    let number = 2;

    while (number <= upperLimit) {
        if (number % 2 === 0) {
            console.log(number)
        }
        number++;
    }
    return 'finished'
};

// console.log(evenNumbers1(33))

const evenNumbers2 = (upperLimit) => {
    let number = 2;

    while (number <= upperLimit) {
        console.log(number)
        number += 2;
    }
    return 'finished'
};

// console.log(evenNumbers2(20))