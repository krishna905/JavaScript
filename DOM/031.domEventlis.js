//DOM manipulation

//eventListener

//element.addEventListner("click", function)

const but2=document.querySelector('.btn-2');
function alertBtn(){
    alert(' I also love JavaScrpt')
}

but2.addEventListener("click", alertBtn)

const but3=document.querySelector('.box3');

function changeBgm(){
    but3.style.backgroundColor='blue';
}
but3.addEventListener("mouseover", changeBgm)





//Revealing content on button click
document.write("----------Revealing content---------------------")
const revealButt=document.querySelector('.reveal-btn')
const hidden=document.querySelector('.hidden-content')

function  revealContent(){
    if(hidden.classList.contains('reveal-btn')){
        hidden.classList.remove('reveal-btn')
    }
    else{
        hidden.classList.add('reveal-btn')
    }
}
revealButt.addEventListener("click", revealContent)
