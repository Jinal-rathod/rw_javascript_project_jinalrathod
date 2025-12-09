// Key

const { createElement } = require("react");

const KEY = "";

// Const

const add = document.getElementById("add");
const clear = document.getElementById("clear");

// Fetch Data

async function fetchData() {
  try {
    const res = await fetch(KEY);
    const data = await res.json();
    renderData();
  } catch (err) {
    console.log(err);
  }
}

let Data = [];

// Rendering Data

function renderData() {
  const newdata = new Data();
  const row = createElement("tbody");
  newdata.forEach((card) => {
    row.innerHTML = `
      <tr>
        <td>1</td>
        <td><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
                alt="Vanamo Logo" width="40px"></td>
        <td>Jinal</td>  
        <td>jinal@gmail.com</td>
        <td>05-12-2025</td>
        <td>1234567890</td>
        <td>
            <button class="btn btn-primary py-1 px-2"><i class="fa fa-edit"></i></button>
            <button class="btn btn-danger py-1 px-2"><i class="fa fa-trash"></i></button>
        </td>
    </tr>
  `;
  });
  row.appendchild();
}

// Search Data

function search() {
  const search = document.querySelector("search");

  search.showPopover();

  addEventListener("click", () => {
    const newDiv = createElement("div");
  });
}

// Clear Data

function Clear() {
  if (!swal("Are you Sure!", "If yes Your Data was permanatly Deleted")) {
    console.log("Noo");
  } else {
    console.log("Yess");
  }
}

// Add Data

function Add() {}

// Edit Data

function edit() {}
