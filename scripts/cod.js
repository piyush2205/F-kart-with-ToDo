import loginCheck from "../utlis/logincheck.js"
import navbar from "../components/navbar.js"

let cont = document.querySelector("#navbar");
cont.innerHTML = navbar()

// ............................................
const status = loginCheck()
console.log(status)
if (!status) {
    alert("login first")
    window.location.href = "signup.html"
}

const dataLS = JSON.parse(localStorage.getItem("orderDetails"))

const append = () => {
    const res = document.getElementById("results")

    for (let key in dataLS) {
        console.log(dataLS[key])

        if (dataLS[key] == "COD") {
            for (let key in dataLS) {
                let h1 = document.createElement("h1")
                h1.innerText = dataLS[key]


                res.append(h1)
            }

        }
         if (dataLS[key] == "CARD") {
            for (let key in dataLS) {
                let h1 = document.createElement("h1")
                h1.innerText = dataLS[key]
                res.append(h1)

            }
        }
        if(key == "cardDetails"){
            for(let i in dataLS["cardDetails"]){
                console.log(dataLS["cardDetails"][i])
                let h2 = document.createElement("h1")
                h2.innerText = dataLS["cardDetails"][i]
                  res.append(h2)
        }

       
       
    }

    
    }

    let confirm = document.createElement("button")
    confirm.innerText = "Order"
    confirm.addEventListener("click", () => {
        orderconfirm()
    })

    res.append(confirm)

}

append()

const res = document.getElementById("results")
const orderconfirm = () => {
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
        res.innerHTML = null;
        append1()
    }, 15000);

    setTimeout(() => {
        window.location.href = "index.html"
    }, 20000);
}


const append1 = () => {
    const res = document.getElementById("results")


    let h1 = document.createElement("h1")
    h1.innerText = "Thank you for shopping please visit again"


    res.append(h1)
    localStorage.removeItem("cart")

}

