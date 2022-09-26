let arr = new Array(3);
arr=[1,2,3];
console.log(arr);
arr.push(5);
console.log(arr);

let arr1=Array(2); // u can use new or directly Array..doesnt matter
arr1=[1,2];
console.log(arr1);
//same example as above with strings

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];

seas.push('Red Sea');//added at end
seas.unshift('white Sea'); //added at begining

seas.pop();//removes last element frm array
seas.shift();//removes frist element frm array
console.log(seas);

let index = seas.indexOf('North Sea');//returns index
console.log(Array.isArray(seas)); // true , checks if its present, then true else false

let a=[1,2,3,4];
a[10]=100;
console.log(a);//[ 1, 2, 3, 4, <6 empty items>, 100 ]

let ab=[1,2,3,4,5];
ab.splice(1,2);//remove two elements from 1st position i.e., 1 4 5
console.log(ab)//1 4 5

ab.splice(1,0,7,8,9);//remove 0 items from 1st position , but add 7 8 9 from 1 position
console.log(ab)// 1 7 8 9 4 5

let bc=[1,2,3,4,5,6];
let x=bc.slice(2,5);//copies values from 2nd position till (5-1)th position
console.log(x);//3 4 5
let y=bc.slice(-3,-1); //copies from 3rd frm last...till (-1+1)th from last
console.log(y); //4 5

let fibanocci=[1,1,2,3,5,8,13,21];
console.log(fibanocci.join('-'))//1-1-2-3-5-8-13-21
console.log(fibanocci.reverse())//[ 21, 13, 8, 5, 3, 2, 1, 1 ]






let str=['weak', 'bigger', 'appple'];
console.log(str.reverse())//[ 'appple', 'bigger', 'weak' ]

str.sort();//sorts words accordingt to ascii
console.log(str);//'appple', 'bigger', 'weak'
console.log(str.reverse())// reverse of ascii values...'weak', 'bigger', 'appple' 
console.log(str[1].length)//length of str

let state='UnitedKingdome';
console.log(state.indexOf('d'));//5
console.log(state.startsWith('U'));//true
console.log(state.startsWith('K',7));//false
console.log(state.charCodeAt(3));//116------(Unicode of the character at a specified index)
console.log(state.lastIndexOf('e'))//13
console.log(state.match("K"));//[ 'K', index: 6, input: 'UnitedKingdome', groups: undefined ]
console.log(state.replace('dom', 'pppp'))//replacs.....UnitedKingppppe

 let greeting="Helo how are you"
 console.log(greeting.split(' '))//forms array...[ 'Helo', 'how', 'are', 'you' ]
 let greeting2="Helo"
 console.log(Object.assign([], greeting2))//[h,e,l,o]
 console.log(greeting.includes('how'))//true
 console.log(Array.from(greeting2))//[h,e,l,o]
 console.log(...greeting2)//h e l o

 let exp=23.313;
 console.log(exp.toString());//changes type to string
 console.log(exp.toFixed(2))//23.31 till 2 digits...if 6 -> 23.313000
 console.log(exp.toExponential(1));//2.3e+1

 
 console.log(Math.sin(45));//0.8509035245341184
 console.log(Math.random())//random num- between 0 to 1
console.log(Math.floor(2.8)) //2
console.log(Math.ceil(2.6));//3
let z=23.49;
console.log(Math.round(z))//prints based on nearest value round num->23.6=24..
console.log(Math.ceil(Math.random()*6));

let rep='Ha!'.repeat(3);
console.log(rep) //Ha! Ha! Ha!


let arrr=[4,8,15,16,23,42,1,1,2,3,5,8,21,13];
let filCombine=arrr.filter((x)=>{if(x<15) return x;});
console.log(filCombine)//[ 4, 8, 1, 1, 2, 3, 5, 8, 13 ]

console.log(filCombine.every((num) =>num<10))//false, because few nums are greater than 10
console.log(filCombine.every((num) =>num<16))//true
console.log(filCombine.some((num) =>num>30))//false, atleast 1 num is not gratter than 30




function myDate(){
    let da=new Date();
    console.log(da)
    console.log(da.getFullYear());
    console.log(da.getDay() + " "+ da.getHours()+" "+ da.getTime()+" "+ da.getMonth())
    console.log(Date.now())
}
myDate();


function getTime(){  
    var today=new Date();  
    var h=today.getHours();  
    var m=today.getMinutes();  
    var s=today.getSeconds();  
    // add a zero in front of numbers<10  
    m=checkTime(m);  
    s=checkTime(s);  
    console.log(h+":"+m+":"+s);  
    setTimeout(function(){getTime()},1000);  
}  
    //setInterval("getTime()",1000);//another way  ------wrong
function checkTime(i){  
    if (i<10){  
      i="0" + i;  
     }  
    return i;  
}
getTime();  
