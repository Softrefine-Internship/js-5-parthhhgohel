// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    details(){
        console.log(`${this.title} is published in ${this.year} by ${this.author}`);
    }
};

class EBook extends Book{
    constructor(title, author, year, price){
        super(title, author, year);
        this.price = price;
    }
    details(){
        console.log(`${this.title}'s price is ${this.price} and it was published in ${this.year} by ${this.author}`);
    }
}

const ebook1 = new EBook('Bhagwat geeta', 'ved vyasa', 200, 5000);
ebook1.details();