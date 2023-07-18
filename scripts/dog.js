import loginCheck from "../utlis/logincheck.js"
import navbar from "../components/navbar.js"
let cont= document.querySelector("#navbar");
cont.innerHTML=navbar()

// ............................................
const status=loginCheck()
console.log(status)
if(!status){
    alert("login first")
    window.location.href="signup.html"
}



// ....................................................................................................





const url=` https://dog.ceo/api/breeds/list/all`

fetch (url)
.then(function(res){
    return res.json()

}).then(function( res){
console.log(res)
append(res.message)
}).catch(function (err){
    console.log(err)
})

function append (message){
    let cont=document.getElementById("results")

    for( let key in message ){
        let div=document.createElement("div")
        div.setAttribute("class","divcard")
     
        let h1=document.createElement("h1")
        h1.innerText=key;

        h1.onclick=function(){
            // let data= this.innerText

            localStorage.setItem("breed",(key))  
            window.location.href="puppy.html"   
            }

        h1.setAttribute("class","card")
   
        div.append(h1)
        cont.append(div)

    }
    
 


}








function search_breed(){

let breedname=document.getElementById("input_breed").value

// console.log(breedname)

const url=`https://dog.ceo/api/breed/${breedname}/images`

fetch (url)
.then(function(res){
    return res.json()

}).then(function( res){
console.log(res.message)
let data=res.message
  localStorage.setItem("search_breed",JSON.stringify(data))
}).catch(function (err){
    console.log(err)
})

 window.location.href="search.html"

}


