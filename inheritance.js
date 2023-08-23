// class openaccount{
    
//     constructor(Customere ,balance=0){
//         this.customer = Customere;
//         this.balance  = balance;
//         this.accountnumber = Date.now();

//     }
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }

// class savingsaccount extends openaccount{
    
//     constructor(Customere,balance=0){
//         super(Customere,balance);
//         this.accounttype = "savings";
//         this.transactionlimit = 10000
//     }
// }

// const prince = new  savingsaccount("Prince", 2000)
// prince.deposit(200)
// prince.withdraw(500)
// console.log(prince);


function openaccount(customerename , balance = 0){
    this.customer = customerename;
    this.balance  = balance;
    this.accountnumber = Date.now();

}

openaccount.prototype.depsot = function(amount){
    this.balance += amount;
}
openaccount.prototype.withdrwa = function(amount){
    this.balance -= amount;
}

function savingsaccount(customerename ,balance=0){
    this.accounttype = "savings";
    this.transactionlimit = 10000
    openaccount.call(this,customerename,balance)

}


savingsaccount.prototype = Object.create(openaccount.prototype)




const prince = new savingsaccount("Prince",200)
prince.depsot(200)
prince.withdrwa(300)
console.log(prince); 