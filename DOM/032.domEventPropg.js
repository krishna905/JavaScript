//DOM Manipulation


//Event Propagation

//second paramter is true, then bubbling starts from top ..if false, bottom - top
window.addEventListener('click', function(){
        console.log('window')
}, false)

document.addEventListener
   ('click', function(){console.log('Document')
}, false)


document.querySelector('.div2').addEventListener
  ('click', function(){
    //e.stopPropagation() ----->    stops bubbling in div2 itself
    console.log('DIV2')
}, false)


document.querySelector(".div1").addEventListener
   ("click", function(){console.log('DIV1');
},{once: true} ) ///prints only one time


document.querySelector('button').addEventListener
("click", function(e){
    console.log(e.target.innerText= 'clicked!') //buttons value changes to clicked!... on click
},false)

document.querySelector('.anchor').addEventListener
('click', function(e){
    e.preventDefault();
    console.log(e.target.innerText='anchored!')

}, false)