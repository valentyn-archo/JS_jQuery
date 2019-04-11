"use strict";
alert("Task 1... Let`s go");
let b = parseInt(prompt("Введіть b:"))
let x = parseInt(prompt("Введіть x:"))
let a = parseInt(prompt("Введіть a:"))
let z = parseInt(prompt("Введіть z:"))

let numerator = Math.pow(Math.cos(b*Math.pow(x,5)), 7) - (Math.sin(Math.pow(a, 2)) + Math.cos(Math.pow(x, 3) + Math.pow(z, 5) - Math.pow(a, 2)));
let denominator = Math.asin(Math.pow(a, 2)) + Math.acos(Math.pow(x, 7) - Math.pow(a, 2));

document.write("Результат: "+(numerator/denominator).toFixed(3));

function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  }
  
  addScript('./lab1task2.js');