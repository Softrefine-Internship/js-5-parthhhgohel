// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    #amount = 0;
    constructor(amount){
        this.#amount = amount;
    }

    deposite(val){
        this.#amount += val;
        console.log(`${val} is deposited to your account and Total balance is ${this.#amount}`);
    }
    withdraw(val){
        this.#amount -= val;
        console.log(`${val} is withdrawed to your account and Total balance is ${this.#amount}`);
    }
};

const person1 = new BankAccount(500);

person1.deposite(1000);
person1.deposite(1000);
person1.withdraw(500);