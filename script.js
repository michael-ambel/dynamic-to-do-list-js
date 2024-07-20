document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = function(){
        const taskText = taskInput.value.trim();
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
            taskInput.value = '';
        })
    }

    addButton.addEventListener('click', function(){
        addTask();
    })

    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    })
})

