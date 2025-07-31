// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
    branches = [];
    constructor(bankName, branches) {
        this.bankName = bankName;
        this.branches = branches;
    }

    addBranch(branch) {
        this.branches.push(branch);
        console.log(`${branch} branch added`);
    }

    removeBranch(branch) {
        const index = this.branches.indexOf(branch);
        if (index === -1) {
            console.log(`${branch} branch not found`);
        } else {
            this.branches.splice(index, 1);
            console.log(`${branch} branch removed`);
        }
    }

    displayBranches() {
        console.log(`Branches of ${this.bankName}: ${this.branches}`);
    }
}

const bank = new Bank("SBI", ["A", "B", "C"]);
bank.removeBranch("A");
bank.addBranch("D");
bank.displayBranches();