"use strict";
alert("Task 2... Let`s go");

let result = 0;

let x = parseInt(prompt("Введіть x:"));
let y = parseInt(prompt("Введіть y:"));
let z = parseInt(prompt("Введіть z:"));
let c = parseInt(prompt("Введіть c:"));
let d = parseInt(prompt("Введіть d:"));

(z!=0 && (x > c && x < d) && (y > c && y < d))? result = (Math.abs(x) + Math.abs(y))/Math.abs(z) : 
(z==0 && (x > c && x < d) && (y > c && y < d)) ? result = Math.min(x, y) + Math.sqrt(Math.pow(x,2)+Math.pow(y,2)) : result = Math.max(Math.abs(x), Math.abs(y), Math.abs(z));

document.write("Результат: "+ result.toFixed(3));