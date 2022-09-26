/* (function(){
    function clickHandler(message){
        console.log("Hi :)"+ message);
    }

    let myMess= document.getElementById('myButton');
    myMess.addEventListener('click', function(){ 
                                   clickHandler('from the click button event') 
                                } )

})(); */



(function(){
    
    function incrementCount(){
        counter=counter + 1;
    }

    function updateUI(){
        
        const colors=[
            {name : 'violet', value:'#e74c3c'},
            {name : 'indigo', value:'#2980b9'},
            {name : 'blue', value:'#2ecc71'},
            {name : 'grey', value:'#2c3e50'},
            {name : 'yellow', value:'#f1c40f'},
            {name : 'orange', value:'#d35400'},
        ];

        let result=document.getElementById('resultDiv')

        //Relatve to font-size of element
        //2em means 2 times the size of current font
        result.innerText=counter;
        if(counter > 0){
            result.style.fontSize = counter+'em'
        }

        //Divide first into second, return the remaind3rx
        //Access that element of colors array to grab color  of thr object
        let remainder = counter % colors.length;
        result.style.color = colors[remainder].value


        //clear out all existing child color divs
        let colorDiv=document.getElementById('colorDiv');
        colorDiv.innerHTML='';

        //Re-add the child colorDivs
        for( i=0;i < colors.length;i++){

            //Creating a node dynamically with the intent of adding it to colorDiv
            var node=document.createElement('div');
            var textnode=document.createTextNode(colors[i].name)
            node.appendChild(textnode)
            node.style.backgroundColor= colors[i].value;

            //Alternatively I Could have made this into a CSS
            //style and added that to the node.classList..

            node.style.width="150px"
            node.style.height='50px'
            node.style.cssFloat='left'
            node.style.paddingLeft='10px'
            node.style.paddingTop='10px'

            if(i == remainder){
                node.style.height= '45px'

                //Example of adding a class to the node's
                //classList

                node.classList.add('selected')
            }
            colorDiv.appendChild(node)

        }
    }



    function handleClick(){
        incrementCount();
        updateUI();
    }
    
    let counter=0;
    let myMess=document.getElementById('myButton');
    myMess.addEventListener('click', function(){ 
       incrementCount();
       updateUI()
     } );

     updateUI();

})();


