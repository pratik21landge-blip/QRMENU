/**
 * MBA BHURJI™ - Single Unified Menu Card Controller
 * UI Reference: https://mba-bhurgi.vercel.app/
 */

// 1. Menu Dataset strictly matching https://mba-bhurgi.vercel.app/
const MBA_SECTIONS = [
  {
    gridId: "grid-signature",
    items: [
      {
        id: "sig-1",
        name: "Special Butter Boiled Bhurji",
        diet: "egg",
        price: 100,
        desc: "Hard-boiled eggs finely grated and simmered with onions, juicy tomatoes, rural garam masala, and soaked in golden Amul butter. Served with 2 hot butter pavs.",
        tag: "★ Chef Specialty",
        tagType: "star"
      },
      {
        id: "sig-2",
        name: "Regular Masala Egg Bhurji",
        diet: "egg",
        price: 70,
        desc: "Fresh scrambled farm eggs cooked on cast-iron tawa with onions, green chilies, coriander, and turmeric spices. Includes 2 butter pavs.",
        tag: "Popular",
        tagType: "star"
      },
      {
        id: "sig-3",
        name: "Double Egg Masala Bhurji",
        diet: "egg",
        price: 90,
        desc: "Generous double-portion scramble seasoned with countryside spices, roasted pavs, and lemon onion garnish.",
        tag: "Student Pick",
        tagType: "star"
      },
      {
        id: "sig-4",
        name: "Cheese Burst Egg Bhurji",
        diet: "egg",
        price: 120,
        desc: "Loaded with a melting blend of grated Amul processed cheese and cheddar for a creamy, rich texture.",
        tag: null,
        tagType: null
      },
      {
        id: "sig-5",
        name: "Kolhapuri Thecha Bhurji",
        diet: "egg",
        price: 100,
        desc: "Tossed with authentic hand-ground green chili and garlic thecha. For lovers of genuine fiery Puneri street spice.",
        tag: "🌶️🌶️ Spicy",
        tagType: "spicy"
      },
      {
        id: "sig-6",
        name: "Malai Paneer-Egg Fusion Bhurji",
        diet: "egg",
        price: 130,
        desc: "Fresh diced cottage cheese (paneer) and farm eggs scrambled together in rich butter gravy.",
        tag: "Fusion Special",
        tagType: "star"
      }
    ]
  },
  {
    gridId: "grid-halffry",
    items: [
      {
        id: "hf-1",
        name: "Single Egg Half Fry (Bullseye)",
        diet: "egg",
        price: 50,
        desc: "Runny golden yolk with crisp buttery edges, dusted with crushed black pepper & rock salt.",
        tag: null,
        tagType: null
      },
      {
        id: "hf-2",
        name: "Double Egg Half Fry (Sunny Side Up)",
        diet: "egg",
        price: 70,
        desc: "Twin sunny yolks basted in pure Amul butter. Best enjoyed by dipping hot butter pav.",
        tag: "Favorite",
        tagType: "star"
      },
      {
        id: "hf-3",
        name: "Boiled Egg Masala Fry",
        diet: "egg",
        price: 60,
        desc: "Sliced boiled eggs tossed on hot tawa with roasted cumin, chaat masala, and chili flakes.",
        tag: null,
        tagType: null
      },
      {
        id: "hf-4",
        name: "Gym High-Protein Boiled Plate (4 Eggs)",
        diet: "egg",
        price: 70,
        desc: "Four hard-boiled farm eggs served with cucumber slices, lemon wedge, and black pepper.",
        tag: "Fitness (24g Protein)",
        tagType: "star"
      }
    ]
  },
  {
    gridId: "grid-omelette",
    items: [
      {
        id: "om-1",
        name: "Puneri Masala Omelette",
        diet: "egg",
        price: 70,
        desc: "Beaten with chopped onions, tomatoes, fresh coriander, and ginger. Served with 2 hot butter pavs.",
        tag: "Must Try",
        tagType: "star"
      },
      {
        id: "om-2",
        name: "Cheese Chili Omelette",
        diet: "egg",
        price: 100,
        desc: "Stuffed with melted Amul cheese and finely chopped spicy green chilies.",
        tag: "🌶️ Mild Spicy",
        tagType: "spicy"
      },
      {
        id: "om-3",
        name: "Double Bread Omelette",
        diet: "egg",
        price: 80,
        desc: "Toasted bread slices enveloped inside a large two-egg spiced herb omelette.",
        tag: "Breakfast Hit",
        tagType: "star"
      }
    ]
  },
  {
    gridId: "grid-combos",
    items: [
      {
        id: "cb-1",
        name: "MBA Student Power Thali",
        diet: "egg",
        price: 139,
        desc: "Double Masala Bhurji + 4 Butter Pav + Fresh Sliced Onion Salad + Hot Kulhad Masala Chai.",
        tag: "★ Bestseller Thali",
        tagType: "star"
      },
      {
        id: "cb-2",
        name: "Fitness Beast Plate",
        diet: "egg",
        price: 149,
        desc: "Double Bullseye + 2 Boiled Fry + 2 Brown Toast + Lemon Garnish (32g Pure Protein).",
        tag: "Fitness Pick",
        tagType: "star"
      },
      {
        id: "cb-3",
        name: "Duo Midnight Feast (For 2)",
        diet: "egg",
        price: 199,
        desc: "1 Special Butter Boiled Bhurji + 1 Cheese Omelette + 4 Butter Pav + 2 Chilled Soft Drinks.",
        tag: "Save 15%",
        tagType: "star"
      }
    ]
  },
  {
    gridId: "grid-pav",
    items: [
      {
        id: "pav-1",
        name: "Amul Butter Pav (Pair of 2)",
        diet: "veg",
        price: 38,
        desc: "Soft bakery pavs toasted on hot cast-iron griddle in pure golden Amul butter.",
        tag: "Popular",
        tagType: "star"
      },
      {
        id: "pav-2",
        name: "Kadak Tawa Roasted Pav (Pair)",
        diet: "veg",
        price: 25,
        desc: "Crunchy, extra crisp with a dash of roast red chili spice.",
        tag: null,
        tagType: null
      },
      {
        id: "pav-3",
        name: "Extra Amul Butter Cube (Dollop)",
        diet: "veg",
        price: 20,
        desc: "Chilled fresh slab of pure Amul butter placed on your steaming hot bhurji.",
        tag: null,
        tagType: null
      },
      {
        id: "pav-4",
        name: "Grated Amul Cheese Topping",
        diet: "veg",
        price: 30,
        desc: "A generous mountain of freshly shredded processed Amul cheese.",
        tag: null,
        tagType: null
      }
    ]
  },
  {
    gridId: "grid-beverages",
    items: [
      {
        id: "bev-1",
        name: "Kulhad Special Masala Chai",
        diet: "veg",
        price: 20,
        desc: "Ginger-cardamom brewed kadak cutting tea served in an earthen clay kulhad.",
        tag: "Authentic Desi",
        tagType: "star"
      },
      {
        id: "bev-2",
        name: "Chilled Nimbu Masala Soda",
        diet: "veg",
        price: 30,
        desc: "Refreshing digestive lemon soda spiced with roasted jeera and rock salt.",
        tag: "Digestive Pick",
        tagType: "star"
      },
      {
        id: "bev-3",
        name: "Tadkewali Masala Chaas",
        diet: "veg",
        price: 25,
        desc: "Chilled spiced buttermilk tempered with roasted cumin, rock salt, mint, and green chilies.",
        tag: null,
        tagType: null
      },
      {
        id: "bev-4",
        name: "Chilled Soft Drinks (Can / Pet)",
        diet: "veg",
        price: 40,
        desc: "Thums Up, Coca Cola, Sprite, or Limca served ice cold.",
        tag: null,
        tagType: null
      }
    ]
  }
];

