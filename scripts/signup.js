
import navbar from "../components/navbar.js"
let cont= document.querySelector("#navbar");
cont.innerHTML=navbar()


// .............................................................................


let form=document.getElementById("signup_form")
form.addEventListener("submit",function(){
    submit()
})

let submit=(e)=>{
    event.preventDefault()
    // console.log("lolo")

    let name=document.getElementById("name").value
     localStorage.setItem("name",JSON.stringify(name));
    
    let number=document.getElementById("number").value

    
    let email=document.getElementById("email").value


    
    let password=document.getElementById("password").value

    let confirm_password=document.getElementById("Confirm_pass").value


    if( (!name)||(!number)||(!email)||(!password)||(!confirm_password)){
        alert("Please fill the data")
        return;
    }


    // {
        // "email": "eve.holt@reqres.in",
        // "password": "pistol"
    // }

    email= "eve.holt@reqres.in",
    password= "pistol"


    let data={
     email,
     password
    }


   const url=`https://reqres.in/api/register`


    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    }).then ((res=>{
        return res.json()
    })).then ((res=>{
        console.log(res)
        alert(`Success- ${res.token}`);
        // localStorage.setItem("signup",JSON.stringify(res))
       
        window.location.href="login.html"
    })).catch(function(err){
        console.log(err)
        alert("not able to register")
    })
}

// let handlesubmit =(confirm_password)=>{
//        if(password!=confirm_password){
//         alert("wrong password!! Please fill same data as in password")
//        }
// }
