/**
 * Created by qingyun.wang on 6/11/17.
 */

"use strict";

/** two ways to declare an array */
let arrayA = new Array();
let arrayB = [];
let arrayC = ["Apple", "Google", "Facebook", "Amazon", "Uber", "Airbnb"];



/** looping */
for (let company of arrayC) {
    printText(company);
}



/** some common methods */
function printText(text) {
    process.stdout.write(text + "\n");
}