console.log("Hello World");

// Variables ;
//  Variables are names used to store data in Js 
// *Variable declarator: Var, let, const

// creating variables
// declarator Varname: Value
// Variable name must not start with number and any other character except A-Z , $ and _
//  In JS we used camelCase menthod of naming convention

var day = "Monday";
console.log( day);

const Myage = 23
console.log(Myage);

let month = "Feburary";
console.log(month);

const isMarried = false;
const _date ="29/01/2024";
let $atmPin =4223;
console.log(isMarried, _date, $atmPin);

// Differences between Var, Let and Const    (body max index ;BMI)
// Var: Can be redeclared and reassigned 
var bmi = 23.8;
console.log(bmi); // 23.8
var bmi =22.5;
console.log(bmi); // 22.5

// Reassigned 
bmi =21.7;
console.log(bmi);

//  let variable  
// let can not be redeclared but can be reassigned 
let MidddleName = "Haykay";
console.log(MidddleName);

// Redeclaring 
// let middleName = "Akins"

// reassigning 
MidddleName = "Akins"
console.log(MidddleName);

// To check data type you enter "typeof"

// CoNST
// Const does not allow for re-delcaration or re-assignment

const ten = "may";
console.log(ten);


// Data types in JS 
// - String
// - number 
// - booleans 
// - null / undefined
// - Arrays 
// - Objects
// - Bigint 
// - Symbol

// STRINGS
// Strings are data that are stored inside single or double quotation or quotes
const silbling = "sodiq"
console.log(silbling);  // "This is string with a double quotes"

let newCar = 'Benz'
console.log(newCar);  // 'This is string with a single quotes'

// Numbers
const gravity = 9.8
const x = "55"
console.log(gravity, typeof gravity);

console.log(bmi + gravity);
console.log(gravity + x);
console.log(x/gravity);
// console.log(gravity/x);
// console.log( string/gravity); //NAN

// booleans true/false 
console.log(isMarried);
const isLoggedIn = true;

if (isLoggedIn) {
    console.log("welcome to my world");
}
// Null/ undefined 
let food
console.log(food);
food = null;
console.log(food);

// Array is the colllection of item or different type of data in an  enclose square bracket.(can take any form of data and even take array inside)
const arr = ["keyboard", 10, false, null] ;
console.log(arr);

const fruit = [ "apple", "pawpaw", "mango", "Orange", "banana"]
console.log(fruit);

// Objects are similar to array
//  objects is a data structure that stores data in ke-value pairs. e.g key1 -value1
const myObj = {
    carbonhydrate: "Garri",
    Protein: "Egg",
    fatAndOil: "Butter",
    Vitanmin: "Orange",
    water: "watermeloom",
    Minerals: "Sea food",
}
console.log(myObj);

const Haykay = {
    firstName: "Amusa",
    LastName:"Akinkunmi",
    age: 25,
    Dob:28/3/1999,
    gender: "Male",
    isMarried:"false",
    Occupation: "software developer",
    Skills: ["Javascript","pyton", "Writer"],
    Address: {
        // city: "Ikorodu",
        State:"Lagos"
    }
}
console.log(Haykay);

// Assignmnent 
// from the object above ,print to the console the following ;full name, Top skills ="Javascript" ,city of residence= "Ikorodu"
const yah = {
    fullname  : "Akinkunmi semiu",
    topskills : "Javascript", 
    cityOfResidence : "Ikorodu"
}
console.log(yah.fullname);
console.log(yah.topskills);
console.log(yah.cityOfResidence);


const fName = Haykay.firstName
const lName = Haykay.LastName
const fullname = fName + " " + lName
const topskills = Haykay.Skills[0]

console.log("full name:", fullname);
console.log("My Skills is:", topskills);
console.log("My city of residence", Haykay.Address.State);

// String properties and methods 
// properties - length, index 
// string method -toUpperCase , toLowerCase, concat, split, slice , trim, replace ,substring, etc 

const sch ="Techstudio academy"
const str3 = "my name is "
const fullStatment = ""

// length
const strLen = sch.length
console.log(strLen);

//index and IndexOf
console.log("d in 'techstudio' has index of", sch.indexOf ("d"));

console.log("Character at index 7 is", sch[7] );

//toUpperCase/ toLowercase
console.log(sch.toUpperCase());
console.log(sch.toLowerCase());