// 2. State
const userCart = {}; // { itemId: quantity }
let qrCodeObj = null;

// 3. Elements
const orderTray = document.getElementById("orderTray");
const trayCount = document.getElementById("trayCount");
const trayTotal = document.getElementById("trayTotal");
const viewTrayBtn = document.getElementById("viewTrayBtn");

const slipModal = document.getElementById("slipModal");
const closeSlipBtn = document.getElementById("closeSlipBtn");
const closeSlipBackdrop = document.getElementById("closeSlipBackdrop");
const slipItemsList = document.getElementById("slipItemsList");
const slipSubtotal = document.getElementById("slipSubtotal");
const slipFinalTotal = document.getElementById("slipFinalTotal");
const clearAllSlipBtn = document.getElementById("clearAllSlipBtn");
const copyOrderBtn = document.getElementById("copyOrderBtn");

const qrModal = document.getElementById("qrModal");
const openQrModalBtn = document.getElementById("openQrModalBtn");
const closeQrBtn = document.getElementById("closeQrBtn");
const closeQrBackdrop = document.getElementById("closeQrBackdrop");
const tableInput = document.getElementById("tableInput");
const standeeTableDisplay = document.getElementById("standeeTableDisplay");
const printStandeeBtn = document.getElementById("printStandeeBtn");
const shareMenuBtn = document.getElementById("shareMenuBtn");
const toast = document.getElementById("toast");

