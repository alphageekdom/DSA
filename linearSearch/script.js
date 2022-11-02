// Has time complexity of O(n)
const linearSearch = (array, target) => {
    // Loop the entire array
    for (let i = 0; i < array.length; i++) {
        // Return index target in array
        if (array[i] === target) {
            return i;
        }
    }
    return false;
};

console.log(linearSearch([3, 17, 75, 80, 202], 22));