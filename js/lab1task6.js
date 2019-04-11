'use strict';
alert("Task 6... Let`s go");
let n = parseInt(prompt("Введіть n (n<=15):"));

let A = new Array(n);
let B = [];
let C = [];

for (let i = 0; i < A.length; i++) {
  A[i] = new Array(n);
}

document.write("Array A:</br>----------------------------</br>");
for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
        A[i][j] = Math.round( Math.random() * 100 );
        document.write("[" + A[i][j] + "]" + " ");
    } 
    document.write("</br>");
}

let c = 0;
document.write("</br>Array B: [");
for (let i = 0; i < A.length*2; i++) {
    c=i;
    for (let j = c; j < A.length; j++) {
        B.push(A[i][j]);
    } 
}
document.write(B + "]</br>");

document.write("</br>Array C: [");
for (let i = 1; i < A.length; i++) {
  c=i;
  for (let j = 0; j < c; j++) {
      C.push(A[i][j]);
  } 
}
document.write(C + "]</br>");

let max = Math.max(...C);
console.log("B = " + B);
console.log("C = " + C);
console.log(max);
C = B.filter((x) => {
  if (x>max ){
    return x;
  }}).reduce((a,b) => a + b, 0);
document.write("</br>Result: " + C);