// 4. Helper: Find Item
function getItem(id) {
  for (const sec of MBA_SECTIONS) {
    const it = sec.items.find(i => i.id === id);
    if (it) return it;
  }
  return null;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// 5. Render All Menu Items into their Grids in One Unified Menu Card
function renderMenu() {
  MBA_SECTIONS.forEach(sec => {
    const grid = document.getElementById(sec.gridId);
    if (!grid) return;
    grid.innerHTML = "";

    sec.items.forEach(item => {
      const qty = userCart[item.id] || 0;
      const row = document.createElement("div");
      row.className = `menu-item-row ${qty > 0 ? "active-in-cart" : ""}`;

      // Symbol
      const symHtml = item.diet === "veg"
        ? `<span class="veg-symbol" title="Vegetarian"></span>`
        : `<span class="egg-symbol" title="Contains Egg"></span>`;

      // Badge
      let badgeHtml = "";
      if (item.tag) {
        const badgeClass = item.tagType === "spicy" ? "tag-spicy" : "tag-star";
        badgeHtml = `<span class="${badgeClass}">${item.tag}</span>`;
      }

      // Add / Counter button
      let actionHtml = "";
      if (qty === 0) {
        actionHtml = `<button class="btn-add" onclick="cartAdd('${item.id}')">ADD +</button>`;
      } else {
        actionHtml = `
          <div class="qty-counter">
            <button class="qty-btn" onclick="cartDec('${item.id}')">&minus;</button>
            <span class="qty-number">${qty}</span>
            <button class="qty-btn" onclick="cartInc('${item.id}')">&plus;</button>
          </div>
        `;
      }

      row.innerHTML = `
        <div class="item-left">
          <div class="item-title-wrap">
            ${symHtml}
            <h3 class="item-title">${item.name}</h3>
            ${badgeHtml}
          </div>
          <p class="item-desc">${item.desc}</p>
        </div>
        <div class="item-right">
          <span class="item-price">₹${item.price}</span>
          ${actionHtml}
        </div>
      `;

      grid.appendChild(row);
    });
  });

  if (window.lucide) {
    lucide.createIcons();
  }

  updateTray();
}

// 6. Cart / Tally Logic
window.cartAdd = function(id) {
  userCart[id] = 1;
  renderMenu();
  showToast("Added to order slip");
};

window.cartInc = function(id) {
  userCart[id] = (userCart[id] || 0) + 1;
  renderMenu();
};

window.cartDec = function(id) {
  if (userCart[id] > 1) {
    userCart[id] -= 1;
  } else {
    delete userCart[id];
  }
  renderMenu();
};

function getCartStats() {
  let count = 0;
  let total = 0;
  for (const [id, qty] of Object.entries(userCart)) {
    const item = getItem(id);
    if (item && qty > 0) {
      count += qty;
      total += item.price * qty;
    }
  }
  return { count, total };
}

function updateTray() {
  const { count, total } = getCartStats();
  if (count > 0) {
    orderTray.style.display = "block";
    trayCount.textContent = `${count} ${count === 1 ? 'item' : 'items'} selected`;
    trayTotal.textContent = `₹${total}`;
  } else {
    orderTray.style.display = "none";
  }
}

// 7. Order Slip Modal
function openSlip() {
  const { count, total } = getCartStats();
  if (count === 0) {
    showToast("Please add items to your order slip first!");
    return;
  }

  slipItemsList.innerHTML = "";
  for (const [id, qty] of Object.entries(userCart)) {
    const item = getItem(id);
    if (!item || qty <= 0) continue;

    const row = document.createElement("div");
    row.className = "slip-row";
    row.innerHTML = `
      <div>
        <div class="slip-title">${item.name}</div>
        <div class="slip-calc">₹${item.price} &times; ${qty} = ₹${item.price * qty}</div>
      </div>
      <div class="qty-counter">
        <button class="qty-btn" onclick="slipDecItem('${item.id}')">&minus;</button>
        <span class="qty-number">${qty}</span>
        <button class="qty-btn" onclick="slipIncItem('${item.id}')">&plus;</button>
      </div>
    `;
    slipItemsList.appendChild(row);
  }

  slipSubtotal.textContent = `₹${total}`;
  slipFinalTotal.textContent = `₹${total}`;
  slipModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSlip() {
  slipModal.classList.remove("active");
  document.body.style.overflow = "";
}

window.slipIncItem = function(id) {
  cartInc(id);
  openSlip();
};

window.slipDecItem = function(id) {
  cartDec(id);
  const { count } = getCartStats();
  if (count === 0) {
    closeSlip();
  } else {
    openSlip();
  }
};

clearAllSlipBtn.addEventListener("click", () => {
  for (const key in userCart) {
    delete userCart[key];
  }
  closeSlip();
  renderMenu();
  showToast("Order slip reset");
});

copyOrderBtn.addEventListener("click", () => {
  const { count, total } = getCartStats();
  const tableVal = tableInput.value.trim() || "Table (Dine-in)";
  let msg = `🍳 *MBA BHURJI™ ORDER* (${tableVal})\n` +
            `Address: Kondhwa, Pune\n` +
            `--------------------------------\n`;

  for (const [id, qty] of Object.entries(userCart)) {
    const item = getItem(id);
    if (item && qty > 0) {
      msg += `• ${item.name} x ${qty} = ₹${item.price * qty}\n`;
    }
  }

  msg += `--------------------------------\n` +
         `Total Items: ${count}\n` +
         `*Total Bill: ₹${total}*\n` +
         `(100% Pure Amul Butter Preparation)`;

  navigator.clipboard.writeText(msg).then(() => {
    showToast("Order copied to clipboard!");
  }).catch(() => {
    showToast("Order ready for counter!");
  });
});

// 8. QR Code Generator
function makeQr() {
  const container = document.getElementById("qrcode");
  container.innerHTML = "";
  const tableStr = tableInput.value.trim() || "Table 1";
  standeeTableDisplay.textContent = tableStr.toUpperCase();

  const url = window.location.href;
  qrCodeObj = new QRCode(container, {
    text: url,
    width: 160,
    height: 160,
    colorDark: "#141414",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

function openQr() {
  makeQr();
  qrModal.classList.add("active");
  document.body.style.overflow = "hidden";
  if (window.lucide) lucide.createIcons();
}

function closeQr() {
  qrModal.classList.remove("active");
  document.body.style.overflow = "";
}

// 9. Event Listeners
openQrModalBtn.addEventListener("click", openQr);
closeQrBtn.addEventListener("click", closeQr);
closeQrBackdrop.addEventListener("click", closeQr);

viewTrayBtn.addEventListener("click", openSlip);
closeSlipBtn.addEventListener("click", closeSlip);
closeSlipBackdrop.addEventListener("click", closeSlip);

tableInput.addEventListener("input", () => {
  const val = tableInput.value.trim() || "TABLE 1";
  standeeTableDisplay.textContent = val.toUpperCase();
});

printStandeeBtn.addEventListener("click", () => {
  window.print();
});

shareMenuBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "MBA Bhurji™ Menu",
      text: "Check out the official menu of MBA Bhurji™ - The Classic Rural Taste, Kondhwa, Pune!",
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("Menu link copied to clipboard!");
  }
});

// Initial boot
renderMenu();
