const reverseString = (string) => {
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        [string[start++], string[end--]] = [string[end], string[start]];
    }
    return string;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));