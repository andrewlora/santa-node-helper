// 1: What floor does Santa end up on
//       ( = should go UP   1 floor
//       ) = should go DOWN 1 floor
const fs = require("node:fs");

function question1() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("question1");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((accumulator, currentValue) => {
      //console.log(accumulator);
      if (currentValue === "(") return (accumulator += 1);
      else return (accumulator -= 1);
    }, 0);
    console.log("answer:", answer);
    console.timeEnd("question1");
  });
}

question1();

function question1normal() {
  fs.readFile("./santa.txt", (err, data) => {
    console.time("question1Normal");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let counter = 0;
    for (let i = 0; i < directionsArray.length; i++) {
      directionsArray[i] === "(" ? (counter += 1) : (counter -= 1);
    }
    console.log("answer2:", counter);
    console.timeEnd("question1Normal");
  });
}

question1normal();

// Now, given the same instructions, find the position of the first character
// that causes him to enter the basement(floor - 1).
// The first character in the instructions has position 1, the second character
// has position 2, and so on.

// What is the position of the character that causes Santa
// to first enter the basement ?
//
// )     causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.

function question2() {
  fs.readFile("./santa.txt", (err, data) => {
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      //console.log(accumulator);
      if (currentItem === "(") accumulator += 1;
      else accumulator -= 1;
      counter++;
      return accumulator < 0;
    });
    console.log("basement entered at:", counter);
  });
}
// question2();
