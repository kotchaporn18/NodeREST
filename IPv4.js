function isValidIP(ip) {
    const ipSegments = ip.split('.');

    if (ipSegments.length !== 4) {
        return false;
    }

    
    for (let segment of ipSegments) {
        if (!/^\d+$/.test(segment) || parseInt(segment)  < 0 || parseInt(segment) > 255) {
            return false;
        }
    }

    return true;
}

console.log(isValidIP("1.2.3.4"));       
console.log(isValidIP("1.2.3"));        
console.log(isValidIP("1.2.3.4.5"));     
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90")); 
console.log(isValidIP("123.045.067.089")); 