function sayHello(){
    console.log('helo');
}
sayHello();//hello
let a=sayHello();
console.log(a);//undefined, a calls function, because it is not returning anything

function sayHy(){
    return 'hyy';
}

let z=sayHy();
console.log(z);//hyy, a calls function, because it is returning the string hy
let b=sayHello;
b();//hello.......because b variables points to sayHello. then as it contains function , we called as function to invoke it

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum; //even though we dont pass paramters in add(), we get output because of argument object
}
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15

function two(){
    return function(){
        console.log('two');
    }
}
two()();//two

function three(){
    return function(){
        return 'threee';
    }
}
console.log(three()())//three


//callBack functions
//example1

//traditional way
function filter(numbers) {
    let results = [];
    for (const number of numbers) {
      if (number % 2 != 0) {
        results.push(number);
      }
    }
    return results;
  }
  let shows = [1, 2, 4, 7, 3, 5, 6];
  console.log(filter(shows)); ///1 7 3 5


  //using call back
// function makeOdd(number) {
//     return number % 2 != 0;
//   }
  
//   function filter(numbers, fn) {
//     let results = [];
//     for (const number of numbers) {
//       if (fn(number)) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
//   let arrNums = [1, 2, 4, 7, 3, 5, 6];
//   console.log(filter(arrNums, makeOdd));//1 7 3 5


  //example3
  //ananomous function (without a name...chekc the line where oddNumbers declared)
  function filterArr(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let arrInts = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filterArr(arrInts, function (number) {
    return number % 2 != 0;
  });
  //let oddNumbers = filter(numbers, (number) => number % 2 != 0);
  
  console.log(oddNumbers);





function addd(a, b) {
    return a + b;
}

let summ = addd;
//console.log(summ(1,10))

function average(a, b, callBack) {
    return callBack(a, b) / 2;
}

let result = average(10, 100, summ);
let res=average(10,90,addd);//50

console.log(result+ " "+ res); //55 50




let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
  ];

function compareBy(propertyName) {
    return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
  
  // sort products by name
  console.log('Products sorted by name:');
  products.sort(compareBy('name'));
  
  console.table(products);
  
  // sort products by price
  console.log('Products sorted by price:');
  products.sort(compareBy('price'));
  console.table(products);
  




//example for IIFE
//example1
let sum1 = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum1);

//example2
(function() {
    var counter = 0;

    function add(a, b) {
        return a + b;
    }

    console.log(add(10,20)); // 30
}());


//example
let person = {
    firstName: 'Sindhu',
    lastName: 'Kri'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person); //Sindhu Kri

//Anonymous functions are functions without names.
//Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

let add1 = function (a, b) {
    return a + b;
};

console.log(add1(2,3))//5




//Arrow functions

//example1
let add3 = (a, b) => a + b;   
console.log(add3(3,9));//12
console.log(typeof add3); // function
console.log(add instanceof Function); // true

//example2

//traditional way
let nus = [4,2,6];
nus.sort(function(a,b){ 
    return b - a; 
});
console.log(nus); // [6,4,2]

//by using arrow functions
let nums = [4,2,6];
nums.sort((a,b) => b - a);
console.log(nums); // [6,4,2]

//example
let profiles=['david', 'eddie', 'alex', 'michael'];
let i=0;
profiles.map((profile) =>{i++ ; console.log(`howdy ${profile} ${i}`)})
/*
howdy david 1
howdy eddie 2
howdy alex 3
howdy michael 4*/


//example3
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(star => star.length);

console.log(lengths);//4 3 5....converted array of strings to array of lengths using map


//example4
let setColor = color => ({value: color });
let backgroundColor = setColor('Red');
console.log(backgroundColor.value); // "Red"

//example5
//traditional way of function and this value
function Vehicle() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        let self = this;
        setTimeout(function () {
            console.log(self.speed);
        }, 1000);

    };
}
let toy = new Vehicle();
toy.speedUp(50); // 50;

//using arrow function
function Plane() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        setTimeout(
            () => console.log(this.speed),
            1000);

    };
}
let plane = new Plane();
plane.speedUp(50); // 50;


//example6
function show() {
    return x => x + arguments[0];
}

let display = show(10, 20);
let showCard = display(5);
console.log(showCard); // 15




//passsby value, referrence

let person1  = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  obj={name:'Krishna', age:22}
  
  increaseAge(person1);//passed by refernce ..not passed by valeu
  
  console.log(person1);//john, 26.. we passes person1 object as refernce,  obj values also gets chamged.
    console.log(obj); //krishna 22






  let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
} //recursive fnction

let newYearCountDown = countDown;
// countDown = null;
countDown(10)




//default arguments
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'


//throws error if we dont pass argyuments
function requiredArg() {
    console.log('The argument is required');
 }
 function add12(x = requiredArg(), y = requiredArg()){
    return x + y;
 }
 
 //console.log(add12(10)); // argument required NaN
 console.log(add12(10,20)); //  30


 //arguments length
 function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3


//arguments length can be find using functionName.length
function add(x, y) {
    return x + y;
}

console.log("length of args are"+ add.length); // 2
console.log(add.prototype); // Object{}


