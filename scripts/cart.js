
import navbar from "../components/navbar.js"
import loginCheck from "../utlis/logincheck.js"



const status = loginCheck()
console.log(status)
if (!status) {
    alert("login first")
    window.location.href = "signup.html"
}
let cont = doc`ument.querySelector("#navbar");
   cont.innerHTML = navbar(length)

// ................................


// ................................
let dataLS = JSON.parse(localStorage.getItem("cart")) || []


function append(data) {
    let cont = document.getElementById("results")
    cont.innerHTML = null
    data.forEach(el => {
        let div = document.createElement("div")
        div.setAttribute("class", "product_div")

        let img = document.createElement("img")
        img.src = el.image



        let p = document.createElement("p")
        p.innerText = el.title
            ;

        let p1 = document.createElement("p")
        p1.innerText = el.qty
            ;
        p1.setAttribute("class", "qty")

        let div1 = document.createElement("div")
        div1.setAttribute("class", "disc_div")

        let disc = document.createElement("p")
        disc.innerText = el.description
        disc.setAttribute("class", "disc")

        div1.append(disc)

        let price = document.createElement("p")
        price.innerText = "₹" + el.price
            ;

        let div3 = document.createElement("div")
        div3.setAttribute("class", "button_div")

        const removebutton = document.createElement("button");
        removebutton.innerText = "Delete"

        removebutton.addEventListener("click", function () {
            delProduct(el)
        })


        const incbutton = document.createElement("button");
        incbutton.innerText = "+"
        incbutton.addEventListener("click", function () {
            handleqty(el, `+`)
        })


        const decbutton = document.createElement("button");
        decbutton.innerText = "-"

        decbutton.addEventListener("click", function () {
            handleqty(el, `-`)
        })


        // const addTocart=document.createElement("button");
        // addTocart.innerText="Add to Cart"

        div3.append(removebutton, incbutton, p1, decbutton)

        div.append(img, p, price, div1, div3)

        cont.append(div)
    });

}

append(dataLS)


// ................................................
const delProduct = (data) => {
    console.log(data)
    dataLS = dataLS.filter((el) => {
        if (el.id != data.id) {
            return el;
        }
    })
    localStorage.setItem("cart", JSON.stringify(dataLS))
    append(dataLS)
    total_price()
    let cont = document.querySelector("#navbar");
   cont.innerHTML = navbar(length)

}

const total_price = () => {
    let sum = 0

    for (let i = 0; i < dataLS.length; i++) {
        sum += (dataLS[i].price) * dataLS[i].qty
    }
    console.log(sum)

    let cart_total = document.getElementById("cart_total")
    cart_total.innerHTML = null
    let h1 = document.createElement("h1");
    h1.innerText = "Total Price :" + Math.round(sum)
    localStorage.setItem("total",JSON.stringify(sum))
    

    h1.style.margin = "40px"
    h1.style.color = "teal"
    h1.style.borderTop = "1px solid"
    h1.style.borderTopColor = "wheat"
    h1.style.borderBottomColor = "wheat"
    h1.style.textAlign = "right"

    cart_total.append(h1)
}

total_price()


const handleqty = (data, type) => {
    if (type === "+") {
        data.qty = data.qty + 1
        append(dataLS)
        localStorage.setItem("cart", JSON.stringify(dataLS))
        total_price()

    }
    if (type === "-") {
        if (data.qty == 1) {
            alert("item can't be less than 1")
            return;
        }


        data.qty = data.qty - 1
        append(dataLS)
        localStorage.setItem("cart", JSON.stringify(dataLS))
        total_price()
    }
}

let buy1=document.getElementById("buy")
buy1.addEventListener("click",function(){
    buy()
})
const buy=()=>{
    
    window.location.href="details.html"
}