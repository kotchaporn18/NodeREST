function sumTwoSmallestNums(total) {
    const positiveNumbers = total.filter(num => num >= 0);
    const sortedNumbers = positiveNumbers.sort((a, b) => a - b);
    const sum = sortedNumbers[0] + sortedNumbers[1];

    return sum;
}


console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); 
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); 
console.log(sumTwoSmallestNums([2, 9, 6, -1])); 
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 211, -91, -723, 791, -587])); 
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2384])); 