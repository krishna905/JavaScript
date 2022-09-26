let openBtn= document.getElementById('open-btn');
let modalContainer= document.getElementById('modal-container')
let closeBtn= document.getElementById('close-btn')

///Event listners
openBtn.addEventListener('click', function(){
    modalContainer.style.display='block'
})
closeBtn.addEventListener('click', function(){
    modalContainer.style.display='none'
})
//click anywhere in the screen, it will disapper
window.addEventListener('click', function(e){
    if(e.target===modalContainer){
        modalContainer.style.display='none'
    }
})