// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person{
    #password;
    constructor(fullName, age, password){
        this.fullName = fullName;
        this.age = age;
        this.#password = password;
    }

    displayData(){
        console.log(`Welcome, ${this.fullName}. Your age is ${this.age} and Password is ${this.#password}.`);
    }
};

const parth = new Person('Parth Gohel', 21, 'parthGohel@1234');
parth.displayData();