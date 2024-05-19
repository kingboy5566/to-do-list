

var userInput = document.querySelector('#warpper input')
var addBtn = document.querySelector('#add-btn')
var show = document.querySelector('#task')
var error = document.querySelector('#error')
var countValue =document.querySelector('.count-value');
let taskCount = 0;


function add(){
    var userInput = document.querySelector('#warpper input').value.trim()
    var error = document.querySelector('#error')
    error.style.display ="none"
        if(! userInput){setTimeout(() => {error.style.display = "block";},200)} 
        else{
            var show = document.querySelector('#task')
             var li = document.createElement("li")
              show.appendChild(li)    
              li.setAttribute('class','task-check')
           
   var add = `    ${userInput}
   <button onclick="editbtn()" id="edit">Edit</button>
   <button onclick="deletebtn()" id="delete">delete</button>
  
   ` 
    
    li.innerHTML = add
   
    var userInput = document.querySelector('#warpper input')
    userInput.value=""
    taskCount += 1
  countValue.innerHTML = taskCount
   
    
    } 
            }
           
   

function deletebtn(){
    event.target.parentNode.remove()
    userInput.value = ""
    taskCount -= 1
  countValue.innerHTML = taskCount
}

function editbtn(){
    var oldinput=(event.target.parentNode.firstChild.nodeValue);
    var taxtupdata = prompt("enter your new task", oldinput)
    event.target.parentNode.firstChild.nodeValue = taxtupdata
     userInput.value = ""
    // console.log(event.previousSibling);
}

    //    var task =`<div class = "task>">
    //   li.setAttribute('class','task-check')
    //     <span class ="taskName"> ${userInput} </span>

    //     <button class="edit" onclick="editbtn()" >
    //     edith
    //      </button> 
    //      <button class="delete" onclick="deletebtn()">delete
        
    //      </button> 
    //      </div>`
          
    //     tasksContainer.insertAdjacentHTML("beforeend",task);
    

// var editbtn1 =document.querySelectorAll('.edit');
// editbtn1.forEach((editbtn)=>{
//     editbtn.onclick =(e) =>{
//         let targetElement = e.target;
//         if(!(e.target.ClassName == "edit" )){
//             targetElement = e.target.parentElement;}
//             userInput.value = targetElement
//             previousElementSibling.innerTaxt
//             targetElement.parentNode.remove()
//         }
//     }
// )










// var displayCount = (taskCount)=>{
//     countValue.innerTaxt = taskCount;
  
// }





        
//         var task =`<div class = "task>">
//         <input type ="checkbox" class= "task-check">
//         <span class ="taskName"> ${taskName} </span>
//         <button class="edit" onclick="edithbtn()" >
//         edith
//          </button> 
//          <button class="delete" onclick="deletebtn()">delete
        
//          </button> 
//           </div>`
          
//          tasksContainer.insertAdjacentHTML("beforeend",task);


// var deleteButton = document.querySelectorAll('.delete')
//            deleteButton.forEach((button) =>{
            
//              button.onclick =()=>{
//                 button.parentNode.remove();
//                      taskCount-=1;
                    
//                      displayCount(taskCount)
//                 };})
//                   var editbuttons = document.querySelectorAll('.edit')

//         editbuttons.forEach((editBtn)=>{
            
//             editBtn.onclick =(e) => {
//                 var targetElement = e.target;
//                 if( e.target.className == "edit"){
//                     targetElement = e.target.parentElement;}
//                     newTaskInput.value = targetElement.previousElementSibling.innerTaxt;
//                     targetElement.parentNode.remove();
//                     taskCount -= 1;
//                     displayCount(taskCount);
                
//             }
//         })
       
//         var tasksCheck = document.querySelectorAll(".task-check");
//         tasksCheck.forEach((chekbox) => {
//             chekbox.onchange = () =>{
//                 chekbox.nextElementSibling.classList.toggle("completed");
//                 if ( chekbox.cheked){
//                     taskCount -= 1

//                 }else{
//                     taskCount += 1;
                   
//                 }
//                 displayCount(taskCount);
//             }
    
//         }) 
//         taskCount +=1;
//         displayCount(taskCount);
//         newTaskInput = " ";
//           }  
        

//   addBtn.addEventListener("click", task);
//   window.onload = () =>{taskCount = 0;
//     displayCount(taskCount);
//   }
//   newTaskInput.value = " ";
 


















