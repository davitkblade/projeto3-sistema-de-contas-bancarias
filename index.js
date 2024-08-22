const BankAccount = require('./BankAccount')

const SavingsAccount = require('./SavingsAccount')

const johnAccount = new BankAccount('John')

johnAccount.deposit(500);
johnAccount.withdraw(300);

const marySavingsAccount = new SavingsAccount('Mary', 1.5)

marySavingsAccount.deposit(2000);
marySavingsAccount.applyInterest();
marySavingsAccount.withdraw(500);

