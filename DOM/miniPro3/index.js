const que= document.getElementsByClassName('content-container')

for(i =0; i<que.length ; i++){
    que[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}