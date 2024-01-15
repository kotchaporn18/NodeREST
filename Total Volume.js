function totalVolume(...args) {
    
    const calculateBoxVolume = (length, width, height) => length * width * height;
    const totalVolume = boxes.reduce((acc, box) => {
        const [length, width, height] = box;
        return acc + calculateBoxVolume(length, width, height);
    }, 0);

    return totalVolume;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));  
console.log(totalVolume([2, 2, 2], [2, 1, 1]));                     
console.log(totalVolume([1, 1, 1]));   





