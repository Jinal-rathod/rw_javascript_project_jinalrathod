// Task Manager

const addTask = document.getElementById("addTaskBtn");

let tasks = [];
let editID = null;

// Load tasks
window.onload = () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  displayTasks();
};

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Tasks
addTask.onclick = () => {
  const title = taskTitle.value.trim();
  const date = taskDate.value;
  const priority = taskPriority.value;

  if (!title || !date) return alert("Please fill all fields!");

  tasks.push({
    id: Date.now(),
    title,
    date,
    priority,
  });

  saveTasks();
  displayTasks();

  taskTitle.value = "";
  taskDate.value = "";
};

// Rendering the Tasks
function displayTasks(list = tasks) {
  taskList.innerHTML = "";

  list.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
            <div class = "mb-5" style = "border : 1px solid slateblue; width : 500px; border-radius : 20px">
                <span class="fw-bold badge ${task.priority} " style = "padding : 8px 16px; border-radius: 20px; font-size: 14px; color: white; margin : 5px">${task.priority}</span>
                <div class = "py-3 px-5">
                <h3 class="task-title" style = "font-size:20px; margin:0px;">${task.title}</h3>
                <p class="task-date" style = "font-size : 14px; color : gray;">${task.date}</p>

                <div class = "d-flex gap-3">
                <button class="editBtn px-4 py-1 bg-primary" style = "border : none; color : #fff; border-radius: 10px;" onclick="editTask(${task.id})">Edit</button>
                <button class="deleteBtn px-4 py-1 bg-danger" style = "border : none; color : #fff; border-radius: 10px;" onclick="deleteTask(${task.id})">Delete</button>
                </div>
                </div>
            </div>  
        `;

    taskList.appendChild(div);
  });
}

// Delete Tasks
function deleteTask(id) {
  if (!alert("Are your sure, You want to delete this task.....!")) {
    tasks = tasks.filter((t) => t.id !== id);
  }

  saveTasks();
  displayTasks();
}

// Edit Tasks
function editTask(id) {
  editID = id;
  const t = tasks.find((x) => x.id === id);

  editTitle.value = t.title;
  editDate.value = t.date;
  editPriority.value = t.priority;

  editModal.style.display = "flex";
}

// Close Btn
closeModal.onclick = () => {
  editModal.style.display = "none";
};

// SAVE EDIT
saveEdit.onclick = () => {
  const t = tasks.find((x) => x.id === editID);

  t.title = editTitle.value;
  t.date = editDate.value;
  t.priority = editPriority.value;

  saveTasks();
  displayTasks();

  editModal.style.display = "none";
};

// Search Input
searchBox.oninput = () => {
  let q = searchBox.value.toLowerCase();
  let filtered = tasks.filter((t) => t.title.toLowerCase().includes(q));
  displayTasks(filtered);
};

// filter Priority
filterPriority.onchange = () => {
  const val = filterPriority.value;
  if (val === "all") return displayTasks();

  displayTasks(tasks.filter((t) => t.priority === val));
};
