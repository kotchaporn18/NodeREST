function frequencySort(s) {
    const charFrequencyMap = new Map();

    for (let char of s) {
        charFrequencyMap.set(char, (charFrequencyMap.get(char) || 0) + 1);
    }

    const sortedChars = Array.from(charFrequencyMap.keys()).sort((a, b) => charFrequencyMap.get(b) - charFrequencyMap.get(a));

    let result = '';
    for (let char of sortedChars) {
        result += char.repeat(charFrequencyMap.get(char));
    }

    return result;
}

console.log(frequencySort("tree"));    
console.log(frequencySort("cccaaa"));  
console.log(frequencySort("Aabb"));    
console.log(frequencySort("ROllyaM"));   