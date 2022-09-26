//this key ....function invokation
function showw() {
    
    console.log(this === globalThis); // true, because it is global

    function display() {
        console.log(this ===  globalThis); // true, because it is global
    }
    display();
}

showw()



function show() {
    "use strict";
    console.log(this === undefined); // true, using strict, it woint be global
    console.log(this===globalThis)//false, bcz above see

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();

//this key, method invokation
let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}
console.log(car.getBrand());//Honda
//let brand = car.getBrand;     //undefined, we need to specify car object
let brand = car.getBrand.bind(car);
console.log(brand()); //Honda

let car1 = {
    brand1: 'Honda',
    getBrand: function () {
        return this.brand1;
    }
}

let bike = {
    brand: 'Harley Davidson'
}

let brand1  = car.getBrand.bind(bike);
console.log(brand1());//Harley devison, bcz we binded bike object

//contsructor invokation
function Car12(brand) {
    this.brand = brand;

    this.getFullBrand=function(){
        return this.brand;
    }
}

// Car12.prototype.getBrand = function () {
//     return this.brand;
// }

let car12 = new Car12('Hero glamour');
//console.log(car12.getBrand());//Hero glamour
/* let bmw = Car12('BMW');
console.log(bmw.getFullBrand()) */ //-throws error
//let bmw = Car12('BMW');, undefined cuz of no new keyword
/* 
Handle the no new keyword mistake by dispalying message
function Car(brand) {
    if (!new.target) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}*/



function fifth(){
    console.log(this.firstName+ " "+ this.lastName);
}
let customer1={
    firstName: "BOB",
    lastName: " Rcihar",
    print: fifth
}
let customer2={
    firstName: "CHandhler",
    lastName: " Bing",
    print: fifth
} 
customer1.print();//BOB  Rcihar
customer2.print();//CHandhler  Bing






//Indirect invokation using call() and apply()
function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let Bajaj = {
    brand: 'Pulasr'
};
let Ambasaddor = {
    brand: 'BMW'
};

//both call and apply allow u to explicitly set what u want to represent 'this'
getBrand.call(Bajaj, "It's a ");
getBrand.call(Ambasaddor, "It's an ");
getBrand.apply(Bajaj, ["It's a "]); // "It's a Honda"