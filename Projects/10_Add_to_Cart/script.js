//  CONSTANTS
const CART_STORAGE_KEY = "shoppingCart";

//  GLOBAL STATE
let productData = [];
let filteredProducts = [];

//  FETCH PRODUCTS
async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    productData = data.products.slice(0, 12);
    filteredProducts = [...productData];
    renderProducts(filteredProducts);
  } catch (error) {
    console.error("Error loading products", error);
  }
}

//  LOCAL STORAGE
function loadCart() {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  renderCart();
}

//  ADD TO CART
function addToCart(id) {
  const cart = loadCart();
  const product = productData.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail,
      qty: 1,
    });
  }

  saveCart(cart);
}

//  UPDATE QTY / REMOVE
function updateQty(id, qty) {
  let cart = loadCart();
  cart = cart
    .map((item) => (item.id === id ? { ...item, qty: qty } : item))
    .filter((item) => item.qty > 0);

  saveCart(cart);
}

function removeItem(id) {
  const cart = loadCart().filter((item) => item.id !== id);
  saveCart(cart);
}

//  RENDER PRODUCTS
function renderProducts(products) {
  const container = document.getElementById("p-card");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = `<p class="text-muted">No products found</p>`;
    return;
  }

  products.forEach((product) => {
    container.innerHTML += `
      <div class="col-md-6 mb-3">
        <div class="product-card">
          ${
            product.discountPercentage
              ? `<span class="sale-badge">Sale</span>`
              : ""
          }
          <img src="${product.thumbnail}" alt="${product.title}">
          <h6 class="mt-3">${product.title}</h6>
          <p class="fw-bold text-success">$${product.price}</p>
          <button class="btn btn-success btn-sm add-btn" data-id="${
            product.id
          }">
            Add to Cart
          </button>
        </div>
      </div>
    `;
  });
}

//  RENDER CART
function renderCart() {
  const cart = loadCart();
  const cartContainer = document.querySelector(".col-lg-8");
  const summary = document.querySelector(".col-lg-4 strong");

  cartContainer.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-muted">Cart is empty</p>`;
    summary.textContent = "$0.00";
    return;
  }

  cart.forEach((item) => {
    subtotal += item.price * item.qty;

    cartContainer.innerHTML += `
      <div class="cart-card mb-3 cart-item d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <img src="${item.image}">
          <div>
            <h6>${item.title}</h6>
            <small>$${item.price}</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <input 
            type="number" 
            min="1" 
            value="${item.qty}" 
            class="form-control qty-input"
            data-id="${item.id}"
            style="width:70px">
          <button 
            class="btn btn-danger btn-sm remove-btn"
            data-id="${item.id}">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  summary.textContent = `$${subtotal.toFixed(2)}`;
}

//  EVENTS
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    addToCart(Number(e.target.dataset.id));
  }

  if (e.target.classList.contains("remove-btn")) {
    removeItem(Number(e.target.dataset.id));
  }
});

document.addEventListener("change", (e) => {
  if (e.target.classList.contains("qty-input")) {
    updateQty(Number(e.target.dataset.id), Number(e.target.value));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  renderCart();
});

// SEARCH

document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();

  filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(keyword)
  );

  renderProducts(filteredProducts);
});

//  CHECKOUT & CONTINUE LOGIC

const checkoutBtn = document.getElementById("checkoutBtn");
const continueBtn = document.getElementById("continueBtn");

/* Proceed to Checkout */
checkoutBtn.addEventListener("click", () => {
  const cart = loadCart();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("checkoutOverlay").classList.remove("d-none");

  renderBill();
});

/* Continue Shopping */
continueBtn.addEventListener("click", () => {
  document.getElementById("p-card").scrollIntoView({
    behavior: "smooth",
  });
});

// Bill

checkoutBtn.addEventListener("click", () => {
  const cart = loadCart();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("checkoutOverlay").classList.remove("d-none");

  renderBill();
});

const SHIPPING_CHARGE = 20;

// BILL RENDERING
function renderBill() {
  const cart = loadCart();
  const tbody = document.getElementById("billItems");
  const subtotalEl = document.getElementById("subtotal");
  const grandTotalEl = document.getElementById("grandTotal");

  let subtotal = 0;
  tbody.innerHTML = "";

  cart.forEach((item) => {
    const total = item.price * item.qty;
    subtotal += total;

    tbody.innerHTML += `
      <tr>
        <td>${item.title}</td>
        <td>$${item.price}</td>
        <td>${item.qty}</td>
        <td>$${total.toFixed(2)}</td>
      </tr>
    `;
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  grandTotalEl.textContent = `$${(subtotal + SHIPPING_CHARGE).toFixed(2)}`;
}

document.getElementById("closeCheckout").addEventListener("click", () => {
  document.getElementById("checkoutOverlay").classList.add("d-none");
});

document.getElementById("placeOrder").addEventListener("click", () => {
  alert("Order placed successfully! 🎉");

  localStorage.removeItem(CART_STORAGE_KEY);
  renderCart();

  document.getElementById("checkoutOverlay").classList.add("d-none");
});
