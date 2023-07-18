import loginCheck from "../utlis/logincheck.js"

function navbar(length = 0) {

    let cartarr = JSON.parse(localStorage.getItem("cart"));

    if (cartarr) {
        length = cartarr.length
    }

    const status = loginCheck()
    // console.log(status)
    if (!status) {
        length = null
    }


    return `
    <div class="title_div">
    <a href="index.html"> <h1 style="color:teal"> App.net</h1></a>
    </div>
    <div id="search_div">
        <div class="input_div">
            <input type="text" name="" placeholder="Search Something New" id="input_breed">
            
        </div>
        <div class="search_button">
            <button id="search">Search</button>
        </div>
       
    </div>
   
    <div class="login_div">
   
    <a href="login.html"><h3 class="login">Login</h3></a>
    <a href="signup.html"> <h3 class="signup">Signup</h3></a>
     <a href="product.html"> <h3 class="product">Product</h3></a>
     <a href="cart.html">  <h3 class="cart">${length === null ? `Cart` : `Cart : ${length}`}</h3></a>

     <a href="dog.html"> <h3 class="dogs">Dogs</h3></a>
     
     <a href="todo.html"> <h3 class="todo">Todo</h3></a>
     <img src="https://th.bing.com/th/id/OIP.ip6084Tr-343MGlbZ40FCAHaHa?pid=ImgDet&rs=1" alt="">
       
       
        
       
      
       
    </div>
   
`
}

export default navbar;

// <a href="todo.html"><h3 class="todo">Todo</h3></a>
//<a href="index.html">  <h3 class="home">Home</h3></a> 