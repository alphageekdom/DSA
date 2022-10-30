const isNumberPowerOfThree = number => {
    // Returns false if n = 0 or undefined
    if (number === 0 || number == null) return false
    // Checks if number is divisible evenly by 3
    while (number % 3 === 0) {
        number /= 3
    }
    // Return true/false when while loop
    return number === 1
}

console.log(isNumberPowerOfThree(27));