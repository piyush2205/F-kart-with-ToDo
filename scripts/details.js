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

let mode = document.getElementById("mode");
mode.addEventListener("change", () => {
    chnagePaymnetmode();
});

const container = document.getElementById("card_details");

const chnagePaymnetmode = () => {
    const value = document.getElementById("mode").value;

    if (value != "CARD") {
        container.innerHTML = null;
    } else {
        const html = `<label for="">Account Holder Name</label>
        <input type="text" id="accountname" >
        <label for="">CVV</label>
        <input type="" id="cvv">
        <label for="">Exp Date</label>
        <input type="date" id="date">
        <label for="">Card Number</label>
        <input type="text" id="cardnumber">`;

        container.innerHTML = html;
    }
};

let from_submit = document.querySelector("#containerfrom");
from_submit.addEventListener("submit", () => {
    handle_submit();
});

// ..............................................................
const handle_submit = () => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const address_1 = document.getElementById("Address-1").value;
    const address_2 = document.getElementById("Address-2").value;
    const city = document.getElementById("City").value;
    const state = document.getElementById("State").value;
    const pincode = document.getElementById("Pincode").value;
    const contactnumber = document.getElementById("Contact").value;
    const paymentmode = document.getElementById("mode").value;


    if (!name || !address_1 || !address_2 || !city || !state || !pincode || !contactnumber || !paymentmode) {
        alert("fill the details")
        return;
    }

    let accountholdername;
    let cvv;
    let dateofex;
    let accountnumber;


    if (paymentmode === "CARD") {
        accountholdername = document.getElementById("accountname").value;
        cvv = document.getElementById("cvv").value;
        dateofex = document.getElementById("date").value;
        accountnumber = document.getElementById("cardnumber").value;


        if (!accountholdername || !cvv || !dateofex || !accountnumber) {
            alert("fill the credentials")
            return;
        }

    }

    const payload = {
        name,
        address_1,
        address_2,
        city,
        state, pincode, contactnumber, paymentmode,
    }
    if (paymentmode == "CARD") {
        payload.cardDetails = {
            cvv,
            accountholdername,
            accountnumber,
            dateofex,
        }
    }
    if(paymentmode==="COD"){
        window.location.href="cod.html"
    }
    if(paymentmode==="UPI"){
        window.location.href="upi.html"
    }
    if(paymentmode==="CARD"){
        window.location.href="otp.html"
    }
    const price=JSON.parse( localStorage.getItem("total"))
   payload.totalPrice=price
    console.log(payload)

    localStorage.setItem("orderDetails",JSON.stringify(payload))
};