// Concatination of string 
// Concat means to combine strings together
const concatStrings =str3.concat(fullname)
console.log(concatStrings);
const concatString = str3 + fullname
console.log(concatString);



// Template literals
const tem = `Hi there!, ${str3} ${fullname}, i am ${Haykay. age} years old`
console.log(tem);
console.log(Haykay. age);

// split
console.log(sch.split("s"));
console.log(tem.split(","));

// Slice ( start , end) 0, 1, 2, 3 etc.
const slicedWord = `${tem.slice(0, 18)}... more`
console.log(slicedWord);

//substring
const substring = tem.substring (0, 20)
console.log(substring);

// Operatos 
// - Arithemetic operator 
// - Assignment operator 
// - comparison operator
// - Logical operator 

// Arithemetic operators +, -, *, **, /, %, ++, --,
let y = 20; 
let z = -10; 
console.log(x, typeof x);
let egg = Number(x) + y - z;
console.log(egg);

// 10 % 6 == 4
// 25 % 4 == 1
// 20 % 3 == 2

console.log( 24 % 5);
console.log(23 ** 4);

// Assignment Operator ; =, +=, -=, /=
// Assignment operators are basically used to assigned or creating values to variables. 

let n = 8
console.log(n); // 8

n += 10
console.log(n); // 18

n -= 20
console.log(n); // -2

const mySibling = {
    Fchild: "Titi",
    Schild: "Funmi",
    Tchild: "femi"
}
console.log(mySibling);

// Logical Operators &&, ||,!
const T = true
const F = false 
const isAdult = true 

console.log(T && T); // true
console.log(T && F); // false
console.log(T && T); // true
console.log(F && T); // false 

// || (logical or )
console.log(T || T); // true
console.log(T || F); // true
console.log(T || T); // true
console.log(F || F); // false 

console.log(Myage); //23
console.log(Myage >= 18); // false

// && for logical && it all must be true 

if( Myage >= 18 || isAdult && !isMarried){
    console.log("You can take alcohol");
}

// ! (logical Not)

let pwd = "my passwprd123" ;
if (pwd.length >11 && pwd.includes("#")) {
    console.log("strong password");
} else {
    console.log("Your password is  not strong enough");    
}

//comparison operator ==, ===, != !==
// == loose comparison compares the value of the variables and not data types
 console.log(x); // "55"
let newNum = 55

console.log(x !== newNum); // true

// strict comparison : compares the value of the variables and their data types
console.log(x !== newNum); // false 

// Math method : floor , ceil, random, min, max 
// Math .floor
let num1 = 9.04577
Math .floor(num1) // 9
console.log(Math.floor(num1));

// ceil
// Math .ceil()
// this round up to the nearest whole number regardless of the decimal parts.
console.log(Math.ceil(num1));

// random 
// math .random () is used to generate random number between 0-9 
console.log(Math.random() * 1000000 );
const ranNum = Math.random() * 1000000 ;
const OTP = Math.floor(ranNum)
console.log("Enter your secret code $(OTP) to continue");

const d = Math.random() * 6
const dice = Math.ceil(d)
console.log(d);
console.log(dice);

// conditional if, if-else, else-if-else, switch, ternary operator 

// if
// if (Boolean condition) {
//     run this code here
// }

if (isMarried) {
    console.log("hello Mrs");
}

// if-else                                                                                                                                                          //reges for email              

if (isMarried) {
    console.log("hello Mrs"); 
} else {
    console.log("hello Miss");
}

// else-if-else 
let pass = "sampleABC123#@"
if (isLoggedIn && pass.length < 8){
    console.log("weak password"); 
}else  if(isLoggedIn && pass.length < 10 && pass.includes("A")){
    console.log("Monderately Strong password");
}else if(isLoggedIn && pass.length > 10 && pass.includes("#") || pass. includes ("@")){
    console.log("Very Strong Password");
}

// else-if-else
let pss = "sample12323A"
if(isLoggedIn && pss.length < 8 && !pss.includes(2)){
    console.log("Weak password");
}else if(isLoggedIn && pss.length > 8 && pss.length <= 12  && pass.includes("A") && !pss.includes("#")){
    console.log("Moderately Strong password");
}else if(isLoggedIn && pss.length > 10 && pss.includes("#") || pss.includes("@")){
    console.log("Very Strong password");
}else{
    console.log("No Match");

}
// // Task 5
// // Create a variables called acctBal, atmPin. Using simple conditional statements, write a code that logs the following:
// // a) if user is authenticated, and atnPin is correct, it should log the message "Transaction successful! Your account balance is ----"
// // b) if user is not authenticated or incorrect atmPin, it should log the message "Transaction declined"

