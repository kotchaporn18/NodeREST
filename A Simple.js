function simplePair(arr, targetProduct) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === targetProduct) {
                return [arr[i], arr[j]];
            }
        }
    }

    return null; 
}

console.log(simplePair([1, 2, 3], 3)); 
console.log(simplePair([1, 2, 3], 6)); 
console.log(simplePair([1, 2, 3], 9)); 