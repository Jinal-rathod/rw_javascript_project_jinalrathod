/*  CONSTANT */

const CART_STORAGE_KEY = "shoppingCart";
const REVIEW_STORAGE_KEY = "userReview";

let productData = [];

async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) throw new Error("Failed to fetch Data");
    const data = await res.json();
    productData = data.products;
    console.log("Loaded Data:", productData);
    renderProduct();
  } catch (err) {
    console.error(err);
    document.getElementById("product_list").innerHTML =
      "<p class='text-red-500 p-4'>Unable to load Products</p>";
  }
}

/* Local Storage Function / Shopping Product render */

const loadCart = function () {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
};

const saveCart = function (cartData) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
  renderCart();
};

const clearCart = function () {
  if (confirm("Are You Sure You Want To Clear All Cart Data?")) {
    localStorage.removeItem(CART_STORAGE_KEY);
    renderCart();
  }
};

/* User Review */

const loadReview = function () {
  document.getElementById("note_input").value =
    sessionStorage.getItem(REVIEW_STORAGE_KEY) || "";
};

const saveReview = function (text) {
  sessionStorage.setItem(REVIEW_STORAGE_KEY, text);
};

/* Cart Logic */

function addToCart(id) {
  const cart = loadCart();

  const product = productData.find((p) => p.id === id);

  if (!product) return;

  const item = cart.find((i) => i.id === id);

  item ? item.quantity++ : cart.push({ ...product, quantity: 1 }); // ternary operator

  saveCart(cart);
}

function updateQuantity(id, qty) {
  const cart = loadCart();

  const index = cart.findIndex((i) => i.id === id);

  console.log(index);

  if (index != -1) {
    qty > 0 ? (cart[index].quantity = qty) : cart.splice(index, 1);
    saveCart();
  }
}

/************  Rendering UI ****************/

function renderProduct() {
  const list = document.getElementById("product_list");

  list.innerHTML = "";

  productData.forEach((pro) => {
    const card = document.createElement("div");

    card.className =
      "bg-neutral-primary-soft w-[300px] block max-w-sm border border-default rounded-base shadow-xs overflow-hidden";

    card.innerHTML = `
        <a href="#">
          <img class="w-full h-48 object-cover rounded-t-base" src="${pro.images[0]}" alt="${pro.title}" />
        </a>
        <div class="p-6 text-center">
          <a href="#">
            <h5 class="mt-3 mb-2 text-xl font-semibold tracking-tight text-heading truncate">${pro.title}</h5>
            <p class="mb-4 text-sm text-gray-600 line-clamp-2">${pro.description}</p>
          </a>
          <div class="mb-4">
            <p class="text-lg font-bold text-blue-600">$${pro.price}</p>
          </div>
          <div class="flex gap-2 justify-center">
            <button type="button" class="bg-blue-500 text-white hover:bg-blue-900 px-4 py-2 rounded-xl text-sm transition">Add to Cart</button>
            <button type="button" class="bg-gray-500 text-white hover:bg-gray-700 px-4 py-2 rounded-xl text-sm transition">Read More</button>
          </div>
        </div>
    `;

    list.appendChild(card);
  });
}

/* Cart Logic Rendering Cart */

function renderCart() {
  const cart = loadCart();

  if (!cart.length) {
    document.getElementById("cart_items").innerHTML = `
     <tr><td class="text-sm text-gray-600 text-center">Your Cart Is Empty.</td></tr>
    `;
  }

  const cartlist = document.getElementById("cart_items");

  cartlist.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((c) => {
    total += c.price * c.quantity;
    count += c.quantity;

    const row = document.createElement("tr");

    row.classList =
      "bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium";

    row.innerHTML = `
    <td class="p-4">
                  <img src=${c.images[0]} class="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch">
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                  ${c.title}
                </td>
                <td class="px-6 py-4">
                  <form class="max-w-xs mx-auto">
                    <label for="counter-input-1" class="sr-only">Choose quantity:</label>
                    <div class="relative flex items-center">
                      <button type="button" id="decrement-button-1" data-input-counter-decrement="counter-input-1"
                        class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                        <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-1" data-input-counter
                        class="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                        placeholder="" value="12" required />
                      <button type="button" id="increment-button-1" data-input-counter-increment="counter-input-1"
                        class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                        <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14m-7 7V5" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                  $599
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-fg-danger hover:underline">Remove</a>
                </td>
    
    `;

    cartlist.appendChild(row);

    totalE1.textContent = `${total.toFixed(2)}`; // for all amount total
    countE1.textContent = count; // for count
  });
}

/* Content Load After Load Html */

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  renderCart();
  loadReview();
  addToCart();

  /* add to cart from product list */

  document.getElementById("product_list").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      addToCart(Number(e.target.dataset.id));
    }
  });

  /* Quatity change in cart */

  document.getElementById("cart_items").addEventListener("change", (e) => {
    if (e.target.classList.contains("qty")) {
      updateQuantity(Number(e.target.dataset.id), Number(e.target.value));
    }
  });

  /* Clear Cart button */

  document.getElementById("clear_cart").addEventListener("click", clearCart());

  /* Dom Content review load after event */

  let timer;
  document.getElementById("review_box").addEventListener("input", (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => saveReview(e.target.value), 3000);
  });

  /* Cart Model Rendering Logic */
});
