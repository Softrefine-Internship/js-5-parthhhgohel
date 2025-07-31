// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University{
    departments = [];
    constructor(name, departments){
        this.name = name;
        this.departments = departments;
    }

    add(department){
        this.departments.push(department);
        console.log(`added ${department}`);
    }

    remove(department){
        this.index = this.departments.indexOf(department);
        if(this.index === -1){
            console.log(`${department} not found`);
            return;
        }
        this.departments.splice(this.index, 1);
        console.log(`removed ${department}`);
    }
};

const DSU = new University("DSU", ["Bca", "Msc", "IT"]);
DSU.add("Mba");
DSU.remove("Cse");