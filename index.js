function openaccount (customername,balance=0){
    this.customername = customername
    this.accountnumber=Date.now()
    this.balance = balance
   
}

openaccount.prototype.deposit = function(amount){
    this.balance = this.balance+amount
}
openaccount.prototype.with
const dheeraj = new openaccount('dheeraj sharma',1000)
dheeraj.deposit(1200)


console.log(dheeraj);