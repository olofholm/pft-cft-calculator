const readline = require("readline-sync");
const fs = require('fs');
  

console.log('Starting Rep:')
let startRep = readline.question();
let list = [];
let score = 39;

for (let i = 0; i < 1000; ++i) {

  const input = readline.question();
  
  if(input == '2') score+=2;
  else if(input == '1') score = score;
  else if(input == '9') break;
  else score++;

  const rep = Number(startRep) + i;
  const pack = { rep: rep, score: score };
  list.push(pack);

  console.log(score);
  if(score == 100) break;
}

let listString = '[ ';

list.forEach((item) => {
  listString = `${listString} { rep: ${item.rep}, score: ${item.score} },`
});

listString = `${listString} ];`;

fs.writeFile('./output.txt', listString, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});


