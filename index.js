//console.log("Hello ......")

//function sum(a, b) {
    //return a + b;
//}
//sum(23,56);

//let a=34;
//if(a>20){
  //  let a=45;
    //console.log("a inside a="+a)
//}
//console.log("a outside a="+a)
 
//const sum = function sum(a, b) {
  //  return a + b;
//}
//const sum=(a,b)=>{return Math.sqrt(a+b)}
//sum(49,90);
//sum("hey...");

//let result = sum(23, 56);
//console.log(sum(23, 56));

//IIFE
      //(()=>{console.log("HIIIIIII")})();

//CALLBACK FUNCTION
    
//function sum(a,b){
  //  return a+b;
//}

//function sumWithMsg(clbk,msg){
  //  const result=clbk(10,10);
    //console.log("HIIIIII"+msg+""+result);
//}

//sumWithMsg(sum,"TANISHAAAA");






/*function login(msg,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(msg);
    }
}


function loginHandler(username,password,clbk){
   // username="tanisha24";
    //password="1234";
    if(username="tanisha24" && password=="1234"){
        clbk("success",null)

}else{
    clbk(null,"username or password is incorrect");
}

}
loginHandler("tanisha24", "1234", login); // success
loginHandler("tanisha24", "wrong", login); // error*/




/*setTimeout(() => {console.log("One");
    setTimeout(() => {console.log("Two");
        setTimeout(() => {console.log("Three");
            setTimeout(() => {console.log("Four");
                setTimeout(() => {console.log("Five");
                    setTimeout(() => {console.log("Six");
                        setTimeout(() => {console.log("Seven");
                            setTimeout(() => {console.log("Eight");
                                setTimeout(() => {console.log("Nine");
                                    setTimeout(() => {console.log("Ten");
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);*/



const myPromise=new Promise((resolve,reject)=>{
    let username=`tanisha24`;
    let password=`1234`;
    if(username==`tanisha24` && password==`1234`){
        resolve("success");
    }else{
        reject("invalid");
    }


})
//console.log(myPromise);

/*myPromise.then((msg)=>{console.log(msg)})
.catch(msg=>{console.log(msg)})
.finally(console.log("rsource closed"));*/


async function orderRecieved(){

    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("one order received");
        },1000)
    })

}
async function orderPrepared(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("order prepared");
        },1000)
    })
}

/*async function handletlogin(){
    const status=await myPromise;
    console.log(status);

}
handLetLogin();*/

function OrderCompleted(){
    console.log("order successfully completed");
}

         function otp(){
    return Math.floor(1000 + Math.random() * 9000);
}

console.log(otp());
//



async function handleLogin(){
    const status=await myPromise;
    console.log(status);
     //setTimeout(()=>{
    //resolve("order delivered");
   //},1000)


if(status=="success"){
    console.log("hiiiiiiii");


const orderstatus=await orderRecieved();
console.log(orderstatus);
const orderstatus2=await orderPrepared();
console.log(orderstatus2);
}
}
handleLogin();








