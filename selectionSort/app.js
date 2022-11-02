const selectionSort = (array) => {
    let sorted = [...array];
    let len = sorted.length;
    for (let i = 0; i < len - 1; i++) {
        let lowestIndex = i;
        for (let j = i; j < len; j++) {
            if (sorted[j] < sorted[lowestIndex]) {
                lowestIndex = j;
            }
        }
        [sorted[i], sorted[lowestIndex]] =
            [sorted[lowestIndex], sorted[i]];
    }
    return sorted;
};

console.log(selectionSort([4, 2, 7, 1, 3]))