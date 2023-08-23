// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
     constructor(name , accountnumber , balance ){
        this.name =  name
        this.accountnumber = accountnumber
        this.balance = balance

     }

     deposit(amount){
        this.balance+=amount
     }
     withdraw(amount){
        this.balance-=amount

     }
}

const prince = new BankAccount('Prince singh',123456007 ,3500 )
prince.deposit(2000)
prince.withdraw(300)

console.log(prince);