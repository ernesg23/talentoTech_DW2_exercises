// Base de datos de productos
const products = [
  {
    id: 1,
    title: "Auriculares Inalámbricos",
    brand: "SoundMax",
    price: 129.99,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Reloj Inteligente",
    brand: "TechWear",
    price: 199.99,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Cámara Compacta",
    brand: "FotoPro",
    price: 349.99,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Altavoz Portátil",
    brand: "AudioPlus",
    price: 89.99,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Lámpara de Escritorio",
    brand: "LumiDesign",
    price: 59.99,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Teclado Mecánico",
    brand: "KeyTech",
    price: 79.99,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "Maceta Minimalista",
    brand: "PlantStyle",
    price: 34.99,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    title: "Mochila Urbana",
    brand: "UrbanPack",
    price: 74.99,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// Estado del carrito
let cart = [];

// Elementos del DOM
const productGrid = document.getElementById("productGrid");
const cartIcon = document.getElementById("cartIcon");
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");
const emptyCartMessage = document.getElementById("emptyCartMessage");

function renderProducts() {
  productGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    let stockClass = "in-stock";
    let stockText = `En stock: ${product.stock}`;

    if (product.stock < 5) {
      stockClass = "low-stock";
      stockText = `Quedan pocos: ${product.stock}`;
    }

    productCard.innerHTML = `
                    <img src="${product.image}" alt="${
      product.title
    }" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-brand">${product.brand}</p>
                        <p class="product-price">$${product.price.toFixed(
                          2
                        )}</p>
                        <p class="product-stock ${stockClass}">${stockText}</p>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Agregar al carrito
                        </button>
                    </div>
                `;

    productGrid.appendChild(productCard);
  });

  // Agregar event listeners a los botones
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.closest(".add-to-cart").dataset.id);
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  // Verificar si el producto ya está en el carrito
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCart();
  showToast();
}

function updateCart() {
  // Actualizar contador
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Actualizar lista de productos en el carrito
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    cartTotal.textContent = "$0.00";
    return;
  }

  emptyCartMessage.style.display = "none";

  let totalPrice = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
                    <img src="${item.image}" alt="${
      item.title
    }" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                        <div class="cart-item-actions">
                            <button class="quantity-btn decrease" data-id="${
                              item.id
                            }">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${
                              item.id
                            }">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;

    cartItems.appendChild(cartItem);
  });

  // Actualizar total
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

  // Agregar event listeners a los botones del carrito
  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.closest(".quantity-btn").dataset.id);
      updateQuantity(id, -1);
    });
  });

  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.closest(".quantity-btn").dataset.id);
      updateQuantity(id, 1);
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.closest(".remove-item").dataset.id);
      removeFromCart(id);
    });
  });
}

function updateQuantity(productId, change) {
  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (itemIndex === -1) return;

  cart[itemIndex].quantity += change;

  // Si la cantidad es 0 o menos, eliminar el producto
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
  }

  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function showToast() {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Event listeners
cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

overlay.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

// Inicializar la tienda
function initStore() {
  renderProducts();
  updateCart();
}

document.addEventListener("DOMContentLoaded", initStore);
