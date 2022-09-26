let counter=(function(){
    let count=0;

    function print(message){
        console.log(message+ " "+ count);
    }

    return {
        // value: count,
        get:function(){
            return count
        },
        set:function(value){
            count=value;
        },
        increment:function(){
            count+=1;
            print("after increment");
        },
        reset:function(){
           print("before reset");
            count=0;
            print("after reset");
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();
counter.set(7);
console.log(counter.get())
counter.reset();
//the above technique has chance that namespace get collide..so checkk below


//below technique lists of ->
//module pattern
let counter1=(function(){
    let count1=0;
    function print1(message1){
        console.log(`${message1} => ${count1}`)
    }
    function getCount(){
        return count1;
    }
    function setCount(value1){
        count1=value1;
    }
    function increment1(){
        count1+=1;
        print('after increment');
    }
    function reset1(){
        print('before reset');
        count1=0;
        print('after reset');
    }
    //reveals public fucntions
    //clearer presentaton
    //however u caN (accientally )  overwrite
    //the property values
    return {
        get1:getCount,
        set1:setCount,
        incrementCount:increment1,
        resetCount:reset1
        
    }
})();

console.log(counter1);
console.log(counter1.get1())