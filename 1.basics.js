// function abc(){
//  document.getElementById("myP").innerHTML="Hi sun";
// }
// function test(){
//     var a=5;
//     console.log(a);
//     let b=6;
//     console.log(b);
//     b=10;
//     console.log(b)
// }

function type(){
    console.log('type of 5.132416544 '+typeof(5.132416544))//number
    console.log('type of aps without space '+typeof(''))//string
    console.log('type of aps with space '+typeof(' '))//string
    console.log('type of N '+typeof('N'))//string
    console.log('type of India '+typeof('India'))//string
    console.log('type of {"Name":"India"} '+typeof({"Name":"India"}))//object
    console.log('type of [Apple,Banana,Custard]'+typeof(['Apple','Banana','Custard']))//object
    console.log('type of {} '+typeof({}))//object
    console.log('type of []'+typeof([]))//object
    console.log('type of true '+typeof(true))//boolean
    console.log('type of false '+typeof(false))//boolean
    console.log('type of null '+typeof(null))//object
    console.log('type of NaN '+typeof(NaN))//number
    console.log('type of undefined '+typeof(undefined))//undefined
    function abc(){
        console.log('Hello')
    }
    console.log('type of abc() '+typeof(abc))//function


    let xyz="I am from planet Jupiter";
    for(let z of xyz){
        console.log(z);//prints each char
        console.log(xyz.indexOf(z));//prints index value
        
    }
    let st={name:"krishna", location:"HYDERBAD"}
    console.log(st) //printts whole objext
    for(let z in st){
    console.log(z);//prints attributes
        console.log(st[z]);//prints value at particular index
       
    }

    let arr=["bmw", "benz","lamborghini"];
    arr.forEach(element=>{
        console.log(element);
    })
    

}
type();


