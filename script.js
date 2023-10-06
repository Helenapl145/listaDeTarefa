const tasksWilAdd = document.getElementById('addTasks');
const btnAdd = document.getElementById('buttonTask');
const tasksContainer = document.getElementById('tasksAdded');

const validateTasks = () => tasksWilAdd.value.trim().length > 0;

const addEachTasks = () => {
    const tasksValidated = validateTasks();
    const taskItem = document.createElement('div');
    const icons = document.createElement('div');
    const taskText = document.createElement('p');
    const deleteTasks = document.createElement('i');
    const checkedTasks = document.createElement('i');

    if(!tasksValidated){
        return tasksWilAdd.classList.add('error')
    };
    
    taskItem.classList.add('task-item');
    icons.classList.add('wraperIcons')
    
    deleteTasks.classList.add("fa-solid");
    deleteTasks.classList.add("fa-trash");
    deleteTasks.classList.add('btnDelete')

    checkedTasks.classList.add("fa-solid");
    checkedTasks.classList.add("fa-check");
    checkedTasks.classList.add('btnChecked')

    taskText.innerText = tasksWilAdd.value;
    

    document.addEventListener('keydown', function(event){
        if(event.key === 'Control'){
            taskCompleted(taskText)
        }
    })

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){
            deleteTask(taskItem)
        }
    })

    taskText.addEventListener('click', () => taskCompleted(taskText))
    checkedTasks.addEventListener('click', () => taskCompleted(taskText))
    deleteTasks.addEventListener('click', () => deleteTask(taskItem));

    taskItem.appendChild(taskText);
    taskItem.appendChild(icons)
    icons.appendChild(checkedTasks)
    icons.appendChild(deleteTasks);
    tasksContainer.appendChild(taskItem);

    tasksWilAdd.value = "";
    tasksWilAdd.classList.remove('error');
}

const taskCompleted = (taskText) =>{
    const oneTaskCompleted = taskText
    oneTaskCompleted.classList.toggle('taskCompleted')
};

const deleteTask = (taskItem) => {
    const oneTaskDeleted = taskItem
    oneTaskDeleted.remove()
}

const nothingErro = () => {
    const tasksValidated = validateTasks();

    if(tasksValidated) {
        return tasksWilAdd.classList.remove('error');
    }
}

document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addEachTasks()
    }
})


btnAdd.addEventListener("click", () => addEachTasks()); 

tasksWilAdd.addEventListener("change", () => nothingErro());

