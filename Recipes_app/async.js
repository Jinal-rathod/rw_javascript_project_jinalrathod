// script.js (JSON Server version)

const RECEPIE_API = "http://localhost:3000/recipes";

const cardsContainer = document.querySelector(".cards");

(function createModal() {
  const HtmlModel = `
      <div class="modal fade" id="recipeModal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="recipeModalLabel"></h5>
              <button type="button" class="btn-close"></button>
            </div>
            <div class="modal-body">
              <img id="reci+6peModalImg" src="" alt=""
                   style="width:50%;max-height:400px;object-fit:cover;border-radius:8px;">
              <img id="recipeModalImg_2" src="" alt=""
                   style="width:50%;max-height:400px;object-fit:cover;border-radius:8px;">
              <p id="recipeModalDesc" style="margin-top:10px;font-weight:600;"></p>
              <h6>Ingredients</h6>
              <ul id="recipeModalIngredients"></ul>
              <h6>Instructions</h6>
              <ol id="recipeModalSteps"></ol>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = HtmlModel;
  document.body.appendChild(wrapper.firstElementChild);
})();

// Utility
const $ = (sel) => document.querySelector(sel);

// Fetch & render recipes
async function loadRecipes() {
  try {
    const res = await fetch(RECEPIE_API);
    if (!res.ok) throw new Error("Failed to fetch recipes");
    const data = await res.json();
    renderCards(data);
    setupSearch(data);
  } catch (err) {
    console.error(err);
    cardsContainer.innerHTML = `<p style="color:red;">Error loading recipes.</p>`;
  }
}

function renderCards(list) {
  cardsContainer.innerHTML = "";
  list.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${recipe.img}" class="card-img-top" alt="${recipe.alt}">
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">${recipe.description}</p>
          <a href="#" class="btn btn-success" data-id="${recipe.id}">Read recipe</a>
        </div>
      `;
    cardsContainer.appendChild(card);
  });

  cardsContainer.querySelectorAll("a[data-id]").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-id");
      const res = await fetch(`${RECEPIE_API}/${id}`);
      const recipe = await res.json();
      showModal(recipe);
    });
  });
}

function showModal(recipe) {
  $("#recipeModalLabel").textContent = recipe.title;
  $("#recipeModalImg").src = recipe.img;
  $("#recipeModalImg_2").src = recipe.img_2;
  $("#recipeModalDesc").textContent = recipe.description;
  const ing = $("#recipeModalIngredients");
  const steps = $("#recipeModalSteps");
  ing.innerHTML = recipe.ingredients.map((i) => `<li>${i}</li>`).join("");
  steps.innerHTML = recipe.steps.map((s) => `<li>${s}</li>`).join("");
  bootstrap.Modal.getOrCreateInstance("#recipeModal").show();
}

function setupSearch(recipes) {
  const input = document.getElementById("recipeSearch");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    const filtered = recipes.filter((r) => r.title.toLowerCase().includes(q));
    renderCards(filtered);
  });
}

// Initial load
loadRecipes();
