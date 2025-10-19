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
function showText () {
    var a = 1;
    let b = 2;
    console.log(`  From local - ${a  }`)
    console.log(`  From  local  - ${ b }`)
}
showText ()
// *--------------------*-*-*-*-*-*-*-*-*-*-*-*-
// --------> lexical scope 
// ------------------------------------------------------
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