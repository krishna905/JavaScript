let firstName = Symbol('first name'),
    lastName = Symbol('last name');

console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)
console.log(typeof firstName); // symbol
console.log(Symbol() === Symbol()); //false
//let s = new Symbol(); // error , because symbol is primitive value, not oibject

let vamsi = Symbol.for('ssn');
let citizenID = Symbol.for('vamsi');
console.log(vamsi=== citizenID); // false because vamsi value i.e., ssn is different frm citizenId value i.e., vamsi
console.log( citizenID); //ssn



//bigInt
let pageView = 90n; //because n is added at last.. so it turns into bigInt
console.log(typeof(pageView)); // 'bigint'