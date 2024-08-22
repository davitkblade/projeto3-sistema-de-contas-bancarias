const BankAccount = require('./BankAccount');




class SavingsAccount extends BankAccount {

    constructor(accountHolder, interestRate) {

        super(accountHolder);

        this._interestRate = interestRate;

        this._balance = 0;

    }




    applyInterest() {

        const interestAmount = this._balance * (this._interestRate / 100);

        this._balance += interestAmount;

        console.log(`Saldo total de ${this._accountHolder}: R$${this._balance.toFixed(2)}`);

    }




    deposit(amount) {

        if (amount > 0) {

            this._balance += amount;

            console.log(` Novo total: R$${this._balance.toFixed(2)} | Aplicado ${this._interestRate}% de juros`);

        }

    }




    withdraw(amount) {

        if (amount > 0 && amount <= this._balance) {

            this._balance -= amount;

            console.log(`${this._accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R$${this._balance.toFixed(2)}`);

        } else {

            console.log(`Saldo insuficiente para saque de R$${amount.toFixed(2)}`);

        }

    }






}




module.exports = SavingsAccount;