let user = "haykay"
let acctBal = "50000"
let atmPin = "1234"
if (user === "haykay" && atmPin === "1234") {
    console.log(`Tansaction successful! your balance is ${acctBal}`);
} else {
    console.log("Transaction declined");
}

// switch statement
const days = Math.floor(Math.random()*7);
switch (days){
    case 0:
    console.log("Today is Sunday");
        
        break;

    case 1:
    console.log("Today is Monday");
        
        break;

    case 2:
    console.log("Today is Tuesday");
        
        break;

    case 3:
    console.log("Today is Wednesday");
        
        break;

    case 4:
    console.log("Today is Thursday");
        
        break;

    case 5:
    console.log("Today is Friday");
        
        break;

    case 6:
    console.log("Today is Saturday");
        
        break;

    
}
 // Task 6
// Using switch create a banking system that authenticate user, deposits, withdraws and checkbalance.

// const myInput = prompt ("Enter Username")
// // console.log("myInput");
// let loginpin = myInput.toLowerCase();
// console.log(myInput, loginpin);

// let accName = "Haykay"; 
// let Pin = "1234"; 
// let deposit = "deposit"
// let withdraw = "withdraw"
// let checkbalance = "balance"
// let myAcctBal ="1000"

// const isAuth = loginpin === accName.toLowerCase() || loginpin === Pin;
// console.log(isAuth);

// if (isAuth) {
//     console.log("Welcome to JSF bank");
    
//     let tran = prompt ("What will you like to do").toLowerCase().
//     console.log(tran);

//     switch(tran){
//         case "deposit":
//             console.log("deposit");
//             let depAmt = Number(prompt( "Enter amount to deposit"));
//             console.log(depAmt);
//             // myAcctBal = myAcctBal + depAmt;
//         myAcctBal += depAmt
//         console.log("Your new account balance is $${myAcctBal");
//             break;
    

//     }
//     switch(tran) {
//         case withdraw:
//             console.log("withdraw");
//             let WthAmt = Number(prompt( "How much would you like to withdraw"))
//             if (WthAmt > myAcctBall) {
//                 console.log("Insufficient funds");   
//             }else{
//                 myAcctBal -=WthAmt
//                 console.log(`your new account balance $${myAcctBal}`);
//             }
//             break;
    

//     }
//     switch(tran) {
//         case checkbalance:
//             console.log(`Your account balance $${myAcctBal}`);
//             break;
//             default:
//                 console.log("Invalid transaction");
    

//     }
// } else {
//     console.log("wrong PIN or username");
// }

// Ternary operator 
// syntax
// boolean condition ?  expression1 : expression2 

const isAdmin = true;
 !isAdmin ? console.log("Loginsuccessfully") : console.log("Unauthorized user");

 // Array
 // Array properties and method
 // length , index, shift , unshift , pop ,push , splice , join , sort , reverse ...
 const myCars = [ "bmw ", "volvo", "mercedez", "lambo", "tesla", "toyota"]
 console.log(myCars.length);

 // index 
  const bm = myCars[0]
  console.log(bm.toUpperCase());

 const tesla = myCars[4].toUpperCase()
 console.log(tesla);

 const Cars = myCars.length - 1;
 console.log(Cars);
 
 const cart = [
    {
        sardin: 12,
        egg: 5,
    }
]
let sard = cart[0].sardin
console.log(sard);   
sard -= 4
console.log(sard);

// modifying Array 
myCars [1] - "bmw"
console.log(myCars[1]);
console.log(myCars);

// unshift () or push() for adding onr iyrn at the begining and at the end respectfully.
// unshifting ()
myCars. unshift ("ford")
console.log(myCars); // To add to an item in the beginning of a context

// push()
myCars.push ("ferrari")
console.log(myCars);  // To add at end at the end of an items 

// shift and pop 
myCars.shift();
console.log(myCars);// To remove from the begining 
myCars .pop();
console.log(myCars); // To remove from the end 


