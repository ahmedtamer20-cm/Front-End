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




//========================================ultimate practice

function showInfo ( us = "Un" , ag = "Un" , rt = 0 , show= "Yes" ,  ...sk   ) {
document.writeln(`<div>`);
document.writeln(`<h2>Welcome , ${us}</h2>`)
document.writeln(`<p>Age: , ${ag}</p>`)
document.writeln(`<p>Hour Rate:  $${rt}</p>`)
document.writeln(`</div>`);
if (show === "Yes" ) {
    if(sk.length > 0 )  {
document.writeln(`<p> skills: ${sk.join(" | ")} </p>`);
    }else{
document.writeln(`<p> Skills : no skills</p>`);        
    }
document.writeln(`<p> ${sk.join(" | ")} </p>`);
}else{
document.writeln(`<p> Skills is Hidden</p>`);
}
document.writeln(`<div>`);
}

showInfo("Ahmed" , 19 , 20 , "No" ,"Html"  , "css");

//=========================================
//==============================================
//Functions Anonymous

let calculator = function (num1 , num2) {
    return num1 + num2 ;
}
console.log(`${calculator(10 , 20)}`)

//================================
//================================
//================================
//Return Nested function
// Ex. 1
function sayMessage (fName , lName) {
let message = `Hello`
function concatMsg () {
    message = `${message} ${fName} ${lName}     `
}
concatMsg ();
return message ;
}
console.log(sayMessage ( "osama", "ahmed" ))
//--------------------------------------------
// Ex. 2
function sayMessage (fName , lName) {
let message = `Hello`
function concatMsg () {
    return `${message} ${fName} ${lName}     `
}

return  concatMsg () ;
}
console.log(sayMessage ( "osama", "ahmed" ))

//--------------------------------------------
// Ex. 3
function sayMessage (fName , lName) {
let message = `Hello`
function concatMsg () {
    function getFullName () {
        return ` ${fName}  ${lName} `
    }
    return `${message} ${ getFullName ()}     `
}

return  concatMsg () ;
}
console.log(sayMessage ( "osama", "ahmed" ))


