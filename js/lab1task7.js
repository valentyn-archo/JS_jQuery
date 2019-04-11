'use strict';
alert("Task 7... Let`s go");

let mystring = prompt("Введіть текст:");
document.write("Your text:" + mystring + "</br>");

let symbols = [];
let arr = [];
let temp;
arr = mystring.split(/[ .:;?!~,'"&|()<>{}\[\]\r\n/\\]+/);
symbols = mystring.split(/[A-Za-z]/).filter(function(item) {
    return item.match(/[ .:;?!~,'"&|()<>{}\[\]\r\n/\\]+/);
})
console.log(symbols);

for (let i=0; i<arr.length; i++){
    let c = i;
    temp = arr[i].slice(arr[i].length-1);
    console.log(temp);
    if (symbols[c] == undefined) {
        symbols[c] = '';
    }
    arr[i]=arr[i].replace(new RegExp(temp, 'g'), '') + temp + symbols[c];
}

mystring = arr.join('');
document.write("</br>Your changed text:" + mystring);
