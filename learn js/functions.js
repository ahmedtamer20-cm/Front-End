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
//Functions Anonymous

let calculator = function (num1 , num2) {
    return num1 + num2 ;
}
console.log(`${calculator(10 , 20)}`)

//=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function say (fName  , lName) {
message = `Hello`
function concatMsg () {
message =  `${message} : ${fName} ${lName}  `                  
}
concatMsg ();
return message
}
console.log(say("osama" , "ahmed"))


function print () {
    return 10 ;
}

//Arow function
let print2 =  _ => 10 ;
// console.log(`${print2()}`)
// ///-------------------------------------
// let print3 = function (num) {
//        return num ;
// };
// 2 parametar ===> should () 
// 1 parametar ===> not should ()
// let print3 = num => num
let print3 =  (num1 , num2) => num1 + num2 ;
console.log(`${print3(100 , 500)}`)
//--------------
//    START scope and global scope
var a = 1;
let b = 2;
function showText () {
    console.log(`  From global - ${a  }`)
    console.log(`  From global   - ${ b }`)
    var a = 1;//  ===>>> local scope
    let b = 2;//  ===>>> local scope
}
console.log(`  From global ${a  }`)
console.log(`  From global ${ b }`)
showText ()
function showText () {
    var a = 1;//  ===>>> local scope
    let b = 2;//  ===>>> local scope
    console.log(`  From local - ${a  }`)
    console.log(`  From  local  - ${ b }`)
}
showText ()
//-------------------------
//block scope 
//(if  , switch , for )
var x = 10;
if (10===10) {
  //  var  x = 50;//===> not a block scope
  let  x = 50; 
}
console.log(`${x}`);
// function showText () {
//     var a = 1;
//     let b = 2;
//     console.log(`  From local - ${a  }`)
//     console.log(`  From  local  - ${ b }`)
// }
// showText ()
//*--------------------*-*-*-*-*-*-*-*-*-*-*-*-
//--------> lexical scope 
//------------------------------------------------------
// nested function cant acess on  dad function 

function parent () {
    let d = 100;
    
    function child () {
        
        console.log(` from grand  ${c}`)
    }
function grand () {
    let c = 500;
console.log(d)
console.log(` from grand  ${d}`)
}
grand ()
child ();
}

parent ();

// END SCOPE



