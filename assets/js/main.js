// Menu data by category (replace image paths with your provided images)
const menuData = {
  deals: [
    { name: "Combo 1", price: 570, desc: "1 Classic Chicken Stack with Fries 1 Soft Drink (345ml)", img: "images/Combo-1-1.jpg" },
    { name: "Combo 2", price: 670, desc: "2 Flamed Grilled Shawarma with Fries 1 Soft Drink (345ml)", img: "images/Combo-2-1.jpg" },
    { name: "Combo 3", price: 740, desc: "1 Crispy Crown Burger with Fries 1 Soft Drink (345ml)", img: "images/Combo-3-1.jpg" },
    { name: "Combo 4", price: 850, desc: "1 Mushroom Melt Supreme with Fries 1 Soft Drink (345ml)", img: "images/Combo-4-1.jpg" },
    { name: "Combo 5", price: 700, desc: "1 Crispy Wrap with Fries 1 Mayo Dip 1 Soft Drink (345ml)", img: "images/Combo-5.jpg" },
    { name: "Combo 6", price: 1090, desc: "1 Beef Titan Burger with Fries 1 Soft Drink (345ml)", img: "images/Combo-6.jpg" },
    { name: "Family Deal", price: 3100, desc: "4 Burgers (choose from Classic Beef, Crispy Crown, Grilled Majesty) 1 Crispy Strips or Loaded Fries 4 Soft Drink (345ml)", img: "images/Family-Deal-3.jpg" },
  
  ],
  burgers: [
    { name: "Crispy Crown", price: 600, desc: "Crispy chicken, cheese, and our house sauce", img: "images/crispy-crown.jpg" },
    { name: "Grill Majesty", price: 600, desc: "Grilled chicken, cheese, and creamy mayo sauce", img: "images/grill-majesty.jpg" },
    { name: "Crispy Beast", price: 850, desc: "Double crispy chicken patties, cheese, and our signature sauce", img: "images/crispy-beast.jpg" },
    { name: "Classic Beef Bliss", price: 650, desc: "Beef patty, cheese, and our signature sauce.", img: "images/classic-beef.jpg" },
    { name: "Mushroom Melt Supreme", price: 720, desc: "Beef patty, sautéed onions, mushrooms, cheese, and our special sauces.", img: "images/mushroom-melt-supreme.jpg" },
    { name: "Beef Titan", price: 950, desc: "Double beef patty, sautéed onions, mushrooms, cheese, and our special sauces.", img: "images/beef-titan.jpg" },
  
  ],
  sandwiches: [
    { name: "Hot Sub Royale", price: 430, desc: "Subway-style hotdog bun with cheese, veggies, sauce", img: "images/hot-sub-royale.jpg" },
    { name: "Classic Chicken Stack", price: 450, desc: "Chicken sandwich in white bread, cheese, veggies, sauces", img: "images/chicken-stack-sandwich.jpg" },
  ],
  shawarma: [
    { name: "Flame-Grilled Shawarma", price: 270, desc: "Shawarma chicken, veggies, olives, jalapeños, sauces", img: "images/flamed-grilled-shawarma.jpg" },
    { name: "Arabian Delight", price: 320, desc: "Shawarma chicken, fries, fresh veggies, olives, jalapeños, hummus, and special sauces.", img: "images/arabian-delight-rev.jpg" },
    { name: "Crispy Crunch", price: 320, desc: "Crispy chicken, fresh veggies, olives, jalapeños, and special sauces", img: "images/crispy-crunch.jpg" },
  ],
  wraps: [
    { name: "Grilled Chicken Wrap", price: 450, desc: "Grilled chicken, veggies, choice of sauce.", img: "images/wraps.jpg" },
    { name: "Beef Queso Craze", price: 500, desc: "Beef mince quesadilla with melted cheese.", img: "images/wraps.jpg" },
    { name: "Crispy Chicken Wrap", price: 500, desc: "Crispy chicken, fresh veggies, and choice of sauce.", img: "images/wraps.jpg" },
  ],
  fries: [
    { name: "Smoky Blaze", price: 430, desc: "Smothered in smoky mayo, cheese, and seasoning.", img: "images/smoky-blaze.jpg" },
    { name: "Garlic Rush", price: 430, desc: "Topped with garlic mayo, cheese, and herbs.", img: "images/garlic-rush.jpg" },
    { name: "Food Delight Special", price: 550, desc: "Loaded with our signature Gabgrill sauce, cheese, and seasoning.", img: "images/gabgrill-special.jpg" },
    { name: "Queso Mince", price: 500, desc: "Topped with beef mince, melted cheese, and special sauces.", img: "images/queso-mince.jpg" },
  ],
  appetizers: [
    { name: "Plain Fries", price: 180, img: "images/plain-fries.jpg" },
    { name: "Masala Fries", price: 220,  img: "images/plain-fries.jpg" },
    { name: "Mayo Garlic Fries", price: 250,  img: "images/mayo-garlic-fries.jpg" },
    { name: "Hot Shots", price: 440, img: "images/hot-shots.jpg" },
    { name: "Crispy strips", price: 500, img: "images/strips.jpg" },

  ],
  addons: [
    { name: "Extra Dips", price: 80, desc: "Creamy garlic mayo dip", img: "images/extra dip.jpeg" },
    { name: "Water", price: 60, desc: "500ml water bottle.", img: "images/water.jpg" },
    { name: "Soft Drinks", price: 100, desc: "345ml pet bottle.", img: "images/soft-drink.jpg" },
  ]
};

