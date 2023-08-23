// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class vehicle{
    constructor(make,model,year){
        this.make=make
        this.model =model
        this.year = year
    }

    displaycardetails(){
        console.log(`Make :${this.make} / Model :${this.model} / year :${this.year}`)
     
    }
}
class car extends vehicle{
    constructor(make,model,year,door){
        super(make,model,year,door)
        this.numberofdoors = door
    }
    displaycardetails(){
        super.displaycardetails()
        console.log(` Doors:${this.numberofdoors}`)
    }
}



const altroz = new vehicle('tata','xe',2020)
const spresso = new vehicle('maruti','VXI',2020)
// altroz.displaycardetails()
// spresso.displaycardetails()

const virtus = new car('volkswagen','gt+',2023,4)

virtus.displaycardetails()