// Splice (start index. numDelitems addItems)
const deliCars = myCars.splice(2, 3)
console.log(deliCars);
console.log(myCars);

// Using split  to add items 
const addCars = myCars.splice(2, 0, "mazda", "kia", "honda");
console.log(myCars);

// slice 
const top3Cars = myCars.slice(0, 3);
console.log(top3Cars);

const mid3Cars = myCars.slice(3, 6);
console.log(mid3Cars);

// Task 2
// use any of 25 method to arrange the numberin the array in ascending order
let mNum = [20, 40, 5, 100, 30, 15, 10, 70, 2]
mNum.sort(function(a, b){return a-b});
console.log(mNum);

mNum.sort(function(a, b){return b-a});
console.log(mNum);

const ascending = mNum.sort((a, b) => a - b) 
console.log(ascending);

const decending = mNum.sort((a, b) => b - a) 
console.log(decending);

//looping / iteration 
// looping is ue when you want to carry out a repetitive task or process .

// console.log("I am a fullstack Developer 1");
// console.log("I am a fullstack Developer 2");
// console.log("I am a fullstack Developer 3");
// console.log("I am a fullstack Developer 4");
// console.log("I am a fullstack Developer 5");
// console.log("I am a fullstack Developer 6");
// console.log("I am a fullstack Developer 7");
// console.log("I am a fullstack Developer 8");
// console.log("I am a fullstack Developer 9");
// console.log("I am a fullstack Developer 10");

// for loop (for , for-of, for-in)
// while loop 
// do-while loop 

// for
for( let i = 1; i <= 10; i++){
    console.log(`I am a Fullstack Developer ${i}`);
}

// Using for loop create a 12 times multiplication table 

for(let i = 1; i <= 12; i++){
    if(i % 2 !==0){
        continue
    }
    console.log(`${1} x 12 = ${i * 12}`);

}
// while 
let m = 1
while(m <= 5){
    console.log(`This while loop ${m}`);
    m++
}

let a = 12 
while (a >= 1){
    console.log(`${a} x 12 = ${a * 12}`);
    a--;
}
// for - of
for( const car of myCars){
    console.log(`The car brand is ${car.toUpperCase()}`);
}
 for( const car of myCars){
    if(!car .endsWith("a")){
        continue;
    }
    console.log(` The car brand is ${car.toUpperCase()}`);

 }

 //  Task
let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
for(const mark of marks){
    if(mark < 5){
        console.log(`Your score is ${mark}, you failed`)
    }
    else if(mark >=5){
        console.log(`Your score is ${mark}, you passed`);
    }
    continue;
}

const errCode = ['E', '@', '-', 'l', '@', 'e', 'a', '@', 'r', 'n', '@', 'i', '@', 'n', 'g']
// This is a currupted word, clean it up to get the correct word "E-learning"
let word =[];
let bug = "@"
for(let w of errCode){
    if(w !== "@"){
        word.push(w)
    }
}
console.log(word);
const cleanedCode = word.join("")
console.log(cleanedCode);

const moneyIs = 5
switch (moneyIs){
    case 1:
        console.log(`Today is Wednesday`);
        break
        case 2:
            console.log(`Today is Friday`);
            break
            case 3:
                console.log( `Today is Monday`);
                break
                default: 
                console.log(`Not a day of the Week`);

}

// Functions. is a peice of code that are used to perform a particular task or use in carried out specific task.
// Naming of functions
// Example - getName , fetchProduct , updatePost , handleSubmit , handleLogin , register 
// Creating functions in javaScript -

// * function delcaration method 
// function nameOfFunction(){
//     run the code
// }
sayMyName(); // hoisting - only function delcaration accept creating fucntion 

    function sayMyName(){
        console.log("Your name is Haykay");
    }
    //Calling of Function / involking functions
    sayMyName();
    sayMyName();
    sayMyName();

//* function expression 
// const nameOfFunction = function(){
//     run this code inside
// }
const showMsg = function () {
    console.log("This is a function expression");
}
showMsg();
showMsg();
showMsg();

// * Arrow function 
// const myArrowFunction  = () => {
//     run this code
// }

const logins = ( ) => {
    console.log(" Login Successful");
}
logins();

const login = ( ) => {
    if(!isLoggedIn){
        console.log(" Login Successful");
    } else{
        console.log("Access denied");
    }
    
}
login();
login();
login();
login();

