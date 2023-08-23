//  Q2 :- Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class rectangle{
     constructor(width ,height){
        this.width = width
        this.height = height
     }

     area(){
        return this.width*this.height
     }
     perimeter(){
        return 2*(this.width+this.height)
     }
 }  


const a = new rectangle(10 ,12)

const area = a.area()
const perimeter = a.perimeter()
console.log(perimeter,area);