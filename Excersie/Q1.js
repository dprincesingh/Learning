// Q1 :- 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.x
class person{
    constructor(name,age=0,country){
        this.name = name;
        this.age =age
        this.country = country
    }
}

const person1 = new person("Dheeraj",20,"Nepal")
const person2 = new person("Abhishek",19,"bangladesh")
const person3 = new person("Prince",18,"India")

const user = [person1, person2, person3]

console.log(user);

