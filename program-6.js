// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    annualSalary(){
        console.log(`Annual Salary : ${this.salary}`);
    }
};

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    annualSalary(){
        console.log(`Annual Salary : ${this.salary + 2000}`);
    }
};

const emp1 = new Manager('Parth', 15000, 'Sofware Developer');
emp1.annualSalary();