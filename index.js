// code your solution here
function superbowlWin(record){
    const winYear = record.find(game => game.team === "Denver Broncos" && game.result === "W");
    return winYear ? winYear.year : undefined;
}

function superbowlWin(record) {
    
    const win = record.find(game => game.result === 'W');
    return win ? win.year : undefined;
}


const broncosRecord = [
    { year: '2015', result: 'W' },
    { year: '2016', result: 'L' },
   
];

console.log(superbowlWin(broncosRecord)); 