import {Client} from "./Client.js"
import {Account} from "./Account.js"

const client1 = new Client("Ricardo", 11122233309);
const client2 = new Client("Alice", 88822233309);


const account = new Account(1001, client1);
account.deposit(500);
account.withdraw(100);

const secondAccount = new Account(102, client2);

let value = 200;
account.transfer(value, secondAccount);

console.log(account);