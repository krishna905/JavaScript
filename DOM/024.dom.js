//console.log("hi im in dom .js file")


/*
//taking inputs frm the user and printing in the console and web page using document.write()

let a = parseInt(prompt("enter a value"));
let b =  parseInt(prompt('enter b value'))

let sum=a+b;

document.write(sum);
console.log(sum);
*/


/*
prints true/false based on the yes/cancel we click on the alert pop

let a = confirm("Are you sure")
console.log(a);

*/


/*
prints the current height n wdth of the webPage

let a=window.innerHeight
let b=window.innerWidth;

console.log(a+" " +b)



*/
//pop up an alert on  button clcikc
function button(){
    alert('hi this is event from, html')
}
//changes text on button click
function changeText(){
    document.getElementById('heading').innerHTML="learning JS from different sources"
}
//popup an alert of that particular id content  
function popMess(){
    var c= document.getElementById('popupAlert').innerText;
    alert(c);
}

//displays whole element of that classname...if they are muliple elements with same className
//it displasy the first element
function loading(){
    var x=document;
    x=document.querySelector('.left');
    console.log(x);//this is section 1
    
    //seraches for contsiner class and then second clss inside the cntainer clss
    var z=document.querySelector(".container");
    var y=z.querySelector('.second');
    console.log(y);//this is section right


    //all the child class tags inside the container class
    var p=document.querySelector(".container");
    var q=p.childNodes;
    console.log(q);//Nodelist
    console.log(p.children)
    console.log(p.children[2])//this is center section....prints second child element
    console.log(p.firstChild);//text property
    console.log(p.firstElementChild);//whole first child element
    console.log(p.childElementCount)//no of children in container which attaches to  p
    console.log(p.parentElement)// returns the parent element of the container

    var ab=document.querySelector('.second');
    console.log(ab.nextElementSibling);//displays the next sibling inside the smae parent
    console.log(ab.previousElementSibling);//displays the previous sibling inside the smae parent
}
function dom()
{
   
console.log(document.forms["myForm"]["firstName"].value)
    console.log(document.forms["myForm"]["lastName"].value)
    
}
