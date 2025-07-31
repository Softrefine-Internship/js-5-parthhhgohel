// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.


class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    calculateTotalPrice(quantity) {
        this.totalPrice = this.price * quantity;
        console.log(`Total Price is ${this.totalPrice}`);
    }
}

class PersonalCareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    calculateTotalPrice(quantity) {
        this.totalPrice = this.price * quantity + this.warrantyPeriod;
        console.log(`Total Price is ${this.totalPrice}`);
    }
}

const personalCare = new PersonalCareProduct(1, "Shampoo", 100, 1);
personalCare.calculateTotalPrice(2);