let hero="Villain";
console.log(hero.toLowerCase());//prints all charcster in lowercase

let heroine="VidyaBalan";
console.log(heroine.toUpperCase());//prints all charcster in upperrcase

let amount = 0.0000005;
console.log(amount);//5e-7

let amount1 = 3.14e8;
console.log(amount1);//3.14000000

let amount3 = 5e-7; 
console.log(amount3); //0.0000005

let amount4 = 0.2 + 0.1;
console.log(amount4);//0.30000000000000004

const max = 9_223_372_036_854_775_807n;
console.log(typeof max);//bigint.....if n not added at last..it is number
console.log(max);//9_223_372_036_854_775_807n

// binary
let nibbles = 0b1011_0101_0101;
console.log(typeof nibbles);//number
console.log(nibbles);//2901

// octal
let val = 0o1234_5670;
console.log(typeof val);//number
console.log(val);//2739128

// hex
let message = 0xD0_E0_F0;
console.log(typeof message);//number
console.log(message);//13689072

let amount5 = 120_201_123.05; // 120,201,123.05
console.log(typeof amount5);//number
console.log(amount5);//120201123.05

let expense = 123_450; // 12345
console.log(typeof expense);//number
console.log(expense);//123450

let fee = 12345_00; // 1234500
console.log(fee)//1234500

const budget = 1_000_000_000;
console.log(typeof budget);//number
console.log(budget);//1000000000


let c = 0o51; //octal reperestation
console.log(c); // 41 

//let d = 0o58;
//console.log(d); // SyntaxError, beacause octal ranges from 0-7

let e = parseInt('111',2);///binary literals
console.log(e); // 7

let f = 0b111;//we can declare binary literals started with 0b
console.log(typeof f)//its is number
console.log(f); // 7


let name = 'John';
let message1 = `Hi, I'm ${name}.`;

console.log(message1);

let result = 'abc' < 'bfr';
console.log(result); // true, //checks for first lettter's ascii value

let result1 = 'a' < 'B';
console.log(result1); // false