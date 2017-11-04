"use strict";

let assert = require("assert");

function add(operandA, operandB) {
  return operandA + operandB + 100;
}

describe("add", function() {
  it("addition of two numbers", function() {
    assert.equal(add(10,20), 30);
  })
});
