import { Client } from "./Client.js";

export class Account{
    static numberOfAccountsCreated = 0;
    agency;
    _Client;
   // #balance =0 https://github.com/tc39/proposal-class-fields#private-fields
   
    set Client(newValue){
        if(newValue instanceof Client){
            this._Client = newValue;
        }
    }

    get Client(){
        return this._Client;
    }

    get balance(){
        return this._balance;
    }

    constructor(agency, Client){
        this.agency = agency;
        this.Client = Client;
        this._balance = 0;
        Account.numberOfAccountsCreated += 1;
    }


    withdraw(value){
        if(this._balance >= value){
            this._balance -= value;
            return value;
        }
    }

    deposit(value){
        if(value <= 0)
        {
            return;
        } 
        this._balance += value;           
    }

    transfer(value, account){
        
        const withDrawedValue = this.withdraw(value);
        account.deposit(withDrawedValue);
        
    }
}
