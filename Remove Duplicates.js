function removeDups(remove) {
    return remove.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

console.log(removeDups([1, 0, 1, 0]));          
console.log(removeDups(["The", "big", "cat"])); 
console.log(removeDups(["John", "Taylor", "John"]));
console.log(removeDups(["Rollyam", "Beam", "kantin", "Rollyam"]));

