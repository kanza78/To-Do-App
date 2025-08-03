document.addEventListener('DOMContentLoaded',()=>{
  const taskInput=document.getElementById
  ('task-input');
  const addTaskBtn=document.getElementById
  ('add');
   const taskList=document.getElementById
  ('later');
  const emptyImage = document.querySelector
  ('.empty-img');


  const toggleEmptyState=()=>{
    emptyImage.style.display=taskList.children.length===0?'block':'none';
  }

  const addTask=(event)=>{
    event.preventDefault();
const taskText = taskInput.value.trim();

    if(!taskText){
        return;
    }

    const li=document.createElement('li');
    li.innerHTML=`
    <input type="checkbox" class="checkbox">
    <span>${taskText}</span>
    <div class="task-buttons">
    <button class="edit-btn"><i class="fa-solid fa-trash"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-pen-to-square"></i></button>
    `;
    
    taskList.appendChild(li);
    taskInput.value='';
    toggleEmptyState();
  };

  addTaskBtn.addEventListener('click',addTask);
  taskInput.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        addTask(e);
    }
  })
});