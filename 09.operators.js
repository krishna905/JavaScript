let energy = {
    valueOf() {
      return 100;
    },
  };

let power={
    toString(){
        return 50;
    }
  }
  
let currentEnergy = energy - 10;
console.log(currentEnergy);//90
//If a value is an object, the JavaScript engine will call the valueOf() method of the object to get the value for calculation.

let currentPower = power - 10;
console.log(currentPower);//40

//If the object doesn’t have the valueOf() method but has the toString() method, the JavaScript engine will call the toString() method to get the value for calculation.

let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

let remainder1 = -5 % 3;
console.log(remainder1); // -2

remainder1 = -5 % -3;
console.log(remainder1); // -2

let remainder2 = Infinity % 2;
console.log(remainder2); // NaN

let remainder3 = 10 % 0;
console.log(remainder3); // NaN

let remainder4 = '10' % 3;
let rem='10'%'3';//1
let rem2=10%'3';//1
console.log(remainder4); // 1

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1

let s = '10';
console.log(+s); // 10 as number because of +(unary operator)
console.log(s);// 10 as string

let f = false,
    t = true;

console.log(+f); // 0
console.log(+t); // 1

let name1 = 'alice',
    name2 = 'Bana';    

let result = name1 > name2;//compares each character ascii values and initializes
console.log(result); // true
console.log(name1 == 'alice'); // true

console.log("10" == 10); // true
console.log("10" === 10); // false
console.log("10" !== 10); // true, beacuse its not strictly same



let counter = 10;
let count=10;

console.log(!count); // false, beacuse it is having value and not operators retuns false
console.log(!!counter); // true, because first ! turns then var into actual boolean, then it returns real value of the variable

let b = true;
let result1 = b && (1 / 0);
console.log(result1);//infinty, as second one couldn't decide


//when there are all 3 opertors in an expresion, The logical operator precedence from the highest to the lowest is !, && and ||.



/*
let title;
let intro='hero';
title ||= 'untitled';
intro ||='heorine';

console.log(title);//untitled, as title is undefined
console.log(intro);//hero, as it is already defined

let person = {
    firstName: 'Jane',
    lastName: 'Doe',
         age:0,
};

person.lastName &&= 'Smith';
person.age &&=10; //0,because it is 0 due to &&....if defined with 1, then it becomes 10... 

console.log(person );


let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous'; //when it is not even decled... because of Nullish coalesing assignment operator (??=)

console.log(user); //{username: 'Satoshi', nickname:'anonymous'}

const name = null ?? 'John';  //John, because it is null
const age = undefined ?? 28; //28, because is undefined
let num=1?? 20;//1, because it wont take 20, because 1 is neither null nor undefined
console.log(age);


*/

let res = Math.pow(2,2);
console.log(res); // 4

res=2**3// alternative way to get a base to the exponent power 
console.log(res); // 8

let bigIntRes = 2n ** 3n;
console.log(bigIntRes); // 8n, due to bigINT

//let wrong = -2**3;, JS wont allow u to put unary opetaor  before the base number.

let right = (-2)**3;
console.log(result); // -8