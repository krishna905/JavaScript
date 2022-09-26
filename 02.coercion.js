const val_1 = "10";
const val_2 = 10;
let total = val_1 + val_2;//total holds string datatype and returns 1010 called imlicit coercion
let total1= val_1 - val_2;//total1 holds number datatype and retuens 0 called imlicit coercion because JS itself chages datatype
console.log(total + " "+ total1);

let myVar = String(10); //myVar holds string dattype due to explicit coercion
let myNum =Number("100");//myNum holds Number dattype due to explicit coercion
console.log(typeof myVar + " "+ typeof myNum );

let myVar_1 = 10 + '';  //implicit coercion to string as we r concatenated with strimg
let myVar_4 = true + ''; //implicit coercion to string
console.log(myVar_4); 
console.log(myVar_1);

let myVal1 = Boolean(0);
console.log(myVal1) // returns false

let myVal2 = Boolean('');
console.log(myVal2) // returns false

let myVal3 = Boolean(NaN);  
console.log(myVal3) // returns false

let myVal4 = Boolean(false); 
console.log(myVal4) // returns false

let myVal5 = Boolean(undefined);
console.log(myVal5) // returns false

let myVal6 = Boolean(null);
console.log(myVal6) // returns false

let myVal7 = Boolean(23);
console.log(myVal7) // returns true

let myVal8 = Boolean(-23);
console.log(myVal8) // returns true

let myVal9 = Boolean(23.51);
console.log(myVal9) // returns true

let myNum2 = Number('hello');
console.log(myNum2); // NaN is returned.


let typeVal_1 = (null == 0);
console.log(typeVal_1);// returns false

let typeVal_2 = (null == undefined);
console.log(typeVal_2);// returns true

let val1 = (NaN == 'hello');
console.log(val1);  // returns false

let val2 = (NaN == 0);
console.log(val2);  // returns false

let val_3 = (NaN == NaN);
console.log(val_3);  // returns false

let d=parseInt('bob', 10);
let e =isNaN(d);
console.log(e);//returns true


const myContainer = {
    height: 4,
    width: 2,
    valueOf: function() {
      return this.height * this.width
    }
  }
  // valueOf returns 8 as 4*2 = 8
  
  const num = 12;
  console.log(num + myContainer) //20

