/**
 * Created by qingyun.wang on 6/11/17.
 */

"use strict";

/** two ways to declare an array */
let arrayA = new Array();
let arrayB = [];
let arrayC = ["Apple", "Google", "Facebook", "Amazon", "Uber", "Airbnb"];


/** basic usage */
printText(`second company is : ${arrayC[1]}`);


/** looping */
for (let company of arrayC) {
    printText(company);
}


/** array as a queue */
let queue = [];
queue.push("Alibaba");
queue.push("Tecent");
queue.push("Baidu");
queue.push("JD");
queue.push("Didi");
printArray(queue);
printText("pop 1 : " + queue.pop());
printText("shift 1 : " + queue.shift());
printArray(queue);

/** some common methods */
function printArray(array) {
    printText("\n*** begin ***");
    for (let ele of array) {
        printText(ele);
    }
    printText("*** end ***\n");
}

function printText(text) {
    process.stdout.write(text + "\n");
}