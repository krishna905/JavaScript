function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = new Person("John", "Doe");
let person1=new Person("Chnadler",'Bing');
let person2 = Person('monica','geller'); // when u create obj without new keywordd, this object becomes global object
console.log(person.getFullName());
console.log(person1.getFullName());
//console.log(person2.getFullName());//error
//console.log(person2.firstName);//error, because we didnt create perosn2 with new keyword
console.log(firstName +" "+ lastName +" ---- "+ getFullName())





//wheen u create a object without new keyword, it becomes global object, to prevent that, to throw error,
//we should add new.target property... if u dont use new , it throws undefined, if u pass new keyword, returns a reference to the Person function 
function Car(firstName, lastName) {
    console.log(new.target);

    this.firstName = firstName;
    this.lastName  = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}
let car = new Car("John", "Doe");
console.log(car.getFullName())


//use this to diplay the errro message witgout throwing error
/*
function Person(firstName, lastName) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.firstName = firstName;
    this.lastName = lastName;
}*/


//use this to handle the mmistake of not using new keyword automaticallly
/*
function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = Person("John", "Doe");

console.log(person.firstName);
*/




//PROTOTYPES

/*When you call the getFullName() method on the p1 or p2 object, the JavaScript engine searches for the method on these objects. 
Because the JavaScript engine doesn’t find the method there, it follows the prototype linkage and searches for the 
method in the Animal.prototype object.

Because the Animal.prototype object has the getFullName() method, JavaScript stops searching and executes the method.*/
function Animal(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
Animal.prototype.getFullAnima = function () {
    return this.firstName + ' ' + this.lastName;
  };
Animal.prototype.getGender='male';
  
let a1 = new Animal('Virat', 'Kohli');
let a2 = new Animal('Dhoni', 'Kohli');
console.log(Animal.prototype);//getFullAnima, getGender.....those two created prototype properties for constructor function
console.log(a1.getFullAnima());
console.log(a2.getFullAnima());

  //we can access prototype of object in this way
  //console.log(person.__proto__ === Object.prototype); 


  //prototypal inheritance on objects
  
  //example1
let man = {
    lname: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.lname;
    }
};
let teacher = Object.create(man);
console.log(Object.getPrototypeOf(teacher) === man);//true
console.log(Object.getPrototypeOf(teacher));//{ lname: 'John Doe', greet: [Function: greet] }
console.log(teacher.lname);//John Doe
console.log(man.hasOwnProperty("lname"))//true
console.log(teacher.hasOwnProperty("lname"))//false


//u can add more properties, if u dont update the properrty it takes parent proptotype property vlue
teacher = Object.create(man, {
    
    teach: { 
        value: function(subject) {
        return "I can teach " + subject;
    }}

});
console.log(teacher.teach('maths'));//I can teach maths

//example2
//prototype chaining

const obj={
    name:"Ajay",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll
    }
  }
console.log(obj);//{ name: 'Ajay',getName: [Function: getName], getRoll: [Function: getRoll]}

const obj2={
    roll:1,
    // name:"krishna",
    __proto__:obj
}
console.log("name is "+obj2.getName()+ " roll is "+ obj2.getRoll());//name isAjay  roll is 1
const obj3={
    class:12,
    __proto__:obj2
}

console.log(obj3);//{ class: 12 }..bcz class is only its owen perpperty
console.log(obj3.getName()); //krishna if name property present in obj2
//obj3 is taking obj2's blueprint...if name is not presemt in obj2, it takes from obj

    
//Array's have inbuilt properties like filter, reduce, map,push pop(), etcc...
//to add new property to an array...check below
Array.prototype.show=function(){
    return this;
}
const cities=["delhi"];
console.log("Prototype property  of array"+cities.show());//[ 'delhi' ]

Array.prototype.convertToObj=function(){
    let newObj={};
    this.forEach(element=>{
        newObj[element]=element;
    })
    return newObj;
}
console.log(cities.convertToObj()) //[Delhi:"Delhi"]


//prototypal inheritance on functions

const student={
    name:"Ajay",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll
    }
}
function MyProto(name,roll){
    this.name=name;
    this.roll=roll;
}
MyProto.prototype=student;
const mypro=new MyProto("sindhu","13");
console.log(mypro);//{ name: 'sindhu', roll: '13' }


function Creature(legs) {
    this.legs = legs;
}

Creature.prototype.walk = function() {
    console.log('walking on ' + this.legs + ' legs');
}

function Duck(legs) {
    Creature.call(this, legs);
}

Duck.prototype = Object.create(Creature.prototype);
Duck.prototype.constructor = Creature;


Duck.prototype.fly = function() {
    console.log('flying');
}

var pigeon = new Duck(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly();  // flying