export const localStorageSave = (task,list) => {
    
    // if(localStorage.getItem('tasks') === null) {
        list.push(task);
        localStorage.setItem('tasks', JSON.stringify(list));
    //   } else {
    //     let tasks = JSON.parse(localStorage.getItem('tasks'));
    //     ToDoList.toDoList.push(task);
    //     localStorage.setItem('tasks', JSON.stringify(ToDoList.toDoList));
    //   }
}

const localStorageGet = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
    tasks?.map((task) => {
        let title = task.title;
        let description = task.description; 
    
        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
              <p>${title} - ${description}
              <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
              </p>
            </div>
          </div>`;
    })
}
