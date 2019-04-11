"use strict";
alert("Task 3... Let`s go");

let x = parseInt(prompt("Введіть X:"));
let y = parseInt(prompt("Введіть y:"));
let z = parseInt(prompt("Введіть z:"));
let k = parseInt(prompt("Введіть k:"));
let V;

switch (k){
    case 1:
        document.write("Виконалася умова 1!");
        V = Math.min(Math.max(x,y),z);
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        document.write("Виконалася умова 2!");
        V = Math.min(Math.max(y,z),x);
        break;
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        document.write("Виконалася умова 3!");
        V = Math.min(Math.max(z,x),y);
        break;
    default:
        document.write("Виконалася умова default!");
        V = x + y + z;
        break;
}
document.write("</br>Результат: "+V);

