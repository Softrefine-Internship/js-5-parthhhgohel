//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        let area = this.width * this.height;
        console.log(`Area of Rectangle is ${area}.`);
    }
    perimeter(){
        let perimeter = 2*(this.width + this.height);
        console.log(`Area of Rectangle is ${perimeter}.`);
    }
};

const rec1 = new Rectangle(20, 20);
rec1.area();
rec1.perimeter();