const readline = require("readline-sync");
const fs = require('fs');
  

console.log('Starting time:')
let timeM = readline.question();
let timeS = readline.question();
let list = [];
let score = 39;

for (let i = 0; i < 100; ++i) {

  const input = readline.question();
  
  if(input == '2') score+=2;
  else if(input == '1') score = score;
  else if(input == '9') break;
  else score++;

  for(let j = 0; j < 5; j++) {
    const pack = { time: `00:${timeM}:${timeS}`, score: score };
    list.push(pack);

    if(timeS == '00') {
      const updateMins = Number(timeM) - 1;
      if(updateMins < 10) timeM = `0${updateMins}`;
      else timeM = updateMins.toString();
      timeS = '59';
    }
    else {
      const updateSecs = Number(timeS) -1;
      if(updateSecs < 10) timeS = `0${updateSecs}`;
      else timeS = updateSecs.toString();
    }
  }
  console.log(score);
  if(score == 100) break;
}

let listString = '[ ';

list.forEach((item) => {
  listString = `${listString} { time: '${item.time}', score: ${item.score} },`
});

listString = `${listString} ];`;

fs.writeFile('./output.txt', listString, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});


