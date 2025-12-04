// Constant keys

const CART_KEY = "";
const REVIWE_KEY = "";

let product_data = [];

// Fetch product

async function fetchProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = res.json();
    console.log(data);
    renderProduct();
  } catch (err) {
    console.log(err);
  }
}

// Rendering Product card

function renderProduct() {
  const list = document.getElementById("p-card");

  list.innerHTML = "";

  product_data.forEach((pro) => {
    const card = document.createElement("div");

    card.className = "row";
    list.innerHTML = `
    <div class="col-md-6 col-sm-1 mb-3">
        <div class="product-card">
            <img src=${pro.images[0]} alt="product" />            
            <h6 class="mt-3">${pro.title}</h6>
            <p class="fw-bold text-success">${pro.price} </p>
            <button class="border border-none bg-success text-white px-3 py-1" style="border-radius: 20px;">Add to Cart</button>
        </div>
    </div>
    `;

    list.appendChild(card);
  });
}

// Rendering Product cart

async function renderCart() {
    
}

