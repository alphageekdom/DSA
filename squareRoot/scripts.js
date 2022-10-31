const isSquareRoot = number => {
    // If its a square root of itself
    if (number <= 1) {
        return number
    }
    // Loop from 2 to number
    for (let i = 2; i <= number; i++) {
        // If i * i = number, i * i is a pure square root
        if (i * i === number) {
            return i;
        }
        // If not a pure square root
        // If i * i > number, return the previous i for a rounded down square root
        if (i * i > number) {
            return i - 1;
        }
    }
};


let test1 = 10

console.log(isSquareRoot(test1));