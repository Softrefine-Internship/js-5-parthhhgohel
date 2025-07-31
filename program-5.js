// // Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.



class Shape{
    #area = 0;
    constructor(width, height){
        this.#area;
    }
    area(){

    }
};

class Circle extends Shape{
    constructor(r){
        super();
        this.r = r;
    }

    area(){
        area = 2 * this.r * Math.PI;
        console.log(`Area  : ${area}`);
    }
};

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    area(){
        area = 1/2 * (this.base / this.height);
        console.log(`Area  : ${area}`);
    }
}

const circle1 = new Circle(10);
circle1.area();

const triangle1 = new Triangle(10, 20);
triangle1.area();






