// function parameters and argument 
function greetMe(fname="Firstname", lName= "Lastname") {
    console.log(`Hello ${fname} ${lName}`);
}
greetMe("Haykay" , "semiu")
greetMe("Akin")

// create function addname , which accept two number  argument and sums them

const addNum = (a, b) => console.log(a + b);
addNum(4, 6);
// Task
//create a function that take array as an argument ,sort the array item and change them to uppercase accordingly .

const countries = ["Zimbabwe", "Togo", "Ghana", "Sudan", "UK", "Spain"]
const fruit2 = ["Guava", "Lime", "Apple", "pawpaw", "Banana"]

const sortArr = (arr) => {
    let newCon = [];
    for( const item of arr){
        newCon.push(item.toUpperCase())
    }
    console.log(newCon);
    newCon.sort()
    console.log(newCon);

}
sortArr(countries)
sortArr(fruit2)

const arrEndsA = (arr) => {
    let newCon = [];
    for (const item of arr){
      if(item.endsWith("a")){
        newCon.push(item.toUpperCase())
      }
    }
    newCon.sort()
    console.log(newCon);
  }
  
  arrEndsA(countries)
  arrEndsA(fruit2)




// Javascript Challenge 1
// -Create a function ‘maxProductOfThree’
// -The function takes in array of numbers as arguments, i.e arrNum
// -It selects 3 numbers from the array that will give the maximum result when multiplied. i.e from arrNum, it’ll pick a, b, c and return their product axbxc, if that’s the three numbers from ‘arrNum’  that will give the higest results.
// -Example of using the function:
// maxProductOfThree(arrNum)    
// // 12345 (maximum product)

// NB
// -Check for the number of items in the array, which must not be less than three numbers.
// -Check if items in the array is not a number. You can only use a number for the computation.

function maxProductOfThree(arrNum){
    // check if there are at least three items in the array
    if(arrNum.length < 3){
      return console.log(    "Array should have at least 3 items");
    }
  
    // Check for non-numeric items in array
    const numericItem = arrNum.filter((n)=> typeof n === "number")
  
    console.log(numericItem);
    
    // check if there are at least three numbers in the array
    if(numericItem.length < 3){
      return console.log("Array should have at least 3 numbers");
    }
  
    // sort the array in ascending order
    numericItem.sort((a, b) => a-b);
    console.log(numericItem);
  
    // To calc max 
    const n = numericItem.length;
  
    const maxProduct1 = numericItem[n-1] * numericItem[n-2] * numericItem[n-3]
  
    const maxProduct2 = numericItem[0] * numericItem[1] * numericItem[n-1]
  
    // Compare the two products and return the maximum
  const result = Math.max(maxProduct1, maxProduct2);
  
  console.log(`The maximum product ${result}`);
  }
  
  const arrNum = [8, 7, true, -9, "fdgdg", -6, 0, false, 2, 9, 10]
  
  maxProductOfThree(arrNum)

// JavaScript challenge 2
// -Create a function that checks through an array and identifies repeated entries, and clean up the entries of the array to contain only unique items.
// -It should also count the number of the repeated entries in the original array.
// -Example:
// let myArr = [1,2,3,2,4,3,2]
// cleanUpArray(myArr);
// // “2” appeared 3 times
// // “3” appeared 2 times 

// //Cleaned array = [1, 2, 3, 4]

// modules import /export 
import { extFunction, outSide } from "./Help.js";
console.log(outSide);
console.log(extFunction(2, 5));

import  toDoList  from "./data.js"; // default export 
import { sthelse } from "./data.js"; // ordinary export
console.log(toDoList);
console.log(sthelse);

// Object properties /methods
const bio = {
    studentId:232,
    firstName: "John",
    LastName: "Doe",
    academy: "techstudio",
    cohort : " ISA/DEC2023",
    course: "JSF",
    tutor: "Blard",
    isCompleted :false,
    read: function(){
        return`Hi, my name is ${this.firstName} ${this.LastName}, I' am student of ${this.academy} studying ${this.course}, My tutor is ${this.tutor}`
    }
}
console.log(bio);
//Accessing object 
console.log(bio.cohort);
console.log(bio.academy);
console.log(bio.tutor);
console.log(bio.read());

// creating ndw property
bio.education = ["bsc", "jjc", "kfc"]

