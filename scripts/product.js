
import navbar from "../components/navbar.js"
import loginCheck from "../utlis/logincheck.js"

const status = loginCheck()
console.log(status)
if (!status) {
    alert("login first")
    window.location.href = "signup.html"
}




// ...........................................





let cart = JSON.parse(localStorage.getItem("cart")) || [];

function cartLength(cart) {
    let length = cart.length;
    console.log(cart)
    let cont = document.querySelector("#navbar");
    cont.innerHTML = navbar(length)

}

cartLength(cart)

// https://fakestoreapi.com/products

// const url=` https://api.escuelajs.co/api/v1/products `

const url = `https://fakestoreapi.com/products`


fetch(url)
    .then(function (res) {
        return res.json()

    }).then(function (res) {
        console.log(res)
        let data = res
        append(data)
        // sorting(data)
    }).catch(function (err) {
        console.log(err)
    })


function append(data) {
    let cont = document.getElementById("results")

    data.forEach(el => {
        let div = document.createElement("div")
        div.setAttribute("class", "product_div")

        let img = document.createElement("img")
        img.src = el.image



        let p = document.createElement("p")
        p.innerText = el.title
            ;

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

        const buybutton = document.createElement("button");
        buybutton.innerText = "Buy"
        buybutton.addEventListener("click",()=>{
            buyitem()
        })

        const addTocart = document.createElement("button");
        addTocart.innerText = "Add to Cart"
        addTocart.addEventListener("click", function () {
            addtoCart(el)
            // handle_cart(el.id,data,el)
        })

        div3.append(buybutton, addTocart)

        div.append(img, p, price, div1, div3)

        cont.append(div)
    });

}



const addtoCart = (data) => {


    const status = loginCheck()
    if (!status) {
        alert("login first")
        window.location.href = "login.html"
        return;
    }

    let flag = false;
    cart.map((el) => {
        if (el.id == data.id) {
            flag = true;
        }
    })

    if (flag) {
        alert("alredy in cart")
        return;
    }

    data.qty = 1;

    cart.push(data)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("item added to cart")
    cartLength(cart)
}


const buyitem=()=>{
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
        // res.innerHTML=null;
        // append1() 
    }, 15000);

    setTimeout(() => {
        window.location.href="index.html"
    }, 20000);
    // window.location.href="details.html"
}

// let sort = document.querySelector("#sortbyprice")
// sort.addEventListener("change", function () {
//     sorting()
// })

// const sorting = (data) => {
       
//     console.log(data)

//     let slected = document.getElementById("sortbyprice").value
   

//     if (slected === "Low to High")
   
//         data.sort((a, b) => {
//             return b.price - a.price
//         })

//     if (slected === "high to Low") {
//         data.sort((a, b) => {
//             return a.price - b.price
//         })
//     }
    
//     // append(data)
// }