import navbar from "../components/navbar.js"
let cont= document.querySelector("#navbar");
cont.innerHTML=navbar()

// ...................................................................................



let todo_arr=JSON.parse(localStorage.getItem("todos"))||[];

// .....................









let todo=document.getElementById("todo_button")
todo.addEventListener("click" ,function(){
        add_todo()
})


 

let add_todo=()=>{
    let todo=document.getElementById("todo_input").value

if(!todo){
    alert("please enter data");
    return;
}


    let data={
           todo:todo,
           status:false,
           id:Date.now()+todo
    }

    todo_arr.push(data)

    localStorage.setItem("todos",JSON.stringify(todo_arr))
    
    document.getElementById("todo_input").value=null
  

append()

}
 


let append =()=>{

    let cont=document.getElementById("results")
    cont.innerHTML=null

    todo_arr.forEach(el => {

    let div=document.createElement("div")
    div.style.display="flex"
      
      let h1=document.createElement("h2")
      h1.innerText=el.todo
      
      let toggle_buttn=document.createElement("button")
      toggle_buttn.innerText="Toggle" 
      toggle_buttn.addEventListener('click',function(){
        updatedtodo(el.id)
      })     

      let buttn1=document.createElement("button")

      buttn1.innerText="Delete"
      buttn1.addEventListener("click",function(){
        deletetodo(el.id)
      })
     
      if(el.status){
        toggle_buttn.innerText="Done"
        toggle_buttn.style.backgroundColor="green"
      }else{
        toggle_buttn.innerText="Not Done"
        toggle_buttn.style.backgroundColor="red"
      }



      div.append(h1,toggle_buttn,buttn1)

      cont.append(div)


     

    });
      

     
}



function updatedtodo(id){

     todo_arr=todo_arr.map(el=>{
        if(el.id===id){
            return {...el, status: !el.status}
        }else{
            return el;
        }
    }) 

    localStorage.setItem("todos",JSON.stringify(todo_arr))
    append()
}


function deletetodo(id){
    // console.log(id)
   todo_arr=todo_arr.filter((el)=>{
    // console.log(el.id)
      return el.id != id;
     
    })
    localStorage.setItem("todos",JSON.stringify(todo_arr))
    append()
}