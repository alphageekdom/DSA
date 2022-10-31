const selectionSort = (array) => {
    let copyArray = [...array];
    let len = copyArray.length;
    for (let i = 0; i < len - 1; i++) {
        let lowestIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (copyArray[j] < copyArray[lowestIndex]) {
                lowestIndex = j;
            }
        }
        [copyArray[i], copyArray[lowestIndex]] = [copyArray[lowestIndex], copyArray[i]];
    }
    return copyArray;
};

console.log(selectionSort([4, 2, 7, 1, 3]))