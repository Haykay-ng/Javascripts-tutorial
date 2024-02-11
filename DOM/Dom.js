// // alert("Hey Dom")
// console.log(window);

// selection of DOM Elements
console.log(document.body);

// Selectors for JS
//getEleementByTagName body, nav, hi, p, ul , a , div etc

const h1 = document.getElementsByTagName("h1")

console.log(h1);
for (let h of h1){
    console.log(h.innerHTML);
}

// getElementsByClassName 
const outline = document.getElementsByClassName("outline")
// console.log(outline[0].innerText);
const p =document.getElementsByClassName("para")
// console.log(p);

for(let para of p){
    console.log(para.innerText);
}
 
//getElementById
const elem = document.getElementById("con")
console.log(elem.innerHTML);
console.log(elem.innerText);

//querySelector
const li = document.querySelector(".con li")
console.log(li);

//querySelectorAll
 const allLi =document.querySelectorAll("#con li")
 console.log(allLi);

//   for(let l of allLi){
//      console.log(l.innerText);

//  }
 allLi.forEach((Li) => console.log(Li.innerHTML))

 const Image = document.getElementsByTagName("img")[0]
 console.log(Image.getAttribute("alt"));

 // getAttiribute 
 Image.setAttribute("src", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg")


// Creating DOM Element
let img2 = document.createElement("img");
img2.setAttribute("src", "https://media.istockphoto.com/id/1333460374/photo/african-megacity-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Gu5TRHGNLRRF43YFMlDFnpkk7TBz00U8olxUqsoeiw8=")
img2.setAttribute("alt", "")
img2.className = "js-image" 
console.log(img2);
document.body.append(img2)
document.body.prepend(img2)

// Pushing created element to DOM
const pa = document.createElement("pa");
console.log(pa);
pa.innerHTML =  "This is coming from javascript"
const divContainer = document.querySelector(".con")
divContainer.appendChild(pa)
console.log(divContainer);


// modfiying CSS properties using javaScript ...style ... ClassList etc  
let body = document.querySelector("body")
console.log(body);
// body.style.backgroundColor = "black"
// body.style.color="white"
// const display = () => {
//     body.style.backgroundColor = "green";
//     body.style.color = "blue";
// }
// setTimeout(display, 50000)

const changeBg = (bg, color, time) => {
    setTimeout(() => {
      body.style.backgroundColor = bg;
      body.style.color = color;
    }, time);
  };
  
  changeBg("black", "white", 5000)
  changeBg("purple", "white", 10000)
  changeBg("green", "white", 15000)
// JavaScript Events
// Eventlistening