"use strict";
let a = parseInt(prompt("Введіть a (a>0):"));
let x = parseInt(prompt("Введіть x (x>0):"));
let eps = parseFloat(prompt("Введiть esp:"));
let k = 1;
let numerator, denominator, res, fn = 1, sum = 0;

do {
    console.log(k);
    fn *= 2*k;
        
    numerator = Math.pow(-1, k) * Math.log(Math.pow( x, 2 * k ))
    console.log(numerator);
    denominator = Math.pow(a, 2*k) + fn;
    res = numerator / denominator;
    console.log(res);
    sum += res;
    k++;
} while(Math.abs(res) > eps)

document.write("Результат: "+sum);
document.write("</br>Кiлькiсть разів виконання: "+k);
