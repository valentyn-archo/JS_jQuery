'use strict';
alert("Task 2... Let`s go");

class Book {
    constructor(title, countOfPages, price) {
      this.title = title;
      this.countOfPages = countOfPages;
      this.price = price;
    }

    getInfo() {
        document.write("Книга: </br>" + "\tНазва: " + this.title + ";</br>" +
        "\tКількість сторінок: " + this.countOfPages + ";</br>"+ "\tЦіна: " + this.price + " UAH;</br></br>");
    }
}

class Library extends Book {
    constructor(title, countOfPages, price, sale){
        super(title, countOfPages);
        this.price = price;
        this.sale = sale;
    }

    getPriceWithSale() {
        this.price = this.price - this.price*this.sale/100;
    }
    
    getPriceWithoutSale(){
        this.price = this.price;
    }

    getInfo() {
        document.write("(Бібліотека) Книга: </br>" + "\tНазва: " + this.title + ";</br>" +
        "\tКількість сторінок: " + this.countOfPages + ";</br>"+ "\tЦіна: " + this.price + " UAH;</br>" + "\tЗнижка: " + this.sale + " %</br></br>");
    }
}

let book1 = new Book("Програмування ХАХА", 130, 280);
book1.getInfo();
let book2 = new Library("Про землю", 1200, 500, 17);
book2.getInfo();
book2.getPriceWithoutSale();
book2.getInfo();
book2.getPriceWithSale();
book2.getInfo();
