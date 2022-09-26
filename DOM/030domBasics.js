//Dom manipulation


//ACCESSING HTML

//getElementById

const title= document.getElementById('main-heading');
console.log(title);
console.log(title.getAttribute('id')) // displays the id name



//getElementByClassName

const tut=document.getElementsByClassName('list-items');
console.log(tut);



//getElementByTagName
const tit=document.getElementsByTagName('li');
console.log(tit);


//querySelector
const que= document.querySelector('div'); //takes the content of the first div tag inside body
console.log(que) 

//querySelectorAll
const qall= document.querySelectorAll('div'); //takes all div tages inside body

console.log(qall);


const firstListItem= document.querySelector('.list-items');
console.log(firstListItem.innerHTML); //    <span>New</span> /n Star wars
console.log(firstListItem.textContent);//    New /n Star wars
console.log(firstListItem.innerText) // New Star wars




//STYLING HTML CONTENT

const due=document.querySelector('#main-heading')
due.style.color='red'

const lii= document.querySelectorAll('.list-items')

for(let i=0;i<lii.length;i++){
    lii[i].style.fontSize='2rem'
}


//CREATING ELEMENTS

const ul=document.querySelector('ul');
const last=document.createElement('li');

ul.append(last);
last.innerText='Thor'

//MODIFYING ATTRIBUTES & CLASSES
last.setAttribute('id', 'main-heading');//gets all styles of main-heading as, it takes the same id
last.removeAttribute('id') //removing the id

last.classList.add('list-items'); //adding into the list-items class. takes all styles

console.log(last.classList.contains('list-items')) //true, if given list-items has last element


//REMOVE ELEMENTS

//last.remove()//gets removed 







//TRAVERSING

//parent node
console.log("--------Parent nodes--------")
console.log(ul.parentNode)//return parent node of ul


//child nodes
console.log("--------child nodes--------")
console.log(ul.childNodes)
console.log(ul.children);//only if element....else null

console.log(ul.firstChild);//node
console.log(ul.lastChild)
console.log(ul.firstElementChild)//whole element, if its element..else null

ul.childNodes[1].style.backgroundColor='blue' //changes first li of ul to blue bg


console.log("--------Sibing nodes--------")
//sibling nodes
const div1= document.querySelector('div');
console.log(div1.childNodes);//all nodes

console.log(ul.previousElementSibling);//whole h1 tag element
console.log(ul.previousSibling);//text..

console.log(ul.nextElementSibling);//null, because there is no eleemnt after ul tag
console.log(ul.nextSibling);//text, bcz null considerd as text








let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
let mess= document.getElementById('h1');
let val = document.getElementById('input').value;
let mess2= document.getElementById('age');
let val2 = document.getElementById('input2').value;

mess.innerText = mess.innerText+" "+  val;
mess2.innerText = val2;
})


async function getDataaa(){
    try{
        let res= await fetch('https://reqres.in/api/users')
        let data = await res.json()
       // console.log(data.data)
       displyImg(data.data)

    }catch(e){
        console.log(e)
    }
}
getDataaa()

function displyImg(data){
    data.map(function(e,i){
        let img =document.createElement('img')
        img.src = e.avatar
        document.getElementById('box').append(img)
    })
}