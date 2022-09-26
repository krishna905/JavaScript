const fs= require('fs');
function process(err, data){
    if(err){
        return console.log(err.message)
    }
    console.log(data);
}
fs.readFile("08.file.txt", "utf8",process);

let name=function(str){
    return str+"my name is krishna"

}
console.log(name("hello"));
//In the above example, readFile is an asyn method, so it executes last bcz it gets added into stack

 

setTimeout(function() {
     console.log('i waited two secs');
            }, 2000);
//setTimeout makes that to execute the function after 2000ms(2  secs)

(function(){
    console.log('immediately invoked function expression i.e., IIFE');
})(); //this fuction wil call automatically after completeing functiob body...
//no need to call externally..callled IIFE

/* 
let count=0;
function timeout(){
    setTimeout(function(){
        console.log('hi '+ count++);
        timeout();
    }, 2000);
}
timeout();//prints hi count for every 2secs, because u gave function calll in inside the function itself
*/


//example 2

//using async method, i used setTimeOut
function evenOrodd(arg){
    if(arg%2 === 0){
        return "even";
    }else{
        return "odd"
    }
}

function waitAndExecute(funcToExec,time, args){

    setTimeout(()=>{
        console.log(funcToExec(args));
    }, time);
}
waitAndExecute(evenOrodd,5000,100);


