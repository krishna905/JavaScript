let car={
    make:'bmw',
    year:2010,
    'screen type': ' black',
    getPrice:function(){
        return 5000;
    },
    printDesc:function(){
        console.log(this.make+ " "+ this["screen type"]+ " "+ this.year);
    }
}
car.printDesc(); //bmw black 2010
console.log(car.getPrice())//5000
console.log(car['year'])//2010
//car[1]//wromg, will give u undefined


//declaring obj and initialiazing with propertes separately
let anotherCar={}
anotherCar.name="bib";
anotherCar.age=25;
console.log(anotherCar) //name:bib , age:25

//object inside an object (chaining)
let myVar={
    myProp:{
        hero:'Vikram',
        heroine:'Kajal'
    }
}
console.log(myVar.myProp.hero+ " "+ myVar.myProp.heroine);//Vikram Kajal


//2arrays of objects inside an object
let company={
    customer:[
        {firstname:"steve", lastName:"geller"},
        {firstname:"monica", lastName:"geller"}
    ],
    employee:[
        {firstname:"Joey", lastName:"tribiani", 'phone num':2873423},
        {firstname:"Rachel", lastName:"Green", 'phone num':['988 988 2788', '877 565 3432']}

    ]
}

console.log(company)//all details




//object Properties
let person = {};
person.age = 25;
delete person.age;
console.log(person.age);//undefined....as we have deleted this age property


//to make it non deleetable, we use defineProperty with confiuration false
'use strict';

let ppl = {};

Object.defineProperty(ppl, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});

delete ppl.value//throws errror

Object.defineProperty(person, 'ssn', {//if u place ppl inplace of person, it throws error..
    configurable: true
});//throws error, cannot redefine, once defined


let men = {};
men.age = 25;
men.ssn = '012-38-9119';

for (let property in men) {
    console.log("mens's property :"+ property);
}//u can  get both age, ssn property using for in loop

let superMan = {};
superMan.age = 25;
superMan.ssn = '012-38-9119';

Object.defineProperty(superMan, 'ssn', {
    enumerable: false
});

console.log(person.propertyIsEnumerable('ssn')); //false...tat method is for checking whther it is enumerable
for (let prop in superMan) {
    console.log(prop); //age...cannot render ssn property, because enunmerable is false
}




//accessor property
let man = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(man, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});
console.log(man.fullName);// john dae


//we can also define multiple properties inside defineProperty
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');



let black = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(black, 'firstName');

console.log(descriptor);// return all 4 properties as true and with value



//Object destructuring definetion----
//JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//example1
let bigMan = {
    firstName: 'John',
    lastName: 'Doe'
};
let fname1=bigMan.firstName; //traditional way of assigning
let { firstName: fname, lastName: lname } = bigMan; //object destruction way 
console.log(fname)//John
console.log(lname)//doe


//example2
let year, model;
({year,model}={
    name:"Bob",
    year:2020,
    age:20,
    model:"male"
})
console.log(year+ " "+ model)//2020 male
//object nested destructing

let employ = {
    id: 1001,
    name: {
        frontName: 'PHOEBE',
        endName: 'bOOFAY'
    }
};
let {
    name: {
        frontName:frName, //can write variable,if u wanna acess with diff var name . else leave it...
        endName
    }, name
} = employ;

console.log(frName); // phoebe
console.log(endName); // boofay
console.log(name);//{ frontName: 'PHOEBE', endName: 'bOOFAY' }



//function destructig 
//traditional appriach
let display1 = (person) => console.log(`${person.firstName} ${person.lastName}`);

let friend = {
    firstName: 'nAREDR',
    lastName: 'buing'
};

display1(friend);


//destrucxtion
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let anime = {
    firstName: 'Kim',
    lastName: 'Kong'
};

display(anime);



//Object chaining operator
function getUser(id) {

    if(id <= 0) {
        return null;
    }
    return {
        id: id,
        username: 'admin',
        profile: {
            language: 'English'
        }
    }
}
let user = getUser(1);//if id is null or <=0, user wil be null and profile throws error
let profile = user.profile; 
let profile1 =  user && user.profile; //this AND operator checks if user is null|| valid
//if its null || undefined || invalid...it womt assign to profile1

let profile3 = user ?. profile;
/* it means
let profile = (user !== null || user !== undefined)
            ? user.profile
            : undefined;
            */

//let avatar = user ?. profile ?. avatar; if profile is undefined, go with avatar

let defaultProfile =  { default: '/default.png', language: 'English'};

let user1  = getUser(2);
let profile5 = user ?. profile ?? defaultProfile;//using chaining operator with nullish
//nullish operator works only if variable is null or undefined




//optional chaining with functin calls
let file = {
    read() {
        return 'file content';
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    }
};
let data = file.read();//file contnet
console.log(data);
//let compressedData = file.compress();  //error, coz compress method isnt available
let compressedData = file.compress?.();//executes if not null (undefined). prevents from throw eror



//concise syntax
//traditional
let server = {
	name: "Server",
	restart: function () {
		console.log("The" + this.name + " is restarting...");
	}
};

//removed colon & function ..for method type property in object
let server1 = {
    name: 'Server',
    restart() {
        console.log("The" + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};
server1['starting up'](); //calling method



//Object assign

//The Object.assign() copies all enumerable and own properties from the source objects to the
// target object. It returns the target object.

//The Object.assign() invokes the getters on the source objects and setters on the 
//target. It assigns properties only, not copying or defining new properties.

let widget = {
    color: 'red'
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget); //{ color: 'red' }


//Merging two objects into single object
let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox); //{ height: 10,width: 20, color: 'Red',borderStyle: 'solid'}

//if box and style has same property ..target object i.e., styleBox takes latest  object's value..
///if Box has (color : Red)....Style has (color : Blue).....styleBox will take color:blue