let cart = [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartUI();
 
}

function toggleCartSidebar() {
  const sidebar = document.getElementById("cart-sidebar");
  const cartIcon = document.getElementById("cart-icon");
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    cartIcon.style.display = 'block'; // Show cart icon
  } else {
    sidebar.classList.add('active');
    cartIcon.style.display = 'none'; // Hide cart icon
  }
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        Rs ${item.price} x ${item.quantity}
      </div>
      <div>
        <button onclick="updateQuantity('${item.name}', -1)">-</button>
        <button onclick="updateQuantity('${item.name}', 1)">+</button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

function updateQuantity(name, change) {
  const item = cart.find(i => i.name === name);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.name !== name);
  }
  updateCartUI();
}


function renderMenuRows() {
  Object.keys(menuData).forEach(category => {
    const row = document.getElementById(`${category}-row`);
    if (!row) return;
    row.innerHTML = menuData[category].map(item => `
      <div class="card animated">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc ? item.desc : ""}</p>
        <span>Rs ${item.price}</span>
        <button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
      </div>
    `).join('');
  });
}


// Animate cards and sections
function animateMenuSections() {
  document.querySelectorAll('.menu-category').forEach((section, i) => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.2 + i * 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    });
    // Animate cards inside
    const cards = section.querySelectorAll('.card');
    anime({
      targets: cards,
      translateY: [40, 0],
      opacity: [0, 1],
      delay: anime.stagger(120, {start: 300}),
      duration: 900,
      easing: 'easeOutExpo'
    });
  });
}

// Contact form AJAX
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch('php/contact.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('contact-msg').textContent = data.message;
      if(data.success) contactForm.reset();
    })
    .catch(() => {
      document.getElementById('contact-msg').textContent = 'Error sending message.';
    });
  });
}

// GSAP Hero Animation
window.addEventListener('DOMContentLoaded', () => {
  // Animate heading
  gsap.fromTo('#hero h1', 
    { scale: 0.7, opacity: 0, color: "#fff" }, 
    { scale: 1, opacity: 1, color: "#ff8c00", duration: 1.2, ease: "elastic.out(1, 0.5)" }
  );
  // Animate subheading
  gsap.fromTo('#hero p', 
    { x: -100, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, delay: 0.7, color: "#ff8c00" }
  );
  // Animate button
  gsap.from('#hero .btn', {
    scale: 0,
    opacity: 0,
    duration: 0.7,
    delay: 1
  });
  renderMenuRows();
  animateMenuSections();
  // Remove typewriter class after animation for normal look
  setTimeout(() => {
    document.getElementById('hero-title').classList.remove('typewriter');
  }, 2200);

  // Interactive bounce effect for About section feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.add('clicked');
      setTimeout(() => card.classList.remove('clicked'), 300);
    });
  });
});

// Popup Modal Logic
window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cityModal');
  const closeBtn = document.getElementById('closeModal');
  const form = document.getElementById('cityForm');

  // Show modal on load
  if (modal) modal.style.display = 'flex';

  // Close modal
  if (closeBtn) closeBtn.onclick = () => { modal.style.display = 'none'; };

  // Form submit
  if (form) form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    fetch('save_popup.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert(data.message);
        modal.style.display = 'none';
      } else {
        alert(data.message);
      }
    })
    .catch(() => {
      alert('Error saving data. Please try again.');
    });
  };

  // Optional: Prevent closing by clicking outside modal-content
  if (modal) modal.onclick = (e) => {
    if (e.target === modal) {
      // modal.style.display = 'none'; // Uncomment if you want to allow closing by clicking outside
    }
  };
});