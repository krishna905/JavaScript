function num(){
    let a=5;
    let b=10;
    try{
    var c=a/b;
    consol.log(c);
    }
    catch(erry){
        
      console.log(erry.message);
      //throw erry          .....throws error after execution of all the remaining code
    }
    finally{
    let d=a+b;
    console.log(d);
    }
    
}
num()

function performOperation(){
  let obj={}
  value=0;
  try{
    value=calculateSum(obj);
  }
  catch(error){
    console.log(error.message);
  }
  if(value==0){
    console.log('value is still 0')
  }
}

function calculateSum(obj){
  if(!obj.hasOwnProperty('b')){
    throw new Error('object property is missing');
  }
  return 7;
}

performOperation();//object proprty is missing...valeu is still 0