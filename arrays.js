/**
 * Created by qingyun.wang on 6/11/17.
 */

"use strict";

/**
 * an Array is essentially an Object, with access to an ordered collection of data
 * */

/** two ways to declare an array */
let arrayA = new Array();
let arrayB = [];
let arrayC = ["Apple", "Google", "Facebook", "Amazon", "Uber", "Airbnb"];


/** basic usage
 *  the simplest way to clear the array is: arr.length = 0;
 * */
printText(`second company is : ${arrayC[1]}`);


/** looping */
for (let company of arrayC) {
    printText(company);
}


/** array as a queue/stack
    push    --> add element to end of array
    pop     --> extract last element of array and remove it from array
    shift   --> extract first element and remove it from array
    unshift --> add element to beging of array
    important : push and unshift can add multiple elements at once
 * */
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
queue.unshift("DBS", "OCBC", "UOB");
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