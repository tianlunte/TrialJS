"use strict";

/**
  The equality == and strict equality === operators for objects work exactly the same.

 To make user.hi() calls work, JavaScript uses a trick – the dot '.' returns not a function,
 but a value of the special Reference Type
 //
 Any other operation like assignment hi = user.hi discards the reference type as a whole,
 takes the value of user.hi (a function) and passes it on
*/

let emptyObjectA = new Object();
let emptyObjectB = {};

let user = {
  name: "Wang Qingyun",
  age: 30
};

printText(`hi, my name is ${user.name}, and I am ${user["age"]} years old`);

// add a new property
user.job = "Android Developer";

// delete property
delete user.job;

if (user.job !== undefined) {
  printText("user has a job");
} else {
  printText("user has no job");
}

if ("job" in user) {
  printText("job is in user");
} else {
  printText("job is not in user");
}

for (let key in user) {
  printText(`user[${key}] = ${user[key]}`);
}

/* copy object */
let vehicle = {
  area: "land",
  purpose: "transporation"
};

let car = {
  wheels: 4,
  doors: 4
};

let bmw = {};
Object.assign(bmw, vehicle, car);
printObject(bmw);

let benz = Object.assign({}, bmw);
printObject(benz);
/* copy object */

/** object method */
let manager = {
  name: "LaoWang",
  race: "Chinese",
  age:  36,

  execute: function() {
    printText(`Manager ${this.name} is executing`);
  },

  report() {
    printText(`Manager ${this.name} is ${this.race} and he is ${this.age} years old`);
  }
};

manager.execute();
manager.report();
/** object method */

function printText(text) {
  process.stdout.write(text + "\n");
}

function printObject(object) {
  for (let key in object) {
    printText(`object[${key}] = ${object[key]}`);
  }
}
