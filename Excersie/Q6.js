// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary

class Employee{
    constructor(name ,salary ){
        this.name = name
        this.salary = salary
    }
    calculateanuualsalary (){
        return 12*this.salary
    }
}

class manager extends Employee{
    constructor(name ,salary,department){
    super(name ,salary)
    this.department = department
    }
    calculateanuualsalary (bonus){
        return (12*this.salary)+bonus
    }

}

const prince = new Employee('prince',50000)
const anuualsalalry = prince.calculateanuualsalary()

console.log(`Deatil of new Emplyee :- ${prince.name} and his salary is ${prince.salary}  and its anuualsalalry is ${anuualsalalry}`);

const abhishek = new manager("Abhishek",80000,"backend")
const abhishekanualsalary = abhishek.calculateanuualsalary(40000)
console.log(abhishek);
console.log(`New Employe deatails :- ${abhishek.name} and his annual salalry is ${abhishekanualsalary}`);

