// function addTask() {
//   const taskInput = document.getElementById('taskInput');
//   const taskList = document.getElementById('taskList');

//   if (taskInput.value.trim() === '') {
//       alert('Please enter a task');
//       return;
//   }

//   const newTask = document.createElement('li');
//   newTask.innerHTML = `
//       <span>${taskInput.value}</span>
//       <button onclick="completeTask(this)">Complete</button>
//   `;

//   taskList.appendChild(newTask);
//   taskInput.value = '';
// }

// function completeTask(button) {
//   const task = button.parentNode;
//   task.classList.toggle('completed');
// }


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
      alert('Please enter a task');
      return;
  }

  const newTask = document.createElement('li');
  newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(newTask);
  taskInput.value = '';
}

function completeTask(button) {
  const task = button.parentNode;
  task.classList.toggle('completed');
}

function deleteTask(button) {
  const task = button.parentNode;
  const taskList = task.parentNode;
  taskList.removeChild(task);
}
