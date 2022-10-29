// My original solution
const clean = (str) => str.toLowerCase().replace(/[\W_]/g, "");

const isPalindrome1 = (str) => {
    let cleanStr = clean(str);
    let reverseStr = cleanStr.split("").join("");
    return cleanStr === reverseStr;
};

isPalindrome1();


// A faster and cleaner solution
// A two-pointer approach
const isPalindrome2 = (str) => {
    let newStr = str.toLowerCase().replace(/[\W_]/g, "");
    let left = 0;
    let right = newStr.length - 1;
    while (left < right) {
        if (newStr[left] !== newStr[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
};

isPalindrome2();