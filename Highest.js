function highestDigit(number) {
    const numStr = number.toString();

    let highest = 0;
    for (let i = 0; i < numStr.length; i++) {
        const currentDigit = parseInt(numStr[i]);
        if (currentDigit > highest) {
            highest = currentDigit;
        }
    }

    return highest;
}


console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
