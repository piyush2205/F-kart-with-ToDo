import navbar from "../components/navbar.js";
import loginCheck from "../utlis/logincheck.js";
let cont = document.querySelector("#navbar");
cont.innerHTML = navbar();

const status = loginCheck();
console.log(status);
if (!status) {
    alert("login first");
    window.location.href = "signup.html";
}



const input1=document.querySelector("#input1")
const input2=document.querySelector("#input2")
const input3=document.querySelector("#input3")
const input4=document.querySelector("#input4")

input1.focus()


input1.addEventListener("input",()=>{
    if(input1.value.length=== 1){
        input2.focus()
    }
  

})

input2.addEventListener("input",()=>{
    if(input2.value.length=== 1){
        input3.focus()
    }
    if(input2.value.length=== 0){
        input1.focus()
    }
})
input3.addEventListener("input",()=>{
    if(input3.value.length=== 1){
        input4.focus()
    }
    if(input3.value.length=== 0){
        input2.focus()
    }
})


input4.addEventListener("input",()=>{
    if(input4.value.length=== 0){
        input3.focus()
    }
  

})

const submit=document.getElementById("submit")
submit.addEventListener('click',()=>{
    handleSubmit()
})
const res=document.getElementById("results")

const handleSubmit=()=>{
    setTimeout(() => {
        alert("order confirmed")
    }, 1000);

    setTimeout(() => {
        alert("order packaging")
    }, 3000);

    setTimeout(() => {
        alert("order is out for delivery")
    }, 6000);

    
    setTimeout(() => {
        alert("order delivered")
    }, 10000);

    setTimeout(() => {
        res.innerHTML=null;
        append1() 
    }, 15000);

    setTimeout(() => {
        window.location.href="index.html"
    }, 20000);
}



const append1=()=>{
    const res=document.getElementById("results")
    
   
        let h1=document.createElement("h1")
        h1.innerText="Thank you for shopping please visit again"
          
        
        res.append(h1)
    
    
        }
        