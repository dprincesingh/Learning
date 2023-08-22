function openaccount (customername,balance){
    this.customername = customername
    this.accountnumber=Date.now()
    this.balance = balance
    this.deposit=(amount)=>this.balance = this.balance +amount
    this.debit=(amount)=>  this.balance = this.balance-amount
}

const dheeraj = new openaccount('dheeraj sharma',100)

dheeraj.deposit(2000)
console.log(dheeraj);