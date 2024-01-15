function capToFront(str) {
    let caps = '';
    let nonCaps = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            caps += char;
        } else {
            nonCaps += char;
        }
    }

   return '"' +caps + nonCaps+ '"'
}

console.log(capToFront("hApPy"));      
console.log(capToFront("moveMENT"));   
console.log(capToFront("shOrtCAKE"));
console.log(capToFront("RoLlYam"));
console.log(capToFront("KOTpornCHA"));


