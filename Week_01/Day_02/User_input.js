const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/

//0 1 2 3 4 5
//k e l v i n
reader.question("what is your name: ", function(input){
	// console.log(`this is our input ${input}`);
  // let first_char = input[0];
  // console.log(`first_char is ${first_char}`);
	reader.close();
});