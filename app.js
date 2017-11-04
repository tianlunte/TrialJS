/*
  tutorial url: https://javascript.info/
*/

"use strict";

function printText(text) {
  process.stdout.write(text);
}

process.stdout.write("Aha, node js\n");

let message = "Be a man\n";
process.stdout.write(message);

const constant = "Sure, let's go\n";
process.stdout.write(constant);

/*7 data types*/
let number = 1;                 // number type, including 3 special values: Infinity, -Infinity and NaN
                                // NaN means not a number
let text = "Hello";             // string type
let isTooYoung = true;          // boolean type
let nullValue = null;           // a special value meaning nothing, a special type that has only one value
let undefinedValue = undefined; // a special value meaning declared but not assigned
                                // object type
                                // symbol type

/* operators */
printText(typeof("AAA"));
printText("\n");

let text = "A" + " is " + "fine"; //+

let aa = a ** b; // which means a^b

// ==
// === strict equality operator, checks equality without type conversion
// !=
// !== stric non-eqaulity operator
// typeof null will give object, which is an error in language, because null is a special type on its own

// for string
let oneAge  = 12;
let oneName = "";
let oneIntro = `Hello, my name is ${oneName}, and I am ${oneAge} years old\n`;
printText(oneIntro);

/* type conversion */
// to string
let text = String(101);      // String() function will convert other type to string
let num  = Number("123456");
let isHigherThan = Boolean(100);
/* type conversion */

/* conditional */
if (1) {

} else if (2) {

} else {

}

let value = (1 > 2) ? 10 : 100;
/* conditional */
