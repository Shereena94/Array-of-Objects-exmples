const players = [
    { id: 1, name: 'John', sport: 'Basketball', age: 25, score: 30 },
    { id: 2, name: 'Emily', sport: 'Tennis', age: 23, score: 18 },
    { id: 3, name: 'Chris', sport: 'Football', age: 28, score: 12 },
    { id: 4, name: 'Anna', sport: 'Basketball', age: 24, score: 25 },
    { id: 5, name: 'Mike', sport: 'Football', age: 26, score: 15 },
];


// 1. Print all player names.

players.forEach((a)=>console.log(a.name))


// 2. Find all players who scored above 20.
players.filter((a)=>a.score>20?console.log(a.name):"")


// 3. Get a list of players who play Basketball.

console.log(players.filter((a)=>a.sport==="Basketball"?a:""))


// 4. Count the total number of Football players.

let footPlayers=players.filter((a)=>a.sport==="Football"?a:"");
console.log(footPlayers.length)



// 5. Find the player with the highest score and print their details

console.log(players.reduce((a,b)=>a["score"]>b["score"]?a:b))