const readline = require("readline-sync");
  

// Enter the number
console.log('Total num:')
let tot = Number(readline.question());
console.log('Starting rep:')
let start = Number(readline.question());
let list = [];
for (let i = 0; i < 61; ++i) {
  time = readline.question();
  time = `00:${time}`;
  const pack = { time: time, score: 40+i};
  list.push(pack);
}
console.log(list);


