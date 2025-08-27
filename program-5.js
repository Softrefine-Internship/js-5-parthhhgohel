// // Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


// Error 
class Shape{
    constructor(){
        this.area = 0;
    }
};

class Circle extends Shape{
    constructor(r){
        super();
        this.r = r;
    }

    shapeArea(){
        this.area = (this.r * this.r * Math.PI).toFixed(2);
        console.log(`Circle Area  : ${this.area}`);
    }
};

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    shapeArea(){
        this.area = (1/2 * (this.base / this.height)).toFixed(2);
        console.log(`Triangle Area  : ${this.area}`);
    }
}

const circle1 = new Circle(10);
circle1.shapeArea();

const triangle1 = new Triangle(10, 20);
triangle1.shapeArea();