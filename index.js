// code your solution here
function superbowlWin(record){
    const winYear = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    return winYear ? winYear.year : undefined;
}

function superbowlWin(record) {
    // Assuming 'record' is an array of objects with 'year' and 'result' properties
    const win = record.find(game => game.result === 'W');
    return win ? win.year : undefined;
}

// Example usage:
const broncosRecord = [
    { year: '2015', result: 'W' },
    { year: '2016', result: 'L' },
    // other records
];

console.log(superbowlWin(broncosRecord)); // Should output '2015'