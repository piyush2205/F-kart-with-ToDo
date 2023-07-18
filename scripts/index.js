import loginCheck from "../utlis/logincheck.js"
import navbar from "../components/navbar.js"
let cont = document.querySelector("#navbar");
cont.innerHTML = navbar()

// ........................search fun...............................//




let search = document.getElementById("search");

search.addEventListener("click", function () {
    search_breed()
})





function search_breed() {

    let breedname = document.getElementById("input_breed").value

    // console.log(breedname)

    const url = `https://dog.ceo/api/breed/${breedname}/images`

    fetch(url)
        .then(function (res) {
            return res.json()

        }).then(function (res) {
            console.log(res.message)
            let data = res.message
            localStorage.setItem("search_breed", JSON.stringify(data))
        }).catch(function (err) {
            console.log(err)
        })

    window.location.href = "search.html"

}

//     search_breed()
// ........................search fun...............................//


let dataLS = JSON.parse(localStorage.getItem("name"))

// ........................

let conta = document.getElementById("cont")



let div = document.createElement("div")

let h1 = document.createElement("h1")

if (dataLS == null) {
    h1.innerText = "Welcome App.net "
    h1.style.color="red"
    
    h1.style.margin = "40px"
    h1.style.borderTop= "1px solid"
    h1.style.borderTopColor = "wheat"
    h1.style.borderBottomColor = "wheat"
 
} else {
    h1.innerText = "BUY YOUR FAVOURATE PRODUCT "
    h1.style.color="red"
    
    h1.style.margin = "40px"
   
    h1.style.borderBottom = "1px solid"
    h1.style.borderTopColor = "wheat"
    h1.style.borderBottomColor = "wheat"
   

}


div.append(h1)

conta.append(div)


// .........................................


const handlename = () => {
    let container = document.getElementById("navbar")

    if (dataLS == null) {
        return;
    } else {

        let div1 = document.createElement("div")
        div1.setAttribute("class", "namediv")

        let h12 = document.createElement("h3")

        h12.innerText = dataLS


        // let img=document.createElement("img")
        // img.src=

        div1.append(h12)

        container.append(div1)
    }

}

handlename()


// ....................................................


function catageory() {



    // console.log(breedname)

    const url = `https://fakestoreapi.com/products/categories`

    fetch(url)
        .then(function (res) {
            return res.json()

        }).then(function (res) {
            console.log(res)
            let data = res
            appendcat(data)
            // localStorage.setItem("search_breed", JSON.stringify(data))
        }).catch(function (err) {
            console.log(err)
        })


}

catageory()


const appendcat = (data) => {
    let catageory = document.getElementById("container1")



    let div1 = document.createElement("div")
    div1.setAttribute("class", "catdiv")
    

    let div2 = document.createElement("div")
    div2.setAttribute("class", "catdiv")
   
    let div3 = document.createElement("div")
    div3.setAttribute("class", "catdiv")
   
    let div4 = document.createElement("div")
    div4.setAttribute("class", "catdiv")
    


    let img = document.createElement("img")

    img.src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"

    let h12 = document.createElement("h3")

    h12.innerText = data[0]
    h12.addEventListener("click",()=>{
        localStorage.setItem("categoery",JSON.stringify( h12.innerText))
    })
    h12 .addEventListener("click",()=>{
        window.location.href="category.html"
    })

    let img2 = document.createElement("img")

    img2.src = "https://th.bing.com/th/id/OIP.7IsqEH1UpGeyDO48Nzz5IAHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.25&pid=1.7"

    let h124 = document.createElement("h3")

    h124.innerText = data[1]
    h124.addEventListener("click",()=>{
        localStorage.setItem("categoery",JSON.stringify( h124.innerText))
    })
    h124 .addEventListener("click",()=>{
        window.location.href="category.html"
    })

    
    let img5 = document.createElement("img")

    img5.src = "https://th.bing.com/th/id/OIP.4Fvehj520OddebKQvItG3QHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.25&pid=1.7"

    let h125 = document.createElement("h3")

    h125.innerText = data[3] 
    h125.addEventListener("click",()=>{
        localStorage.setItem("categoery",JSON.stringify( h125.innerText))
    })
    h125 .addEventListener("click",()=>{
        window.location.href="category.html"
    })

    let img3 = document.createElement("img")

    img3.src = "https://th.bing.com/th/id/OIP.uVXS1ZmJL2IDx6Dn0BXsJQHaIh?w=176&h=202&c=7&r=0&o=5&dpr=1.25&pid=1.7"

    let h126 = document.createElement("h3")

    h126.innerText = data[2]

    h126.addEventListener("click",()=>{
        localStorage.setItem("categoery",JSON.stringify( h126.innerText))
    })
    h126 .addEventListener("click",()=>{
        window.location.href="category.html"
    })


    div1.append(img, h12,)
    div2.append(img2,h124,)
    div3.append(img3,h125,)
    div4.append(img5,h126)

    catageory.append(div1,div2,div3,div4)
}



