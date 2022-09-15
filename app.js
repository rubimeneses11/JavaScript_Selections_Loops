console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i++){
  if (i % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else if(i % 3 == 0){
console.log(i, "FIZZ");    
  } else if (i % 5 == 0){
    console.log(i, "BUZZ");
  } 
}

// Exercise 3 section
console.log("EXERCISE 3:\==============\n");
let a = 0;
while (a < 100) {
  if (a % 2 == 0) {
    continue;
  } else {
    console.log(i);
  }
  a++;
}

let b = 0;
do {
  if (b % 2 == 0) {
    continue;
  } else {
    console.log(x);
  } 
  b++;
} while (b < 100);

let c = 0; 

while (c <= 100){
    let output = "";

    if (c % 3 == 0){
        console.log("FIZZ");
    }
    if (c % 5 == 0){
    console.log("BUZZ");
    }

    console.log(`${i} ${output}`);
    c++;
}

let j = 0; 

do {
    let output = "";

    if (j % 3 == 0){
        console.log("FIZZ");
    }
    if (j % 5 == 0){
    console.log("BUZZ");
    }

    console.log(`${x} ${output}`);
    j++;
  } while(j <= 100);

  //Exercise 4 section
console.log("EXERCISE 4:\==============\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 1; i <= n; i++) {
  if(i == value){
    console.log("Found value!");
    break;
  }
  else{
    console.log("Did not find value");
  }
  
}

// Exercise 5 section
console.log("EXERCISE 5:\==============\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= m; i++) {
  let output = "";
  if(i % buzzDivisor == 0){
    output += "FIZZ"
  }
  if( i % fizzDivisor == 0){
  output += "BUZZ"
  }
  console.log(`${i} ${output}`);
}

console.log(`${fizzDivisor}, ${buzzDivisor}`);