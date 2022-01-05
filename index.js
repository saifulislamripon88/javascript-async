//javascripts callback

function myDisplayer(some){
    document.getElementById("demo1").innerHTML = some
}


function myFunction(){
    myDisplayer("hello");
}
myFunction()


function myFunctions(){
    myDisplayer("good bye!");
}
myFunctions();

function myNewFunction(){
    myDisplayer("Wellcome back legend!");
}
myNewFunction();



//JavaScript Functions
/**function display(some){
document.getElementById("demo2").innerHTML = some;
}
function myCalculation(num1,num2){
    let sum = num1*num2;
    return sum;
}
let totalSum = myCalculation(12,15);
display(totalSum);

// display(myCalculation(12,13))

function mrDisply(some){
    document.getElementById("demo3").innerHTML = some;
}
function calculations(num1,num2,num3,myCallback){
    let totalMultiply=  num1*num2/num3;
    myCallback(totalMultiply);
}
 calculations(20,20,10,mrDisply);
 //return 40
 */

 function display(some){
    document.getElementById("demo2").innerHTML = some;
    }
    function myCalculation(num1,num2){
        let sum = num1*num2;
        return sum;
    }
    let totalSum = myCalculation(12,15);
    display(totalSum);
    
    // display(myCalculation(12,13))
    
    function mrDisply(some){
        document.getElementById("demo3").innerHTML = some;
    }
    function calculations(num1,num2,num3,myCallback){
        let totalMultiply=  num1*num2/num3;
        myCallback(totalMultiply);
    }
    calculations(20,20,10,mrDisply);





    //Asynchronous JavaScript
    //javascript setTimeout();

    function setTimeOutFunction(){
        document.getElementById("demo5").innerHTML = "I Love You!!!!";
    }
    setTimeout(setTimeOutFunction,3000);


    //


    function myInterval(){
        let dt = new Date();
        document.getElementById("demo6").innerHTML = 
        dt.getHours()+":"+
        dt.getMinutes()+":"+
        dt.getSeconds()+":" + "(" + " " +dt.getUTCMilliseconds() +" "+ ")";
        // dt.getUTCMilliseconds();

        
    }
    setInterval(myInterval);
    // setInterval(myInterval,1000);




    //promise 

/**    function myDisplayFunction(some){
        document.getElementById("demo6").innerHTML = some;
        console.log(some)
    }
    let myPromise = new Promise(function(myResolve,myReject){
        let xs = 0;
        if (xs == 0) {
            myResolve("OK");
        }else{
            myReject("Error")
        }

    });
    myPromise.then(
        function(value) {myDisplayFunction(value);},
        function(error) {myDisplayFunction(error);}

    );
    return ok
    */

/**    function myDisplayFunction(some){
        document.getElementById("demo6").innerHTML = some;
        console.log(some)
    }
    let myPromise = new Promise(function(myResolve,myReject){
        let xs = 5;
        if (xs == 5) {
            myResolve("OK");
        }else{
            myReject("Error")
        }

    });
    myPromise.then(
        function(value) {myDisplayFunction(value);},
        function(error) {myDisplayFunction(error);}

    );
    return ok
 */

    function myDisplayFunction(some){
        document.getElementById("demo6").innerHTML = some;
        console.log(some)
    }
    let myPromise = new Promise(function(myResolve,myReject){
        let xs = 0;
        if (xs == 5) {
            myResolve("OK");
        }else{
            myReject("Error")
        }

    });
    myPromise.then(
        function(value) {myDisplayFunction(value);},
        function(error) {myDisplayFunction(error);}

    );



    // JavaScript Promise Examples
    // Waiting for a Timeout 

    //setTimeout()

    function mysetFuncTion(value){
        document.getElementById("demo7").innerHTML = value;
    }
    setTimeout(function(){mysetFuncTion("i love my country,Bangladesh!"); }, 3000);


    //setTimeout same example use 


    const myPromises = new Promise(function(myResolve,myReject){
        setTimeout(function(){myResolve("Hello Everyone this is javascript Promise");},3000)
    })
myPromises.then(function(value){
    document.getElementById("demo8").innerHTML = value;

})



//

const myPromisess = new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("hello this is promises(myResolve)"); }, 3000 )

});
myPromisess.then(function(values){
    document.getElementById("demo9").innerHTML = values;

})




//JavaScript Async

//

function myAsync(some){
    document.getElementById("demo10").innerHTML= some;
}
async function myAsyncFunction(){
    return "Hello";
}

myAsyncFunction().then(
    function(value) {myAsync(value)},
    function(error) {myAsync(error)}
)

//
//await basic syntax

async function myawait(){
    let myPromiseAwait = new Promise(function(resolve,reject){
        resolve("Hey man, i love you more! ");
    });

    document.getElementById("demo11").innerHTML = await myPromiseAwait;
}
myawait();



// Example without reject
/**async function withoutReject(){
    let myReject = new Promise(function(resolve){
        resolve("hey man!What are you doing");

    });
    document.getElementById("demo12").innerHTML = await myReject;
}
withoutReject();

*/

async function withoutReject(){
    let myReject = new Promise(function(resolve){
        resolve("Hey man what are you doing??");
    })
    document.getElementById("demo12").innerHTML = await myReject;
}
withoutReject();



//Waiting for a Timeout


async function waitingFunction(){
    const myWaiting = new Promise(function(resolve){
        setTimeout(function(){resolve("Hello this is waiting resolve");},3000)
    })

    document.getElementById("demo13").innerHTML = await myWaiting;
}
waitingFunction();


