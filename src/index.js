import { Client } from "./Client.js";
import { Account } from "./Account.js";
import { SavingsAccount } from "./SavingsAccount.js";

const client1 = new Client("Ricardo", 11122233309);

const account = new Account(1001, client1);
account.deposit(500);
account.withdraw(100);

const savingsAccount = new SavingsAccount(150, client1, 1001);
console.log(savingsAccount);

console.log(account);
