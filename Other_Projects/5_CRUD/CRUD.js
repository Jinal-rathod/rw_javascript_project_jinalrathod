const STUDENT_API = "http://localhost:3000/students";

// DOM

const form = document.getElementById("studentform");
const name = document.getElementById("name");
const grid = document.getElementById("grid");
const email = document.getElementById("email");
const age = document.getElementById("age");
const mobile = document.getElementById("mobile");
const courses = document.getElementById("courses");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const student_data = document.getElementById("student_data");
const table = document.getElementById("studenttable");

let editId = null;

// Get Students with API

async function GetStudents() {
  try {
    const res = await fetch(STUDENT_API);
    const data = await res.json();
    renderStudent(data);
  } catch (err) {
    console.log(err);
    table.innerHTML = `<p class="text-center text-red-700 text-lg font-bold py-3">No Student Data Found</p>`;
  }
}

// Student Data Rendering

function renderStudent(students) {
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td class="px-5 py-4 font-medium text-gray-900">${student.name}</td>
  <td class="px-5 py-4 font-medium text-gray-900">${student.grid}</td>
  <td class="px-5 py-4 font-medium text-gray-900">${student.email}</td>
  <td class="px-5 py-4 font-medium text-gray-900">${student.age}</td>
  <td class="px-5 py-4 font-medium text-gray-900">${student.mobile}</td>
  <td class="px-5 py-4 font-medium text-gray-900">${student.gender}</td>
  <td class="px-5 py-4 font-medium text-gray-900">${student.course}</td>
  <td>
  <button onclick="editStudent('${student.id})">Edit</button>
  <button onclick="deleteStudent('${student.id})">Delete</button>
  </td>
  `;
    student_data.appendChild(row);
  });
}

// initial function calling

GetStudents();

// Registered Students

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const SelectGender =
    document.querySelector('input[name="gender"]:checked')?.value || "";

  const student = {
    name: name.value.trim(),
    grid: grid.value.trim(),
    email: email.value.trim(),
    age: parseInt(age.value),
    mobile: mobile.value.trim(),
    gender: SelectGender,
    course: courses.value,
  };

  if (
    !student.name ||
    !student.grid ||
    !student.email ||
    !student.age ||
    !student.mobile ||
    !student.course
  ) {
    alert("Please Fill All Fields");
    return;
  }

  // PUT / POST Method

  try {
    if (editId) {
      // PUT
      await fetch(`${STUDENT_API}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      saveBtn.textContent = "ADD STUDENT";
      cancelBtn.classList.add("hidden");
      editId = null;
    } else {
      // POST
      await fetch(STUDENT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
    }

    form.reset();

    const checked = document.querySelector(`input[name="gender"]:checked`);

    if (checked) checked.value = false;

    await GetStudents();
  } catch (err) {
    console.log(err);
    alert("Student data not save in database....!");
  }
});

// Edit Student

async function editStudent(id) {
  try {
    const res = await fetch(`${STUDENT_API}/${id}`);

    name.value = edit_data.name || "";
    grid.value = edit_data.grid || "";
    email.value = edit_data.email || "";
    age.value = edit_data.age || "";
    mobile.value = edit_data.mobile || "";
    gender;
    courses.value = edit_data.courses || "";
  } catch (err) {}
}

// Delete Student
async function editStudent(id) {
  try {
    const res = await fetch(`${STUDENT_API}/${id}`);

    name.value = edit_data.name || "";
    grid.value = edit_data.grid || "";
    email.value = edit_data.email || "";
    age.value = edit_data.age || "";
    mobile.value = edit_data.mobile || "";
    gender;
    courses.value = edit_data.courses || "";
  } catch (err) {}
}