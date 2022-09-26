

function abc(){
    fetch('https://jsonplaceholder.typicode.com/posts') //json data
    .then(function a(){
        return a.json();
    })
    .then(function b(){//parsed json data
        console.log(b)
    })
    .catch(function error(){
        console.log(error);
    })
}



document.getElementById("btn").addEventListener('click',makeRequest)

/*function makeRequest(){
    console.log("Button lcicked")
    const promiseObj = fetch('026.data.txt')

    console.log(promiseObj)//checking promise state---pending

    //if resolved it shows 
    promiseObj.then((res)=>{
        console.log(res);//as if it is success, it shows success as response ok
        return res.text() //return...to display the text from resource in the form of text
      }) .then((data) => {
            console.log(data)  //Helo krishna
        })


}*/


//Promise || to handle errors , use if(!res.ok)....if any error ok wil be false...
/*
function makeRequest(){
    console.log("Button clicked")
    fetch('026.data.txt').then((res)=>{
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res)
        return res.text()
    }).then((data)=>{
        console.log(data) ////Helo krishna
    }).catch((error)=>{
        console.log(error)
    })
}
*/


//To  display text on the browser

/*function makeRequest(){
    console.log("Button clicked")
    fetch('026.data.txt').then((res)=>{
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res)
        return res.text()
    }).then((data)=>{
        console.log(data)
        document.getElementById('divdata').innerText=data ////Helo krishna ---- in browser
    }).catch((error)=>{
        console.log(error)
    })
}*/




//using Async Await
/*
async function makeRequest(){
    console.log("button clickedd in async await")
    const res= await fetch('026.data.txt')
    console.log(res)
     const data = await res.text()
     console.log(data) // helo krishna
}*/

//Async && Await Error handling
/*
async function makeRequest(){
    try{
    console.log("button clickedd in async await")
    const res= await fetch('0226.data.txt')
    if(!res.ok){
        throw Error(res.statusText)
    }
    console.log(res)
     const data = await res.text()
     console.log(data)
    }catch(err){
        console.log(err)
    }
}
*/


//Async && Await---Showing data in browser
async function makeRequest(){
    try{
    console.log("button clickedd in async await")
    const res= await fetch('026.data.txt')
    if(!res.ok){
        throw Error(res.statusText)
    }
    console.log(res)
     const data = await res.text()
     console.log("data found is : " +data)
     document.getElementById("divdata").innerText=data
    }catch(err){
        console.log(err)
    }
}


/*async function abc(){
let a= new Promise(async function(resolve, reject){
    if(5>2){
        resolve('true');
    }
    else{
        reject('false');
    }
})
a
.then(function(){console.log("promise executed")})
.catch(function(){console.log("Some error was ther")})
document.getElementById('pro').innerHTML=await a;
}*/