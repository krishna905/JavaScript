//event bubbling & capturing , Stop propagating,
//Immediate propagation , Prvent default


//event bubbbling - child to parent
//event capturing - parent to child
var div = document.querySelector("div")
 var butt = document.querySelector("button")
div.addEventListener("click", ()=>{
    console.log("liked")
},false)
// butt.addEventListener("click",()=>{
//         console.log("butt")
//  },false)

 //event bubbling - butt, liked
 //event capturing - liked , butt
//to make it event capturing , pass true as defailt state






butt.addEventListener("click",(evnt)=>{
   // evnt.stopPropagation();
    console.log("buttoned meeeee")
})
//stopPropagation helps to stop the event bubbling going from child till parent..jst child 


butt.addEventListener("click",(evnt)=>{
 
    evnt.stopImmediatePropagation()
    console.log("buttoned1")
})

//stopImmediatePropagation allows u to have 2 event loops from the child


var a=document.querySelector("a");
 
 a.addEventListener("click", (event)=>{
    event.preventDefault()
    console.log("prvented")
 })
 //prevent default wont allow u to go to other linked page


