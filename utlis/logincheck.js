const  logincheck =()=>{
    const token=JSON.parse(localStorage.getItem("token"))
    
    if(!token){
        return false;
    }
    return true;
    }
    
    export default logincheck;