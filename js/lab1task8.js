'use strict';
alert("Task 8... Let`s go");

let n = parseInt(prompt("Введіть n (n<=300):"));
let m = parseInt(prompt("Введіть m (m<=100):"))
let A = [];
let B = [];
let a;

function unique(arr, len) {
    let obj = {};
    
    for (let i = 0; i < len; i++) {
        let num = arr[i];
        obj[num] = true;
    }

    return Object.keys(obj);
}

function pereriz(arr1, arr2) {
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            arr3.push(arr1[i]);
        }
    }
}
arr3 = unique(arr3, arr3.length);
return arr3;
};

function sum(arr) {
    return arr.reduce((a,b) => (+a) + (+b), 0);
};

function sinSum(arr) {
    return arr.reduce((a,b) => Math.sin(a) + Math.sin(b), 0);
};

for (let i=0;i<n;i++) {
    a = Math.round( Math.random() * 20 );
    A.push(a);
}
document.write("A = [" + A + "]</br>");

for (let i=0;i<m;i++) {
    a = Math.round( Math.random() * 20 );
    B.push(a);
}
document.write("B = [" + B + "]</br>");

A = pereriz(A, B);
document.write("A/B = [" + A + "]</br>");


//A = sum(A);
document.write("Sum = " + sum(A) + "</br>");

document.write("Sum of sin (all elemants) = " + sinSum(A));