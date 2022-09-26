const datas=[
  {name:"krisjhna", profession:"eating"},
  {name:"Sidhu", profession:"est"}
]

function getDatas(){
  setTimeout(()=>{
    let output="";
    datas.forEach((data, index)=>{

      output+=`<li>${data.name} ${index}</li>`
    })
    document.body.innerHTML=output;
  },2000) //3000 , then it  display new data
}
//getDatas()   /krishna 0 sidhu 1

function createData(newdata){
  setTimeout(()=>{
    datas.push(newdata)

  },2000)
}
createData({name:"vivek", profession:"soft"});
getDatas()      ///krishna 0 sidhu 1 vivek 2....it happens only when time of first func is greater than second funct...
//to eleiminate this, we use call back



//cCALLBACKS
function createData1(newdata,callback){
  setTimeout(()=>{
    datas.push(newdata)
    callback();

  },2000)
}
createData1({name:"vivekRam", profession:"flirt"},getDatas); //krishna 0 sidhu 1 vivek 2
//here it calls the getDatas function after pushin into the datas...In the first case,
///we called the getDatas and creatdata...but create data has same time,..so it cant be pushed


//example2

console.log("start")
function getN(name){
  setTimeout(()=>{
    console.log("INside set timout")
    return 'this is'+ name;
  },2000)
}
const nm1 = getN('Sidhu')
console.log(nm1);
console.log('End')
//this doesnt print sidhu..because it acts as sync funct


//using callback
console.log("start")
function getNa(name, callback){
  setTimeout(()=>{
    console.log("INside set timout")
    callback(name);
  },3000)
}
const nm = getNa('Sidhu',(nm) =>{ console.log("call back func names is "+nm)})
console.log('End')
//this acts as async, bcz we used call back and waited for the execution

console.log("Hobbies start")
function getHobbies(name,callback){
  setTimeout(()=>{
    console.log("Inside Hobbies setTimeout")
    callback(['Crick', 'Reading','Dancing'])
  }, 1000)
}
const nmm = getNa('Krishna', (nmm)=>{
  console.log("Name is : "+nmm);
  getHobbies(nmm,(hobby)=>{
    console.log("hobbies re : "+hobby)
  })
})

console.log("Hobbiue end")

//In the above getHobbies example, we given callback inside a callback
//this created difficulty in undersatmding for the user, so we use proimise to avoid Callback Hell


//PROMMISES


/*Syntax ----------------
const promObj = new Promise((resolve,reject)=>{
  let req=true;
  if(req==true){
    resolve("Request Success")
  } else{
    reject("Request rejected")
  }
}).then(
  (value)=>{console.log(value)},
  (error)=>{console.log(error)}
)

-------Syntax for chaining...promise

const promObj = new Promise((resolve, reject)=>{
  let num=10
  resolve(num)
}).then(
  (value) => {console.log(value)
  return value+10;
}).then(
  (value) =>{console.log(value)
 
}); 

---------Syntax for error handling....catch()

const promObj = new Promise((resolve,reject)=>{
  let req=true;
  if(req==true){
    resolve("Request Success")
  } else{
    reject("Request rejected")
  }
}).then(
  (value)=>{console.log(value);
}).catch(
  (error)=>{console.log(error);
})


-------Syntax for chaining ...catch()

const promObj = new Promise((resolve, reject)=>{
  let num=10
  resolve(num)
}).then(
  (value) => {console.log(value)
  return value+10;
}).then(
  (value) =>{console.log(value)
}).then(
  ()=>{throw new Error("Eror Found")
}).catch(
  (error)=>{console.log(error)
}); 


-------Syntax for settling promise...finally()
const promObj = new Promise((resolve,reject)=>{
  let req=true;
  if(req==true){
    resolve("Request Success")
  } else{
    reject("Request rejected")
  }
}).then(
  (value)=>{console.log(value);
}).catch(
  (error)=>{console.log(error);
}).finally(()=>{console.log("Cleaned")})


*/

console.log("Startttt")
function getNam(name){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("INSIDE NAME METH")
      resolve(name);
    }, 2000)
  })
}

function getHob(name){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Inside HOBBIE SETOT")
      resolve(['cricket','hocjey','fsnce']);
    },1000)
  })
}
/*
getNam('Krishna')
.then(nm => getHob(nm))
.then(hobby => console.log(hobby))
*/
//using async & await
async function showHob(){
  try{
  const nm = await getNam('vamsi')
  const hobby = await getHob(nm)
  console.log(hobby)
  }catch{
    console.log("coulf not fetch hobbies")
  }
}
showHob()
console.log("ENDDD")




const promObj1 = new Promise((resolve, reject)=>{
  letvreq 
})
function createData2(newdata){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      datas.push(newdata)
      let error=true;
      if(!error){
        resolve();
      }else{
        reject("kuch sahi nhi bc")
      }
   
  
    },2000)
  })
}

createData2({name:"asha", profession:"tortureing"}).then(getDatas).catch(err=> console.log(err))
//if error is false..it prints getdatas elements ...else kuch sahi nhi bc


//asynxc & await
async function start(){
  await createData({name:"Arun", profession:"apraise rejefct"})
  getDatas();
}
start()//it wont call getDatas until createData is done






const fs=require('fs');
const { resolve } = require('path');
function greet(filename){
  return new Promise((resolve,reject)=>{
    fs.readFile(filename,"utf-8",(err,data)=>{
      if(err){
        reject(err.message)
      }
      resolve(data);
    })
  })
}
let greetProm = greet('018.file.txt');
//then and catch
greetProm.then((data)=>{
  console.log("HELO", data);
}).catch((err)=>{
  console.log(err);
})
//HeLLO Krishna here

//finding the  partciular user from users object
function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }

function findUser(username) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username);
    return user;
  }
  console.log(findUser('john'));//{ username: 'john', email: 'john@test.com' }


  //usig call back for promises
  function getItems(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUse(username, callback) {
    getItems((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUse('jane', console.log);
  


  //example1
function getSols() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'monica', email: 'monica@test.com' },
          { username: 'phoebe', email: 'phoebe@test.com' },
        ]);
      }, 1000);
    });
  }
  
//   function onFulfilled(users) {
//     console.log(users);
//   }
  
const promise = getSols();
  promise.then((users) => {
    console.log(users);
  });
//or getSols().then(users) => {.....}

  // or u can use this ....promise.then(onFulfilled);


  //example2
let success = true;

function getNames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'Ross', email: 'john@test.com' },
          { username: 'Chnadhlers', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

/*function onFulfilled(lists) {
  console.log(lists);
}
function onRejected(error) {
  console.log(error);
}*/

const reslt = getNames();
reslt.then(
  (lists) => console.log(lists),
  (error) => console.log(error)
); //{ username: 'Ross', email: 'john@test.com' }, { username: 'Chnadhlers', email: 'jane@test.com' }

/*const result = getNames();
result.then(onFulfilled, onRejected);*/  
//{ username: 'Ross', email: 'john@test.com' }, { username: 'Chnadhlers', email: 'jane@test.com' }