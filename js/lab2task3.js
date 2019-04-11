'use strict';
alert("Task 3... Let`s go");

class Bayonet_list {

  constructor(elements) {
    this.array = elements;
  }

  getInfo() {
    document.write("Двозв'язний список: [" + this.array + "]</br>");
  }

  pushElement(el) {
    this.array.push(el);
  }

  popElement() {
    const i = this.array.pop();
    
    console.log(this.array);
  }

  shiftElement(){
    this.array.shift();
  }

  unshiftElement(el){
    this.array.unshift(el);
  }

  findElement(el){
    let flag = true;
    this.array.find(function(item) {
      if (item == el && flag) {
        document.write("Eлемент " + el + " знайдено :D");
        flag = false;
      };
    });
    if (flag) {
      document.write("Eлемент " + el + " не знайдено :(");
    }
  }
}

let list = new Bayonet_list([7, 8, 9, 2]);
list.getInfo();
list.pushElement(7);
list.getInfo();
list.popElement();
list.popElement();
list.popElement();
list.getInfo();
list.unshiftElement(66);
list.unshiftElement(4);
list.pushElement(8);
list.pushElement(3);
list.getInfo();
list.shiftElement();
list.shiftElement();
list.getInfo();
list.findElement(8);