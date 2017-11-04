"use strict";

/*
  A function with an empty return or without it returns undefined

  In JavaScript, a function is not a “magical language structure”, but a special kind of value

  --> A Function Expression is created when the execution reaches it and is usable from then on.
  --> A Function Declaration is usable in the whole script/code block.

  --> When a Function Declaration is made within a code block, it is visible everywhere
      inside that block. But not outside of it.
*/

function printText(text) {
  process.stdout.write(text);
}

function roar() {
  printText("Roar!!!\n");
}

function concateAndPrint(textA, textB) {
  let text = textA + textB;
  printText(text);
}

function concatePrintDefault(name, age = 20) {
  printText(`hi guys, I am ${name}, and I am ${age} years old\n`);
}

function sum(operandA, operandB) {
  return operandA + operandB;
}

let sayHi = function() {
  printText("Hi\n");
}
/*
  same as:
  function sayHi() {
    printText("Hi\n");
  }

  or a function expression
  //
  let sayHi = funtion() { printText("Hi\n"); };

  or arrow function
  //
  let sayHi = (text) => printText("Hi, " + text + "\n");
}
*/

/* callback functions */
function checkAge(age, onYes, onNo) {
  if (age >= 18) {
    onYes();
  } else {
    onNo();
  }
}

function checkAgeWrapped(age) {
  let onYes = function() {
    printText("Showing movie soon\n");
  }

  let onNo = function() {
    printText("Sorry, this movie is for adults only\n");
  }

  checkAge(age, onYes, onNo);
}
/* callback functions */

let sayHello = function() { printText("Hello\n") };

let saySomething = (text) => printText(text + "\n");

let sayLot = (textA, textB, textC) => {
  let text = textA + " " + textB;
  text += " " + textC + "\n";
  printText(text);
}

roar();

concateAndPrint("Japan", "\tChina\n");

concatePrintDefault("Tang");
concatePrintDefault("Song", 120);

printText(`100 + 200 = ${sum(100, 200)}\n`);

sayHi();

let greetings = sayHi;
greetings();

sayHello();

checkAgeWrapped(16);
checkAgeWrapped(30);

saySomething("I went back in time to find my lost");

sayLot("Hello", "Good morning", "Go back");
