 //-------------------------------------(((((((((FUNCTIONS)))))))))------------------------------------------------------------------

function Hi (userName) {
console.log(`Hi ${userName}`);
}

 // ***>>argument
sayHi("ahmed"); 
sayHi("omar"); 

//--------------------((((Advance examples))))--------------------

function Hi (userName , age) {
console.log(`Hi ${userName} your age is ${age}`);
if (age <20){
  console.log("app is not suitable for you")
}
else{
  console.log(`hello ${userName}  your age is  ${age}`)
}
}

sayHi("osama" , 38); // ***>>argument
sayHi("ahmed" , 18); 
sayHi("omar" , 30); 



//---------------------------------------------------------

function generateYears(start , end ,  exclude) {
  for (let i = start ; i<= end; I++ ) {
    if (i===exclude) {
countinue
    }
console.log(i);
  }
}
generateYears(1982 , 2021 , 2020)

///-/-/-/-/-/-/-/-/-/-/-/-/-/-function return /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-