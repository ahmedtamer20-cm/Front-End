// intro to function 
function saHello (Name) {  
console.log(`  Hello ${Name}`)//task that apply
}
saHello("ahmed");  //--> call function 
saHello("ali");
saHello("omar");
//---------------------------------------------
//===================================/
//=================================
//advanced ex.
// First
function Hello (Name , age) {  
// console.log(`  Hello ${Name}  your age is ${age} `)//task that apply
if (age < 20){
    console.log(`${"app is not suitable for you"}`)
}
else {
    console.log(`  Hello ${Name}  your age is ${age} `)
}
}

Hello("ahmed" , 38);  //--> call function 
Hello("ali" , 18);
Hello("omar ", 40);

//Second
function generateYears (start , end , exclude ){
for (let i = start;  i<=end;  i++  ) {
if ( i === exclude) {
continue;
}
   console.log(i);
}
}
generateYears( 1982 , 2025 , 2020 );
//============================================
//============================================
//==Return 
function generate (start , end) {  
for (let i = start;  i<=end;  i++) {
    if (i === 50) {
        return `interrrupting`
    }
    console.log(i);
}
}
generate(20 , 70)
// let result = calc(50 ,20)
// console.log(`   ${result +100}`)



//================================================
//================================================
//================================================
// default functions parametares

 function sayHello (username   = "unknown" , age  = "unknown" ) {
    // if (age === undefined) {
    //     age = "unknown";
    // }
// or  age = age || "unknown"
 return `Hello ${username}  your age is ${age}  ` ;
 }
 console.log(sayHello("ahmed" , 19 ));

//========================
//===========================
//Rest parameters= ...

function calc (...numbers){
let result = 0;
for (let i = 0; i< numbers.length; i++ ) {
    result += numbers[i];
}    
return `Final result is ${result}`;
}
console.log(calc(10 , 20 , 30 , 40 , 50 , 60))




function showInfo ( us = "Un" , ag = "Un" , rt = 0 , gn = "Un" , show= "Yes" ,  ...sk   ) {
    document.writeln(`<div>`)
document.writeln(`<h2>Hi , ${us}</h2>`)
document.writeln(`<p> Age is : ${ag} Years </p>`)
document.writeln(`<p>   Your Hour Rate is :  $${rt}</p>`)
document.writeln(`<p> Your Gender is : ${gn}</p>`)
document.writeln(`</div>`)
if (show === "Yes") {
    if (sk.length >  0 ){
        document.writeln(`My skills is : ${sk.join(" - ")}`)
    }else {
        document.writeln(`  My skills is : ${ "No skills"}`)
    }
}else {
    document.writeln(`${"Skills is hidden"}`)
}


}

showInfo("Ahmed" , "19"  ,"1500" , "Male" , "Yes" , "Html " , "Css"  , "Js"  , "React" )

//=========================================
//==============================================


// function say (fName  , lName) {
// message = `Hello`
// function concatMsg () {
// message =  `${message} : ${fName} ${lName}  `                  
// }
// concatMsg ();
// return message
// }
// console.log(say("osama" , "ahmed"))


// function print () {
//     return 10 ;
// }
