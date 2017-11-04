"use strict";

var _ = require('lodash');

let company = {
  name: "Grab",
  divisions: {
    pops: "Human Resource",
    engs: "Enginerring"
  },
  history: 5
};

let grab = _.cloneDeep(company);

printObject(grab);

function printText(text) {
  process.stdout.write(text + "\n");
}

function printObject(object) {
  for (let key in object) {
    if (typeof(object[key]) === "object") {
      printObject(object[key]);
    } else {
      printText(`object[${key}] = ${object[key]}`);
    }
  }
}