//function  type --> using call and apply
let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

const sayy = function (message) {
  console.log(message);
  console.log(this.type + ' says ' + this.sound);
};

sayy.apply(cat, ['What does a cat say?']);
sayy.call(dog, 'What does a dog say?');


//CALL & APPLY && BIND


let userDet = {
    name:"krishna",
    Age:22,
    Desig:"student",
    print:function(){
        console.log(this.name+ " ----"+ this.Age)
    }
}
//userDet.print() //krishna ----22

//using CALL, Now we create another user, but we use print funct of other user obj using call method
let userDet2 = {
    name:"vamsi",
    Age:24,
    Desig:"student",
}
//function borrowing
userDet.print.call(userDet2);//vamsi ----24

//if any method is outside of all the objects....then
let printname = function(){
    console.log(this);
}

let printPersonal = function(city, country){
    console.log(this.name+" "+ city+" "+country)
}
printname.call(userDet)//{ name: 'krishna', Age: 22, Desig: 'student', print:[Function:print]}
printname.call(userDet2)///{ name: 'vamsi', Age: 24, Desig: 'student' }
//APPLY
printPersonal.call(userDet,"Bhimavaram","India")//krishna Bhimavaram India
printPersonal.apply(userDet2,["Lahore", "pakistan"])//vamsi Lahore pakistan
//BIND...it stores output at one variable and prints whenevr user wanted
let newFun = printPersonal.bind(userDet,"singapore","paris")
newFun()//krishna singapore paris



//bind method
//here aircraft has no start method, but we can access start method of car using bind
let car = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
};

let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};
let taxiing = car.start.bind(car);
let taxiing2 = car.start.bind(aircraft);
taxiing();//start with 5km/h
taxiing2()//start wiyh 10 km/h


//call() method of function
var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function tell(name) {
    console.log(this.greeting + ' ' + name);
}
tell.call(this,'John'); //undefined john.....because this takes global object which is greeting 
tell.call(messenger,'John');//helo john


//call method.... chaining constructors of an object (borrowing)
function Dia(height, width) {
    this.height = height;
    this.width = width;
  }
  
function Bud(height, width, color) {
    Dia.call(this, height, width);//accessing dia properties using call
    this.color = color;
  }
  
  let bud = new Bud('red', 100, 200);
  
  console.log(bud);//{ height: 'red', width: 100, color: 200 }


  //filter via call
  function isOdd(number) {
    return number % 2;
  }
  
  function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
  }
  
  let results = getOddNumbers(10, 1, 3, 4, 8, 9);
  console.log(results);//1 3 9



  //apply() method of function
  const perso = {
    firstName: 'John',
    lastName: 'Doe'
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
let ress = greet.apply(perso, ['Hello', 'How are you?']);
console.log(ress);


//apply....chaining of objects(borrowing)
const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};
const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};
let answer = computer.turnOn.apply(server);//Dell powerEdge t30 is On
console.log(answer);


//apply method to appen the arrays
let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr); //1 2 3 4 5 6 


//bind() method of function
let detail = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

setTimeout(function () {
    detail.getName();
}, 1000);
//u can use bind
let f = detail.getName.bind(detail);//john doe
setTimeout(f, 1000);//john doe





//bind..chainig of objects..(borrowing)
let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};
let run = runner.run.bind(flyer, 20);
run(); //flyer runs at 20 mph




//REST paramter
//example1


//rest converts elements into array

function adds(a,b,c,...other){
    console.log(other);//[6,7,8,95,6]
    return a+b+c;
}
console.log(adds(1,2,3,6,7,8,95,6))




function addit(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

console.log(addit(1, 2, 3));//6


//example2
//adding only nums using filtering out strings
function removeSum(...args) {
    return args
      .filter(function (e) {
        return typeof e === 'number';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      });
  }
  let fill = removeSum(10,'Hi',null,undefined,20); 
console.log(fill);//30


//example3
//combine strings
const combine = (...args) => {
    return args.reduce(function (prev, curr) {
      return prev + ' ' + curr;
    });
  };
  
let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters



  //example4
  //functin constructor...dynamic functions
var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);//1 2 3


  //SPREAD
//array to individual elements
  var conts=["kris","chjc",'akhf'];
  function getNames(name1,name2){
    console.log(name1,name2);
  }
  
  getNames(...conts);//kris chjc...jitne pass karte utni print karte h
 // getNames(conts)//[ 'kris', 'chjc', 'akhf' ] undefined.....we passed only three as paramters but whole array as arg
  //getNames(conts[0], conts[1], conts[2]);//kris chjc


  //REST ---objects
  var studs={
    name:"Krishna",
    age:"22",
    hobbies:["crick", "sing"]
  }
  //const{age}=studs; //takes only age
  const{...rest}=studs
  console.log(rest)//{ name: 'Krishna', age: '22', hobbies: [ 'crick', 'sing' ] }

  //SPREAD....oibjects
//duplucated the studs obj and updated the age..can use to copy oject and update using spread
  var newStud={
    ...studs,
    age:"30"
  }
  console.log(newStud)//{ name: 'Krishna', age: '30', hobbies: [ 'crick', 'sing' ] }
