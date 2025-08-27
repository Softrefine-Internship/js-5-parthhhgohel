// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

// 
class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary*12;
    }
    annualSalary(){
        console.log(`${this.name}'s annual Salary is ${this.salary}`);
    }
};

class Manager extends Employee{
    constructor(name, salary, department, bonus){
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }
    annualSalary(){
        this.salary += this.bonus;
        console.log(`As a ${this.department}, ${this.name} earns ${this.salary} per annum including bonus(${this.bonus})`);
    }
};

const emp1 = new Manager('Parth', 20000, 'Sofware Developer', 1000);
emp1.annualSalary();