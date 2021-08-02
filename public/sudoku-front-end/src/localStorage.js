const PUZZLE = 'PUZZLE'

export function getPuzzle() {
    const puz = localStorage.getItem(PUZZLE);
    if (!puz)
        return null;
    const puzzle = JSON.parse(puz);
    return puzzle;
}

export function setLocation(puzzle) {
    const puzzleString = JSON.stringify(puzzle);
    localStorage.setItem(PUZZLE, puzzleString)
}