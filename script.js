const addBtn = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list")
const taskInput = document.querySelector(".task-input")
const completedCount = document.querySelector(".completed-count");
const uncompletedCount = document.querySelector(".uncompleted-count");
// const editBtn = document.createElement("button");
// const editBtn = document.querySelector(".edit-button");



  // Function to create the new task element
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.className = "task-item";
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;
  
    checkbox.addEventListener("change", () => {
      span.classList.toggle("completed-text", checkbox.checked);
      li.classList.toggle("completed", checkbox.checked);
      updateCounts(); 
    });
  //UPADTE COUNTS WHEN COMPLETE OR UNCOMPLETWTED
    function updateCounts() {
        const allTasks = document.querySelectorAll(".task-item input[type='checkbox']");
        let completed = 0;
        let uncompleted = 0;
      
        allTasks.forEach((checkbox) => {
          if (checkbox.checked) {
            completed++;
          } else {
            uncompleted++;
          }
        });
      
        completedCount.textContent = completed;
        uncompletedCount.textContent = uncompleted;
      }
      

    //DELETE
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-button";
    deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
    deleteBtn.addEventListener("click", () => {
      li.remove()
        
      });
    
  //EDIT 
    const editBtn = document.createElement("button");
    editBtn.className = "edit-button";
    editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task:", span.textContent);
      if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
      }
    });
  
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
  
    return li;
  }
  

 // Add task
 addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();//Get the text and trim removes all unessary spaces
    if (taskText === "") return;// when task is empty ypu cant add

    
  const newTask  = createTaskElement(taskText); //see function for createTaskElement
  taskList.appendChild(newTask); // Add it to the list

  taskInput.value = ""; // Clear the input
});
  
//edit Task
const editBtn = document.createElement("button");
editBtn.className = "edit-button";
editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';
editBtn.addEventListener("click", () => {
  const newText = prompt("Edit task:", span.textContent);
  if (newText !== null) {
    span.textContent = newText.trim();
  }
});
