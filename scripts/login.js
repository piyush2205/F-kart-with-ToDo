
import navbar from "../components/navbar.js"
let cont= document.querySelector("#navbar");
cont.innerHTML=navbar()

// ...............................................................................



let form=document.getElementById("login_form")
form.addEventListener("submit",function(){
    submit()
})

let submit=(e)=>{
    event.preventDefault()
    // console.log("lolo")

    
    let email=document.getElementById("email").value


    
    let password=document.getElementById("password").value


    if((!email)||(!password)){
        alert("Please fill the data")
        return;
    }

    loginapi(data)
}

let email= "eve.holt@reqres.in";
let password= "cityslicka";



let data={
    email,
    password
}



const url =`https://reqres.in/api/login`

let loginapi=async()=>{
      try{
             let res=await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(data)
             });

          let stored_data=await res.json ();
          console.log(stored_data)  
        alert("success")
        localStorage.setItem("token",JSON.stringify(stored_data));
        window.location.href="index.html"
      }catch(err){
        console.log(err)

        alert("not match")
      }
}