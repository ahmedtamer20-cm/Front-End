 
 
 "use strict";
 let user = {
//Propeties
theName :"osama",
theAge:38,
//Methods
sayHello : function() {
   return `Hello`
}
 };
console.log(user.theName)
console.log(user.theAge)
console.log(user.sayHello())

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
let myVar = "country"
 let user2 = {
     theName :"osama",
    //  "country of" : "Egypt",
country : "Egypt"


 };
console.log(user.theName);
// console.log(user[ "country of" ]);
console.log(user.myVar); // user.country
console.log(user[myVar]);
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//============Nested object and advance trainings========

let user3 =  {
name :"Ahmed",
age :38,
skills : ["HTML" , "CSS" , "JS"],
available : false,
adress : {
    ksa :"Riyadh",
    egypt : {
one : "Cairo",
two : "Giza",
    },
},
checkAvailable : function(){
    if (this.available === true) {
return `Good`
    }else {
        return `Not Good`
    }
}
}
console.log(user3.name)
console.log(user3.age)
console.log(user3.skills.join(""))
console.log(user3.skills[2])  //ACCESS ON INDEX
console.log(user3.adress.egypt.one)
console.log(user3["adress"].egypt.one)
console.log(user3["adress"]["egypt"].one)
console.log(user3["adress"]["egypt"]["one"])
//------
// console.log(`${checkAvailable()}`)
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//--=========CREAT NEW OBJECT WITH NEW KEY WORD====

let user4 = new Object({
    AGE :20
,});
console.log(user4);
// add propety
user4.age = 38;//---------add two property for object
user4["Name"] = "Ahmed";//---------add two property for object
//add method
user4.sayHello = function() {
    return `Hello`;
}
//---------

console.log(user4);
console.log(user4.age);
console.log(user4.Name);
console.log(user4.sayHello());
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//============(This) Keyword=================

console.log(`${this}`)
console.log(`${this=== window}`)
// itVar2 = 100;
console.log(`${ window.itVar2}`)
console.log(`${this.itVar2}`)

function sayHello3 () {
    console.log(`${this}`)
    return this;
}
sayHello3()
console.log(`${sayHello3()=== window}`)

 document.getElementById("Click").onclick = function() {
    console.log(this);
 };

let user6 = {
age : 38,
ageInDays: function() {
    return this.age * 365;
},
};
console.log(`${user6.age}`)
console.log(`${user6.ageInDays()}`)
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

// Create object with creat methods
let user7 = {
age : 38,
doubleAge: function() {
    return this.age * 2;
},
};
console.log(`${user7}`)
console.log(`${user7.age}`)
console.log(`${user7.doubleAge()}`)

//-----------
let obj = Object.create({})
obj.a = 100;
console.log(`${obj}`)
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//==create object with assign methods



















































































































































































