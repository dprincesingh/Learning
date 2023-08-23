class openaccount{
    // customername;
    // balance;
    // accountnumber;
    constructor(name,balance=0){
    this.customername=name
    this.balance=balance
    this.accountnumber=Date.now()
    }
    deposit(amount){
        this.balance=this.balance+amount
    }

    withdraw(amount){
        this.balance=this.balance-amount
    }
    
}


const prince =  new openaccount("Prince kumar ",1000)

console.log(prince);




// const prince = new openaccount("Prince kumar",1000)
// prince.deposit(1000)
// prince.withdraw(500)
// console.log(prince);