"use strict";
alert("Task 5... Let`s go");

let n = parseInt(prompt("Введіть n (n<300):"))
let X = [];
let Y = [];
let a;

function unique(arr) {
    let obj = {};
    
    for (let i = 0; i < 2*n; i++) {
        let num = arr[i];
        obj[num] = true;
    }

    return Object.keys(obj);
}

for (let i=0;i<n;i++) {
    a = Math.round( Math.random() * 10 );
    X.push(a);
}

for (let i=0;i<n;i++) {
    a = Math.round( Math.random() * 10 );
    Y.push(a);
}

console.log("X =" + X);
console.log("Y =" + Y);

let Z = X.concat(Y);
console.log("Before my function: " + Z);
Z = unique(Z);
console.log("After my function: " + Z);
document.write("</br>Result = " + Z);
let sum = Z.reduce((a, b) => (+a) + (+b), 0);
console.log(sum);
document.write("</br>Sum = " + sum); 
let mult = Z.reduce((a, b) => a * b, 1);
document.write("</br>Dobutok = " + mult); 




