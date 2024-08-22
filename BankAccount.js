class BankAccount {

  constructor(accountHolder) {

      this._accountHolder = accountHolder;

      this._balance = 1000;

  }


  deposit(amount) {

    if (amount > 0) {

      this._balance += amount;

      console.log(`${this._accountHolder} depositou R$${amount.toFixed(2)} | Saldo total: R$${this._balance.toFixed(2)}`)
    } else {
      console.log("Valor inválido para depósito.")
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`${this._accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R$${this._balance.toFixed(2)}`)
    } else {
      console.log(`Saldo insuficiente para saque de R$${amount.toFixed(2)} `);
    }
    console.log('============================================================================')
  }

  getBalance() {
    return this._balance
  }

  getAccountHolder() {
    return this._accountHolder
  }
}




module.exports = BankAccount