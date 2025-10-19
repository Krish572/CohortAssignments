class Rectangle{
    constructor (x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
    }

    area(){
        return this.x * this.y;
    }

    paint(){
        console.log(`Painting the Rectangle with ${this.color} color`);
    }

}

const date = new Date(); // JS already wrote this class, so we can instanciate and use them.
console.log(date.toISOString()); 

const rect = new Rectangle(5, 6, "Blue"); // Instantiatiating the Object, rect is now the instace of class.
console.log(rect.area()); //If we do not place the () braces then function area will get consoled in the terminal
rect.paint(); //If we remove braces nothing will output (it checking in the rect object, is there any property with name paint, there is nothing, even though it's there, since this line of code doing nothing with that property)

/*
    I can write this instead of above code which does the same.

    const rect = {
        x = 5;
        y = 6;
        color = "Blue";
    }

    function area(rect){
        return rect.x * rect.y;
    }

    function paint(rect){
        console.log(`Painting the Rectangle with ${rect.color} color`);
    }
    
    But Classes give you Better structure and syntax, and also easy to write.
*/