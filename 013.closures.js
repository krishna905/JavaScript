
//closure provides - takes advantage of lexical scope..it take the values of elements declaref in parenmt method
//by retaining the values ..
var sum=function(a){
console.log("Helo world"+a)
var c=4
return function(b){
   return a+b+c 
}

}
let store = sum(200)//calling----helo world200
console.log(store(5))//209


//new example
//if there are more than 1 function inside trhe parent functinn
var sum22=function(a,b,c){
return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree : function(){
            return a+b+c;
        }
}
}
let store22=sum22(3,4,5)//caaling
console.log(store22.getSumTwo());//7
console.log(store22.getSumThree())//12






let Kname = 'John';

function greeting1() { 
    let message = 'Hi';
    console.log(message + ' '+ Kname);
}//Hi John ____closure example
greeting1();


//example1
function Lname(fname){
    return function(){
        console.log('my name is'+ fname);
    }
}
let bob=Lname('bob');
bob()

let geller=Lname('geller');
geller()

//taking afdavantgoeeus of outer scope

//example2
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();

//example3
function greeting12() {
    let message = 'Hi feiends';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting12();
hi(); // still can access the message variable......SayHi is closure



//example4
function greeting123(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHii = greeting123('Hi');
 let sayHello = greeting123('Hello');
 
 console.log(sayHii('John')); // Hi John
 console.log(sayHello('John')); // Hello John



 //example5
 for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
   
} /*after 4 second(s):4
after 4 second(s):4
after 4 second(s):4*/
//if uses let, u wil get 1 2 3 
//or use IIFE
for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}/*after 1 second(s):1
after 2 second(s):2
after 3 second(s):3*/