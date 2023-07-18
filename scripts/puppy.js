
import navbar from "../components/navbar.js"
let cont= document.querySelector("#navbar");
cont.innerHTML=navbar()










let dataLS=localStorage.getItem("breed");
console.log(dataLS)

const url=`https://dog.ceo/api/breed/${dataLS}/images`

fetch (url)
.then(function(res){
    return res.json()

}).then(function( res){
console.log(res)
appendpic(res.message)
}).catch(function (err){
    console.log(err)
})


function appendpic (message) {
    let cont=document.getElementById("results")
      
    message.forEach(el => {
        let div =document.createElement("div")
         

        div.setAttribute("class","imgofbreed")
        let img=document.createElement("img")

        img.src=el;

        div.append(img)

        cont.append(div)
    });

}