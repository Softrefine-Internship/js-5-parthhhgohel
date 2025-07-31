// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount{
    val = 0;
    constructor(number, account, holderName, balance){
        this.number = number;
        this.account = account;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(val){
        if(val > 0){
            this.balance += val;
            console.log(`debited : ${val}, total balance : ${this.balance}`);
        }
        else{
            console.log("Enter valid amount");
        }
    }
    withdraw(val){
        if(val > 0 && val <= this.balance){
            this.balance -= val;
            console.log(`credited : ${val}, total balance : ${this.balance}`);
        }
        else{
            console.log("Enter valid amount");
        }
    }

    // Transfer money to athor account
    transfer(val, account){
        this.withdraw(val);
        account.deposit(val);
        console.log(`transfered : ${val} to ${account.holderName}, total balance : ${this.balance}`);
    }
};

const account1 = new BankAccount(1, "SBI", "Parth", 10000);
const account2 = new BankAccount(2, "HDFC", "jenish", 20000);

account1.deposit(1000);
account1.withdraw(1000);
account1.transfer(1000, account2);