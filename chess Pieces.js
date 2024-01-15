function canMove(piece, start, end) {
    const startCol = start.charAt(0);
    const startRow = parseInt(start.charAt(1));

    const endCol = end.charAt(0);
    const endRow = parseInt(end.charAt(1));

    if (piece === "Rook") {
        return startCol === endCol || startRow === endRow;
    }

    if (piece === "Bishop") {
        return Math.abs(startCol.charCodeAt(0) - endCol.charCodeAt(0)) === Math.abs(startRow - endRow);
    }

    if (piece === "Queen") {
        return startCol === endCol || startRow === endRow || Math.abs(startCol.charCodeAt(0) - endCol.charCodeAt(0)) === Math.abs(startRow - endRow);
    }
    return false;
}

console.log(canMove("Rook", "A8", "H8")); 
console.log(canMove("Bishop", "A7", "G1")); 
console.log(canMove("Queen", "C4", "D6")); 