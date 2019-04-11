'use strict';
alert("Task 1... Let`s go");

class Book {

  constructor(title, date, price) {
    this.title = title;
    this.date = date;
    this.price = price;
  }

  getInfo() {
    document.write("Книга: </br>" + "\tНазва: " + this.title + ";</br>" +
    "\tРік видання: " + this.date.toLocaleDateString('uk-UA') + ";</br>"+ "\tЦіна: " + this.price + " UAH;</br></br>");
  }

  getPrice() {
      if (this.title.indexOf("Програмування") == 0) {
          this.price = this.price * 2;
      }
  }

  datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24))-1;
  }

  getDays() {
      let now = new Date().getTime();
      console.log(now);
      console.log(this.date.toLocaleDateString('uk-UA'));
      document.write("Днів між виданням до сьогодні: " + this.datediff(this.date.getTime(), now) + "</br>");
  }

  set newTitle(value) {
    this.title = value;
  }

  set newYear(value) {
    this.date = value;
  }

  set newPrice(value) {
    this.price = value;
  }
}

let book1 = new Book("Програмування ХАХА", new Date(1997, 13, 1), 20000);
book1.getInfo();
book1.getPrice();
book1.getInfo();
book1.getDays();
let book2 = new Book();
book2.newTitle = "Пывsdaы";
book2.newYear = new Date(1999, 11, 4);
book2.newPrice = 210;
book2.getInfo();
book2.getPrice();
book2.getInfo();
book2.getDays();

