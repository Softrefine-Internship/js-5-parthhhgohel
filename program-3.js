// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display(){
        console.log(`${this.model} is made by ${this.make}, In ${this.year}`);
    }
};

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    display(){
        console.log(`${this.model} has ${this.doors} and is made by ${this.make}, In ${this.year}`);
    }
};

const m5 = new Car('m5', 'BMW', 1995, 4);
m5.display();