
import navbar from "../components/navbar.js"
let cont= document.querySelector("#navbar");
cont.innerHTML=navbar()



let dataLS=JSON.parse(localStorage.getItem("search_breed"))
console.log(dataLS)

function append (){
    let cont=document.getElementById("results")
      
    dataLS.forEach(el => {
        let div =document.createElement("div")
         

        div.setAttribute("class","imgofbreed")
        let img=document.createElement("img")

        img.src=el;

        div.append(img)

        cont.append(div)
    });
}

append()
