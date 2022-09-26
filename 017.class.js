class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let john = new Person("John Doe");
let name = john.getName();
console.log(name); // "John Doe"
console.log(typeof Person)///function, because class is special function
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true


//setter and getter methods are used to manipulate and prevent the object to not to acces direclty
class Black {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}

let person = new Black('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith


/*

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let person1 = new Person("Jane Doe");
console.log(person1.name);

// attempt to change the name, but cannot
person1.name = 'Jane Smith';
console.log(person1.name); // Jane Doe
*/



//Using getter in an object literal
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Jane').add('Peter');
console.log(`The latest attendee is ${meeting.latest}.`);
/*
John joined the meeting.
Jane joined the meeting.
Peter joined the meeting.
The latest attendee is Peter.*/


//class expression
let Civil = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let civil = new Civil('John Doe');
console.log(civil.getName());//John doe
console.log(typeof civil); //object
console.log(typeof Civil); //function





//class as a paramter to function..called as call back classes
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'



//Singleton class
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');

app.start(); // Starting the Awesome App...




//computed property i.e.,  variable using []
let body = 'fullName';

class Cover {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [body]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let cover = new Cover('John', 'Doe');
console.log(cover.fullName); //john dae





//Class inheritance
//example1
class Animal12 {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}
/*
class Bird extends Animal12 {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}
let bird = new Bird(2);

bird.walk();
bird.fly();
*/
//super keyword acccess the method which has legs as parameter

//example2
//u need to pass super keyword, before writing own properties
class Bird extends Animal12 {
	constructor(legs, color) {
		super(legs);
		this.color = color;
	}
	fly() {
		console.log("flying");
	}
	getColor() {
		return this.color;
	}
}

let pegion = new Bird(2, "white");
pegion.fly();//flyuing
console.log(pegion.getColor());//white


//shadowing property
//animal class has walk, but dogs walk method  inherits animal's when child class object created
// child class can also inherit static methods, which is hellowordl...
/*
class Animal{
    constructor(legs) {
         this.legs = legs;
     }
     walk() {
         console.log('walking on ' + this.legs + ' legs');
     }
      static helloWorld() {
        console.log('Hello World');
    }
 }
 
 class Dog extends Animal {
     constructor() {
         super(4);
     }
     walk() {
          super.walk();//walking on 4 legs.......we call walk method of super class
         console.log(`go walking`);
     }
 }
 
 let bingo = new Dog();
 bingo.walk(); // go walkin
 Dog.helloWorld(); // Hello World....we can access static method of parent using child class name
 */


 //new.keyword in class ...tells whehther constructor or function was called
 class Agent {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employer extends Agent {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let joh = new Agent('John Doe'); // Agent
let lily = new Employer('Lily Bush', 'Programmer'); // Employer



//private field in the classs

class Circle {
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }
  let circle = new Circle(10);
console.log(circle.area); // 314.1592653589793....private fields can be accesed usoing class names


//private fields setup using setters and getters
class Shape {
    #radius = 0;
    constructor(radius) {
      this.radius = radius;
    }
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    set radius(value) {
      if (typeof value === 'number' && value > 0) {
        this.#radius = value;
      } else {
        throw 'The radius must be a positive number';
      }
    }
    get radius() {
      return this.#radius;
    }
    /* static hasRadius(circle2) {
        return #radius in circle2;
      }*/
  }
  let circle2 = new Shape(9);
console.log(circle2.area);//254.46900494077323
//console.log(Shape.hasRadius(circle2));//to kn whther Shape has raduis field


//u cannot acces private fields of parfent class using chidl class extends
//throws error if u try to access 
/*class Cylinder extends Circle {
  #height;
  constructor(radius, height) {
    super(radius);
    this.#height = height;

    // cannot access the #radius of the Circle class here
  }
}*/


//private static field
class Rect {
    #radius = 0;
    static #count = 0;
    constructor(radius) {
      this.radius = radius;
      Rect.#count++;
    }
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    set radius(value) {
      if (typeof value === 'number' && value > 0) {
        this.#radius = value;
      } else {
        throw 'The radius must be a positive number';
      }
    }
    get radius() {
      return this.#radius;
    }
   /* static hasRadius(circle) {
      return #radius in circle;
    }*/
    static getCount() {
      return Rect.#count;
    }
  }
  
let circles = [new Rect(10), new Rect(20), new Rect(30)];
  
console.log(Rect.getCount());//3
  


//private methods
class Meth {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    getFullName() {
      return  this.#firstLast() ;
    }
  
    #firstLast() {
      return `${this.firstName} ${this.lastName}`;
    }
    
  }
  
  let meth = new Meth('Private', 'Meth_Bings');
  // console.log(Meth.#firstName)...idk why acting weird
  console.log(meth.getFullName());//private meth_bings


  //private static method
  class Stark {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = Stark.#validate(firstName);
      this.#lastName = Stark.#validate(lastName);
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
      if (typeof name === 'string') {
        let str = name.trim();
        if (str.length>= 3) {
          return str;
        }
      }
      throw 'The name must be a string with at least 3 characters';
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let stark = new Stark('Phoebe', 'Boofay');
  console.log(stark.getFullName());