// Destructuring object 
const{ firstName, academy, studentId} = bio;
console.log(studentId);

// spread operator 
console.log(myObj);
const spreadDate ={...myObj, ...bio}
console.log(spreadDate);

// callback function
// a callback is a function passed as an argument to another function 

function  fn1 () {
    console.log(`This is a callback function `);
}
function fn2 (cb){
    return cb();
}
//  fn2(fn1)

 // set time out  ;is used to call back for a specific time
//  setTimeout(fn1, 5000)

 // set interval; used to call out fore every certain time
//  setInterval(fn1, 2000)

  const date  = new Date() ;
//   console.log(date.getHours());


 // Higher order array function
// ForEach , map , filter , etc 
// arr .forEach(cb) 
// arr .map(cb) 
// arr .filter(cb) 
// arr .sort(cb)
console.log(toDoList); 

//forEach
// toDoList.forEach((item)=>{
//     // write your code 
//     console.log(`${item.text}, ${item.time}`);
// })

 toDoList.forEach((item)=>{console.log(`${item.text}, ${item.time}`);
})
//map
const mappedList = toDoList.map((item)=> item.text)
console.log(mappedList);
// mappedList.splice(3)
console.log(mappedList.slice(0,3));

//filter
const completed = toDoList.filter((item) => item.isDone)
console.log(completed);

// sort , find , reduce , some , etc 
 
// setTimeout(() =>{
//     console.log("callback 1");
//     setTimeout(() =>{
//         console.log(" callback 2");
//         setTimeout(() =>{
//             console.log("callback 3");
//         }, 2000)
//     }, 2000)  
// } ,2000)

// Callback hell

// function myDisplayer (sth){
//     console.log(`Result is ${sth}`);
// }
// function myCalculator ( num1, num2, myCallback){
//     const sum = num1 + num2;
//     myCallback(sum);
// }
// myCalculator(5, 6, myDisplayer)

function myDisplayer (sth){
    console.log(`Result is ${sth}`);
  }
  function bunmiDisplay(d, s){
    console.log(`Bunmi Display sum ${d}`);
    console.log(`Bunmi Display square ${s}`);
  }
  const sqNum = (a, b) => a**b
  
 function myCalculator (num1, num2, bunmi, sqIt){
    const sum = num1 + num2;
    const sq = sqIt(num1, num2)
    //callback(sum);
    // myDisplayer(sum);
    bunmi(sum, sq);
  }

  myCalculator(5, 6, bunmiDisplay, sqNum)

  // Promises 
  // creating promises 
  const myPromise = new Promise((resolve, reject) => {
    if (!isAdmin) {
        resolve ("Promise  fulfilled");
    }else{
        reject("Promise rejected");
    }
    
    
  });

  // consuming promises
  myPromise
  .then((result) => {
    console.log(result); }) 
    .catch((error) => console.log(error))

// // fectch API
// fetch API  is a promise based api because it return s promise . And the promise can be consumed using the dot then (.then)  method 
// console.log(window);
const url = "https://restcountries.com/v2/all"
fetch(url)
.then((response) => response.json ())
.then((data) => {
   // loop through the array the data array 
 const africa = data.filter((country) => country.region === "Africa") 
//  console.log(africa);
 africa.forEach((country)=> console.log(country.name, country.population, country.cioc))

})

const URL = "https://jsonplaceholder.typicode.com/posts"
// fetch(URL)
// .then((response ) => response.json())
// .then((post) => {
//     console.log(post.slice(0, 20));
// })

// async / await
const isLoading = true;
async function fetchPost (URL, start,end) {
    try {
        const res = await fetch(URL);
    const data = await res.json();
    // console.log(data)
    if (isLoading) {
        return "LOADING...."
    }
    const slicedData = data.slice(start,end)
     // console .log (sliceData)
    console.log(slicedData);
    return slicedData
    } catch (error) {
        console.log("Error fetching post",error);
    }    
}
// fetch post 
const page1 =await  fetchPost(URL, 0, 20)
const page2 =await  fetchPost(URL, 20, 40)
const page3 =await  fetchPost(URL, 40, 60)
const page4 =await  fetchPost(URL, 60, 80)
const page5 =await  fetchPost(URL, 80, 100)

console.log( page1, page2, page3, page4, page5);

// localStorage