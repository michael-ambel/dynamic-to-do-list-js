document.addEventListener('DOMContentLoaded', function(){

   

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, save = false)); // 'false' indicates not to save again to Local Storage
    }
 
        loadTasks()

    function addTask(taskText, save = true){

        
        if(!taskText){  // check if taskInput doesn't have text inside
           alert('enter task');
        }

        //create list element to add to the task list and remove button for remove from the task list
        const li = document.createElement('li'); 
        li.textContent = taskText;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn')
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        removeBtn.addEventListener('click', function(event){
            event.preventDefault();
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.pop(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        })
        
        taskInput.value = '';
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    addButton.addEventListener('click', function(){
        let taskText = taskInput.value.trim();
        addTask(taskText, save = true);
    })

    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            let taskText = taskInput.value.trim();
            addTask(taskText, save = true);
        }
    })
})

