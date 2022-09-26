//DOM MANIPULATION

//Event Delegeation

//It allows users to append a single event listner to a parent element that adds it to all
//its present and future descendents that match a selector

/*

TRADITIONAL WAY OF EVENT PROPAGATION



document.querySelector('.football').addEventListener
('click', function(e){
    console.log('football is clicked')
    const tar=e.target;
    if(tar.matches('li'))
    tar.style.backgroundColor="steelblue"
})

document.querySelector('.badminton').addEventListener
('click', function(e){
    console.log('badminton is clicked')
    const tar=e.target;
    if(tar.matches('li'))
    tar.style.backgroundColor="red"
})

document.querySelector('.rugby').addEventListener
('click', function(e){
    console.log('rugby is clicked')
    const tar=e.target;
    if(tar.matches('li'))
    tar.style.backgroundColor="green"
})

document.querySelector('.tennis').addEventListener
('click', function(e){
    console.log('tennis is clicked')
    const tar=e.target;
    if(tar.matches('li'))
    tar.style.backgroundColor="yellow"
})

document.querySelector('.cricket').addEventListener
('click', function(e){
    console.log('cricket is clicked')
    const tar=e.target;
    if(tar.matches('li'))
    tar.style.backgroundColor="steelblue"
})

*/


document.querySelector('#sports').addEventListener
('click', function(e){
    console.log(e.target.getAttribute('class')+ 'is clicked')

    const tar=e.target;

    if(tar.matches('li')){
        tar.style.backgroundColor='steelblue'
    }
})

const sports=document.querySelector('#sports')
const newSport=document.createElement('li');

newSport.innerText='basketBall';
newSport.setAttribute('id', 'basket');
sports.appendChild(newSport);