function openaccount (customername,balance=0){
    this.customername = customername
    this.accountnumber=Date.now()
    this.balance = balance
   
}

openaccount.prototype.deposit = (amount)=>{
    this.balance = this.balance+amount
}

openaccount.prototype.withdraw = (amount)=>{
    this.balance=this.balance-amount
}

const dheeraj = new openaccount('dheeraj sharma',1000)
// dheeraj.deposit(1200)
// dheeraj.withdraw(1000)

console.log(dheeraj);