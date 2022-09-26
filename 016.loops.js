var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(var prop in person) {
    console.log(prop + ':' + person[prop]);
}//firstName:John  lastName:Doe  ssn:299-24-2351


//inheriting properties (prototypal inheritnce)
var decoration = {
    color: 'red'
};

var circle = Object.create(decoration);
circle.radius = 10;


for(const prop in circle) {
    console.log(prop); //radius color
}
for(const prop in circle) {
    if(circle.hasOwnProperty(prop)) {
        console.log(prop);
    }//radius, because we used hasOwnProperty method
}


const woman = {
    firstName: 'Monica',
    lastName: 'tribbbiani',
    age: 25
};

const profile = Object.values(woman);

console.log(profile); //returns values in an array which are own properties



const ssn = Symbol('ssn');
const widow = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(widow);

console.log(kv);//array of key-value pairs of object


let box = {
    height: 10,
    width: 20,
    color: 'Red'
};

let style = {
    color: 'Blue',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox); //copying properties of two differnet objects into one object
//here color of style is overwritten by box because of later assigning







//Array for in
const items = [10 , 20, 30];
let total = 0;

for(const item in items) {
    total += items[item];
}
console.log(total); //60

var arr = [];
// set the third element to 3, other elements are `undefined`
arr[2] = 3; 

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}// undefined, unedefined, 3....because only 3rd element defined

for (const key in arr) {
    console.log(arr[key]);
}//3, for in loop ignores undedfined values






const companies=[
    {name:"Google", type:"Product based", start:1981},
    {name:"Amazzon", type:"Product based", start:1992},
    {name:"Paytm", type:"Product based", start:1999},
    {name:"Coforge", type:"Service based", start:1989},
    {name:"Mindtree", type:"Service based", start:1989}
]

const ages=[33,12,20,19,43,54,23,78,65,41,10,14,69,25];

/*for(let i=0;i<=companies.length;i++){
    console.log(companies[i].name)
}*/

//forEach
companies.forEach(function(comp,idx){
    console.log(comp.name +" "+ idx) //all company names and idx of them  in array

})
companies.forEach((com,idx)=>{
    console.log(com.name +" "+ idx)
})



//Filter
/*for(let i=0;i<=ages.length;i++){
    if(ages[i]>=20)
    console.log(ages[i]);
}*/

let filteredAge= ages.filter(function(age){
    if(age>=20)
   return true;
})
console.log(filteredAge)//returns array of filters values

const ArrowFilter = ages.filter(age=>(age>=20))
console.log(ArrowFilter)//returns array of filterd values

const sb=companies.filter(function(com){
    if(com.type === "Service based"){
        return true;
    }
})
console.log(sb)//returns those two companies which are service- basd

const ab=companies.filter(com => com.type==="Service based")
console.log(ab)//same as above but used arrow funct


//Map
companies.map(function(com,idx){
    console.log(com)//returns all company detiils
})


let dummy = companies.map((com,idx)=>{
    return `${com.name} ${com.type}`
})
console.log(dummy)//returns all



//Sort
let sorted = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }else
       return -1;
})

sorted.forEach((com)=>console.log(com.name))//names of companies after sorting
console.log(sorted)//sorted based on start year in incrweasing order

let sorted1 = companies.sort((c1,c2)=> (c1.start < c2.start ? 1: -1))
   
console.log(sorted1)//sorted decreasing order ...using arrow func

let sortedAges = ages.sort((a,b)=>(a-b));
console.log(sortedAges)//sorted in increasing order


//Reduce
let summm = 0;
for(let i=0;i<ages.length;i++){
    summm+=ages[i];
}
console.log("total age is"+ summm)

const sumAge = ages.reduce(function(total,age){
    return total+age
},0)//0  is not required but....
console.log(sumAge)//506

const sumage=ages.reduce((total,age)=>  total+age,0)
console.log(sumage)//506