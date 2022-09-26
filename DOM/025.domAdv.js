function print()
{
    var name=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    if(pass=="krishna"){
        alert('succeessfully login')
    }
    else{
        alert('wrong password')
    }
    alert('the name is '+ name +"\n"+ " the password is "+ pass)
}

function radioButt(){
    var x=document.getElementById('correct');
    var y=document.getElementById('wrong');
    if(x.checked == true){
        alert('Yoy selected Correct answer'+ x.value);
    }
    else if(y.checked ==  true){
        alert('You selected wrong answer' + y.value);  
    }
    else{
        alert('no option selected')
    }
}

function selectOpt(){
    var p=document.getElementById('selected');
    alert(p.options[p.selectedIndex].value)
}

function selectBox(){
    var ans=document.getElementById('optOne')
    if(ans.options[ans.selectedIndex].value=='Tata ELXSI'){
        alert('yes, correct answer'+ans.options[ans.selectedIndex].value )
    }
    else {
        alert(' you selected wrong answer'+ ans.options[ans.selectedIndex].value)
    }
}


//changing styles of elements using getElementbyId
function myFun(){
    var tag1=document.getElementById('firstDiv')
    var tag2=document.getElementById('secondDiv')
    var tag3=document.getElementById('thirdDiv')
    var tag4=document.getElementById('fourthDiv');
   
    tag1.style.fontFamily = "Courier New";
    tag2.style.color = "blue";
    tag3.style.backgroundColor = "yellow";
    tag4.style.fontSize="40px"
}
function fun2(){
    var x=document.getElementsByTagName("div");
    x[0].style.fontFamily = "Courier New";
    x[0].style.color = "blue";


}


/*
const signUpFormValidation = (formData) => {
            const error = {}
            const fields = ['email', 'password', 'name']
            fields.forEach(field => {
                if (!formData[`${field}`]) {
                    error[[field]] = `${field} not present`
                }
            })
            if (formData.name && (formData.name.length < 3 || formData.name.length > 20)) {
                error['name'] = 'Name should be atleast 4 chars and less than 20 chars'
            }
            if (formData.password && (formData.password.length < 6 || formData.password.length > 30)) {
                error['password'] = 'Password should be atleast 6 chars and less than 30 chars'
            }

            if (formData.email && isEmailAddress(formData.email) === null) {
                error['email'] = 'Not a valid email'
            }
            if (Object.keys(error).length === 0) return null
            return error
        }
        */