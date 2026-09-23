/**
 * NOVA MOTO - Travel Gears & Accessories
 * Core Application Logic & E-Commerce State
 */

const WHATSAPP_NUMBER = "923194300264";
const WHATSAPP_DISPLAY = "+92 319 4300264";
const FACEBOOK_URL = "https://facebook.com/novamoto";
const INSTAGRAM_URL = "https://instagram.com/novamoto";

// Product Catalog
const products = [
  {
    id: "nm-01",
    name: "Nova Moto Expedition 38L Aluminum Panniers (Pair)",
    category: "luggage",
    categoryLabel: "Touring Luggage",
    price: 64500,
    rating: 4.9,
    reviewsCount: 38,
    badge: "Bestseller",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Engineered for harsh terrain and trans-continental expeditions. Crafted from 2mm aircraft-grade aluminum with stainless steel latches and 100% silicone waterproof gaskets.",
    features: ["Aircraft-Grade 2mm Aluminum", "Dual-lock anti-theft key mechanism", "IP68 waterproof seal", "Universal quick-fit mounting brackets"],
    sizes: ["Standard 38L+38L", "Heavy-Duty 45L+45L (+₨ 6,000)"],
    inStock: true
  },
  {
    id: "nm-02",
    name: "Trans-Continental 4-Season All-Weather Riding Jacket",
    category: "suits",
    categoryLabel: "Riding Suits",
    price: 36000,
    rating: 5.0,
    reviewsCount: 52,
    badge: "CE-Level 2",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    description: "Built for monsoon downpours, desert heat, and freezing mountain passes. Comes with removable thermal liner, zip ventilation channels, and certified D3O armor.",
    features: ["Cordura 1000D abrasion shell", "Removable waterproof breathable membrane", "CE-Level 2 armor (Elbows, Shoulders, Back)", "3M Scotchlite 360° reflective panels"],
    sizes: ["M", "L", "XL", "2XL", "3XL"],
    inStock: true
  },
  {
    id: "nm-03",
    name: "Nova Moto 50L Heavy-Duty Waterproof Dry Duffle Bag",
    category: "luggage",
    categoryLabel: "Touring Luggage",
    price: 14800,
    rating: 4.8,
    reviewsCount: 64,
    badge: "100% Waterproof",
    badgeColor: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    description: "Seamless high-frequency welded 840D TPU material. Completely dustproof, mud-proof, and submersion-proof with air purge release valve.",
    features: ["840D TPU welded construction", "Air release valve for compact strapping", "Includes 4 heavy-duty quick-release tie-down straps", "Padded detachable shoulder strap"],
    sizes: ["50 Liters", "65 Liters (+₨ 2,500)"],
    inStock: true
  },
  {
    id: "nm-04",
    name: "Nova Tourer Dual-Sport Carbon-Hybrid Adventure Helmet",
    category: "helmets",
    categoryLabel: "Helmets & Tech",
    price: 42000,
    rating: 4.9,
    reviewsCount: 29,
    badge: "ECE 22.06",
    badgeColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-lightweight aerodynamic carbon-composite shell with removable peak, drop-down dark smoke sun shield, and Pinlock 70 MaxVision anti-fog lens.",
    features: ["ECE 22.06 & DOT dual certification", "Aerodynamic wind-tunnel tested visor", "Integrated intercom speaker cutouts", "Emergency quick-release cheek pads"],
    sizes: ["M (57-58cm)", "L (59-60cm)", "XL (61-62cm)"],
    inStock: true
  },
  {
    id: "nm-05",
    name: "Apex Adventure Tourer Waterproof Riding Pants",
    category: "suits",
    categoryLabel: "Riding Suits",
    price: 24500,
    rating: 4.7,
    reviewsCount: 31,
    badge: "Weatherproof",
    badgeColor: "bg-slate-700",
    image: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",
    description: "Engineered to zip seamlessly into the Trans-Continental jacket or worn standalone. Flexible stretch accordion panels around knees and waist for all-day touring comfort.",
    features: ["Adjustable CE knee and hip protectors", "Reinforced heat-resistant inner calf panels", "Direct thigh intake vents with waterproof YKK zips", "Over-boot gusset with heavy velcro"],
    sizes: ["30", "32", "34", "36", "38"],
    inStock: true
  },
  {
    id: "nm-06",
    name: "Terra-Track CE Adventure Waterproof Touring Boots",
    category: "boots",
    categoryLabel: "Gloves & Boots",
    price: 32000,
    rating: 4.9,
    reviewsCount: 44,
    badge: "CE Certified",
    badgeColor: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
    description: "Rugged oiled full-grain leather boots designed for unpaved mountain roads and endless asphalt. Features molded TPU shin and ankle armor with quick-lock alloy buckles.",
    features: ["Full-grain leather with waterproof membrane", "High-grip Vibram-style lugged sole", "Micro-adjustable aluminum cam buckles", "Reinforced gear shift pad"],
    sizes: ["EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    inStock: true
  },
  {
    id: "nm-07",
    name: "Karakoram Arctic Tourer Waterproof Winter Gloves",
    category: "boots",
    categoryLabel: "Gloves & Boots",
    price: 11500,
    rating: 4.8,
    reviewsCount: 67,
    badge: "Thermal -10°C",
    badgeColor: "bg-blue-700",
    image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
    description: "Built for high-altitude Khunjerab, Babusar, and Skardu trips. Thinsulate thermal insulation with Hipora waterproof breathable liner and carbon knuckle guard.",
    features: ["3M Thinsulate 150g thermal layer", "Carbon fiber knuckle protection", "Touchscreen conductive index & thumb", "Integrated visor wiper on left thumb"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true
  },
  {
    id: "nm-08",
    name: "MotoMesh Pro V6 Bluetooth Intercom System (Twin Pack)",
    category: "helmets",
    categoryLabel: "Helmets & Tech",
    price: 28000,
    rating: 4.9,
    reviewsCount: 43,
    badge: "Mesh 2.0",
    badgeColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    description: "Crystal clear communication over 1.2km range. Supports 6-rider conference call, GPS audio prompts, music sharing, and advanced DSP wind noise cancellation.",
    features: ["1200m range in open terrain", "IP67 dust and waterproof rating", "18-hour continuous talk time", "HD 40mm tuned helmet speakers"],
    sizes: ["Dual Pack (2 Units)", "Single Unit (₨ 15,000)"],
    inStock: true
  },
  {
    id: "nm-09",
    name: "Nova Moto Anti-Vibration Wireless Charging Phone Mount",
    category: "protection",
    categoryLabel: "Protection & Mounts",
    price: 7900,
    rating: 4.9,
    reviewsCount: 89,
    badge: "Smart QI 15W",
    badgeColor: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description: "CNC machined aviation aluminum phone mount with 4-point silicone dampers to safeguard optical smartphone camera image stabilizers from engine vibrations.",
    features: ["Patented vibration damper module", "Qi 15W fast wireless + USB-C output", "Universal handlebar and mirror mount stems", "Quick one-handed lock and release"],
    sizes: ["Standard Handlebar Mount", "Mirror Stem Mount"],
    inStock: true
  },
  {
    id: "nm-10",
    name: "Enduro Magnetic & Strap Quick-Release Tank Bag 18L",
    category: "luggage",
    categoryLabel: "Touring Luggage",
    price: 9500,
    rating: 4.7,
    reviewsCount: 36,
    badge: "Quick Release",
    badgeColor: "bg-slate-700",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    description: "Versatile modular tank bag with sensitive touch-screen window for navigation tablets or smartphones. Expandable gusset adds 6L extra capacity on demand.",
    features: ["Dual mount: 6 high-strength magnets + harness straps", "Touchscreen navigation map pocket", "Cable pass-through for on-bike charging", "Fluorescent high-vis rain cover included"],
    sizes: ["18L Expandable"],
    inStock: true
  },
  {
    id: "nm-11",
    name: "Ultra-Beam 60W CREE Adventure Auxiliary Fog Lights (Pair)",
    category: "protection",
    categoryLabel: "Protection & Mounts",
    price: 16500,
    rating: 5.0,
    reviewsCount: 77,
    badge: "6000 Lumens",
    badgeColor: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=800&q=80",
    description: "Cut through thick mountain fog, heavy rain, and pitch black trails. Dual-mode switch toggles between 3000K amber fog beam and 6000K ultra-white spot light.",
    features: ["60W output, 6000 lumens per pair", "Dual color amber/white driver switch", "Die-cast aluminum heatsink housing", "Complete relay wiring harness included"],
    sizes: ["Crash Bar Mount (22mm-28mm)", "Fork Mount Clamps"],
    inStock: true
  },
  {
    id: "nm-12",
    name: "Nova Moto 45L Adventure Top Box w/ Passenger Backrest",
    category: "luggage",
    categoryLabel: "Touring Luggage",
    price: 38000,
    rating: 4.8,
    reviewsCount: 22,
    badge: "Helmet Fit",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    description: "Premium heavy-duty top trunk capable of holding one full-face adventure helmet plus extra gear. Includes thick cushioned backrest pad for passenger long-haul comfort.",
    features: ["Quick-release universal base plate", "Padded backrest for pillion passenger", "Inner luggage strap & removable quilted liner", "Reinforced technopolymer corner guards"],
    sizes: ["45 Liters Matte Black", "45 Liters Raw Aluminum"],
    inStock: true
  }
];

// Shopping Cart State
let cart = JSON.parse(localStorage.getItem("nova_moto_cart") || "[]");

// Format Currency
function formatPKR(amount) {
  return "₨ " + amount.toLocaleString("en-PK");
}

// Render Products Catalog
let activeCategory = "all";
let searchQuery = "";
let sortBy = "featured";

function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  let filtered = products.filter(p => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Sort
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const countBadge = document.getElementById("product-results-count");
  if (countBadge) countBadge.innerText = `Showing ${filtered.length} touring items`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i data-lucide="package-search" class="w-16 h-16 mx-auto mb-4 text-slate-600"></i>
        <h3 class="text-xl font-bold text-white mb-2">No motorcycle gear found</h3>
        <p class="text-sm">Try tweaking your search or browse our full category selection.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition">
          Clear Filters
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(product => {
    const waUrl = createWhatsAppOrderLink(product.name, product.sizes[0], product.price);
    return `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col group border border-slate-800 hover:border-sky-500/40 transition duration-300">
        <div class="relative overflow-hidden aspect-[4/3] bg-slate-900">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
          
          <span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-md shadow-md ${product.badgeColor}">
            ${product.badge}
          </span>
          
          <button onclick="openQuickView('${product.id}')" class="absolute bottom-3 right-3 px-3 py-1.5 bg-slate-900/90 hover:bg-sky-500 hover:text-white backdrop-blur text-xs font-semibold text-slate-300 rounded-lg border border-slate-700/60 transition flex items-center gap-1.5 shadow-lg">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Quick View
          </button>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-sky-400 font-medium mb-1.5">
              <span>${product.categoryLabel}</span>
              <div class="flex items-center gap-1 text-amber-400 font-semibold">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                <span>${product.rating}</span>
                <span class="text-slate-500">(${product.reviewsCount})</span>
              </div>
            </div>

            <h3 class="font-bold text-white text-base leading-snug group-hover:text-sky-400 transition mb-2">
              ${product.name}
            </h3>

            <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
              ${product.description}
            </p>
          </div>

          <div class="pt-3 border-t border-slate-800/80">
            <div class="flex items-baseline justify-between mb-3">
              <span class="text-xs text-slate-400">Rider Price:</span>
              <span class="text-lg font-extrabold text-white tracking-tight">${formatPKR(product.price)}</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="addToCart('${product.id}')" class="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs rounded-xl transition flex items-center justify-center gap-1.5 border border-slate-700">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Cart
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40">
                <i data-lucide="message-circle" class="w-4 h-4"></i> Order via WA
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  sortBy = "featured";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  
  // Reset category buttons UI
  document.querySelectorAll(".category-btn").forEach(btn => {
    if (btn.dataset.category === "all") {
      btn.className = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition bg-blue-600 text-white shadow-lg shadow-blue-500/25";
    } else {
      btn.className = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60";
    }
  });

  renderProducts();
}

// WhatsApp Order Link Generator
function createWhatsAppOrderLink(productName, size, price) {
  const msg = `Salam Nova Moto! 🏍️\n\nI want to order from your website:\n• Item: *${productName}*\n• Option/Size: *${size || "Standard"}*\n• Price: *${formatPKR(price)}*\n\nPlease confirm availability and payment details for dispatch. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Quick View Modal Logic
let currentQuickViewProduct = null;

function openQuickView(productId) {
  const p = products.find(item => item.id === productId);
  if (!p) return;
  currentQuickViewProduct = p;

  const modal = document.getElementById("quick-view-modal");
  const modalContent = document.getElementById("quick-view-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
      <div class="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover max-h-[380px]" />
        <span class="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase rounded-md text-white ${p.badgeColor}">
          ${p.badge}
        </span>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-sky-400 font-medium mb-1">
            <span>${p.categoryLabel}</span>
            <span class="text-emerald-400 flex items-center gap-1 font-semibold">
              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> In Stock & Ready to Dispatch
            </span>
          </div>

          <h2 class="text-2xl font-black text-white leading-tight mb-2">${p.name}</h2>
          
          <div class="flex items-center gap-2 mb-4">
            <div class="flex items-center text-amber-400 text-sm">
              <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              <span class="font-bold ml-1">${p.rating}</span>
            </div>
            <span class="text-slate-500 text-xs">| ${p.reviewsCount} verified rider reviews</span>
          </div>

          <div class="text-3xl font-extrabold text-white mb-4">
            ${formatPKR(p.price)}
          </div>

          <p class="text-sm text-slate-300 leading-relaxed mb-5">
            ${p.description}
          </p>

          <div class="mb-5">
            <h4 class="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">Key Technical Specs:</h4>
            <ul class="space-y-1.5 text-xs text-slate-300">
              ${p.features.map(f => `
                <li class="flex items-center gap-2">
                  <i data-lucide="shield-check" class="w-4 h-4 text-sky-400 flex-shrink-0"></i>
                  <span>${f}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <div class="mb-6">
            <label class="block text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Select Size / Option:
            </label>
            <div class="flex flex-wrap gap-2" id="modal-size-selector">
              ${p.sizes.map((s, idx) => `
                <button type="button" onclick="selectModalSize(this, '${s}')" class="size-opt-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${idx === 0 ? 'bg-sky-600 border-sky-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'}">
                  ${s}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="space-y-3 pt-4 border-t border-slate-800">
          <div class="grid grid-cols-2 gap-3">
            <button onclick="addModalItemToCart()" class="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 border border-slate-700">
              <i data-lucide="shopping-cart" class="w-4 h-4"></i> Add to Cart
            </button>
            <button onclick="orderModalItemWhatsApp()" class="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50">
              <i data-lucide="message-circle" class="w-4 h-4"></i> WhatsApp Order
            </button>
          </div>
          <div class="flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span class="flex items-center gap-1"><i data-lucide="truck" class="w-3.5 h-3.5 text-sky-400"></i> Fast Nationwide Dispatch</span>
            <span class="flex items-center gap-1"><i data-lucide="shield" class="w-3.5 h-3.5 text-sky-400"></i> Nova Moto Genuine Gear Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  `;

  selectedModalSize = p.sizes[0];
  modal.classList.remove("hidden");
  lucide.createIcons();
}

let selectedModalSize = "";
function selectModalSize(btn, size) {
  selectedModalSize = size;
  document.querySelectorAll(".size-opt-btn").forEach(b => {
    b.className = "size-opt-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500";
  });
  btn.className = "size-opt-btn px-3 py-1.5 rounded-lg text-xs font-semibold border transition bg-sky-600 border-sky-500 text-white";
}

function closeQuickView() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) modal.classList.add("hidden");
}

function addModalItemToCart() {
  if (!currentQuickViewProduct) return;
  addToCart(currentQuickViewProduct.id, selectedModalSize || currentQuickViewProduct.sizes[0]);
  closeQuickView();
}

function orderModalItemWhatsApp() {
  if (!currentQuickViewProduct) return;
  const link = createWhatsAppOrderLink(currentQuickViewProduct.name, selectedModalSize || currentQuickViewProduct.sizes[0], currentQuickViewProduct.price);
  window.open(link, "_blank");
}

// Cart Logic
function addToCart(productId, size = null) {
  const p = products.find(item => item.id === productId);
  if (!p) return;

  const chosenSize = size || p.sizes[0];
  const existing = cart.find(item => item.id === productId && item.size === chosenSize);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      size: chosenSize,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${p.name}" to cart! 🏍️`);
}

function updateCartQty(index, change) {
  if (!cart[index]) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Removed from cart.`);
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  updateCartUI();
  showToast("Cart cleared.");
}

function saveCart() {
  localStorage.setItem("nova_moto_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-counter");
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  countBadges.forEach(b => {
    b.innerText = totalCount;
    if (totalCount > 0) {
      b.classList.remove("hidden");
    } else {
      b.classList.add("hidden");
    }
  });

  const cartList = document.getElementById("cart-items-list");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartTotal = document.getElementById("cart-total");
  const emptyCartState = document.getElementById("empty-cart-state");
  const cartFooter = document.getElementById("cart-footer");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartSubtotal) cartSubtotal.innerText = formatPKR(subtotal);
  if (cartTotal) cartTotal.innerText = formatPKR(subtotal);

  if (!cartList) return;

  if (cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove("hidden");
    cartList.innerHTML = "";
    if (cartFooter) cartFooter.classList.add("hidden");
    return;
  }

  if (emptyCartState) emptyCartState.classList.add("hidden");
  if (cartFooter) cartFooter.classList.remove("hidden");

  cartList.innerHTML = cart.map((item, idx) => `
    <div class="flex items-center gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg border border-slate-700/60" />
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-bold text-white truncate">${item.name}</h4>
        <p class="text-[11px] text-sky-400 font-medium">Option: ${item.size}</p>
        <p class="text-xs font-extrabold text-slate-200 mt-1">${formatPKR(item.price)}</p>
      </div>
      <div class="flex flex-col items-end gap-2">
        <button onclick="removeCartItem(${idx})" class="text-slate-500 hover:text-red-400 transition">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
        <div class="flex items-center bg-slate-800 rounded-lg border border-slate-700 text-xs">
          <button onclick="updateCartQty(${idx}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-300 hover:bg-slate-700 rounded-l-lg">-</button>
          <span class="w-6 text-center font-bold text-white">${item.quantity}</span>
          <button onclick="updateCartQty(${idx}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-300 hover:bg-slate-700 rounded-r-lg">+</button>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Checkout Entire Cart via WhatsApp
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add gear before checking out.");
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let message = `*Salam Nova Moto!* 🏍️\nI would like to place an order from your website:\n\n*ORDER ITEMS:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n   • Option/Size: ${item.size}\n   • Qty: ${item.quantity}\n   • Price: ${formatPKR(item.price * item.quantity)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*ESTIMATED TOTAL: ${formatPKR(subtotal)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Please confirm availability, dispatch timeframe, and payment instructions. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Toast Feedback System
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg flex items-center gap-3 bg-slate-900/95 text-white text-xs sm:text-sm px-4 py-3 rounded-xl border border-sky-500/40 shadow-xl backdrop-blur-md mb-2.5";
  toast.innerHTML = `
    <i data-lucide="check-circle-2" class="w-5 h-5 text-sky-400 flex-shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    toast.style.transition = "all 0.3s ease-out";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Interactive Rider Gear Checklist
const checklistPresets = {
  kkh: [
    { name: "Nova Moto Expedition 38L Aluminum Panniers", productId: "nm-01", checked: true },
    { name: "Trans-Continental 4-Season All-Weather Riding Jacket", productId: "nm-02", checked: true },
    { name: "Apex Adventure Tourer Waterproof Riding Pants", productId: "nm-05", checked: true },
    { name: "Nova Tourer Dual-Sport Carbon-Hybrid Adventure Helmet", productId: "nm-04", checked: true },
    { name: "Karakoram Arctic Tourer Waterproof Winter Gloves", productId: "nm-07", checked: true },
    { name: "Terra-Track CE Adventure Waterproof Touring Boots", productId: "nm-06", checked: true },
    { name: "Ultra-Beam 60W CREE Auxiliary Fog Lights", productId: "nm-11", checked: false },
    { name: "Anti-Vibration Wireless Charging Phone Mount", productId: "nm-09", checked: true },
    { name: "Heavy-Duty 50L Waterproof Dry Duffle Bag", productId: "nm-03", checked: false }
  ],
  weekend: [
    { name: "Enduro Magnetic & Strap Quick-Release Tank Bag 18L", productId: "nm-10", checked: true },
    { name: "Nova Moto 45L Adventure Top Box", productId: "nm-12", checked: true },
    { name: "Anti-Vibration Wireless Charging Phone Mount", productId: "nm-09", checked: true },
    { name: "Trans-Continental Riding Jacket", productId: "nm-02", checked: true },
    { name: "MotoMesh Pro V6 Bluetooth Intercom System", productId: "nm-08", checked: false }
  ],
  offroad: [
    { name: "Heavy-Duty 50L Waterproof Dry Duffle Bag", productId: "nm-03", checked: true },
    { name: "Terra-Track CE Adventure Touring Boots", productId: "nm-06", checked: true },
    { name: "Ultra-Beam 60W Auxiliary Fog Lights", productId: "nm-11", checked: true },
    { name: "Anti-Vibration Phone Mount", productId: "nm-09", checked: true },
    { name: "Nova Tourer Dual-Sport Helmet", productId: "nm-04", checked: true }
  ]
};

let currentPresetKey = "kkh";

function renderChecklist(presetKey = "kkh") {
  currentPresetKey = presetKey;
  const listEl = document.getElementById("checklist-items");
  if (!listEl) return;

  const items = checklistPresets[presetKey] || checklistPresets.kkh;

  listEl.innerHTML = items.map((item, idx) => `
    <div class="flex items-center justify-between p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 hover:border-slate-700 transition">
      <label class="flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0 pr-2">
        <input type="checkbox" ${item.checked ? "checked" : ""} onchange="toggleChecklistItem('${presetKey}', ${idx}, this.checked)" class="w-4 h-4 rounded text-sky-500 bg-slate-800 border-slate-700 focus:ring-0 focus:ring-offset-0" />
        <span class="text-xs sm:text-sm font-medium ${item.checked ? 'text-slate-400 line-through' : 'text-slate-100'}">${item.name}</span>
      </label>
      <button onclick="addToCart('${item.productId}')" class="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 text-sky-400 hover:text-white rounded-lg text-xs font-semibold transition flex items-center gap-1">
        <i data-lucide="plus" class="w-3.5 h-3.5"></i> Add
      </button>
    </div>
  `).join("");

  // Update preset buttons
  document.querySelectorAll(".preset-tab").forEach(tab => {
    if (tab.dataset.preset === presetKey) {
      tab.className = "preset-tab px-4 py-2 bg-blue-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30";
    } else {
      tab.className = "preset-tab px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700/60";
    }
  });

  lucide.createIcons();
}

function toggleChecklistItem(presetKey, index, checked) {
  if (checklistPresets[presetKey] && checklistPresets[presetKey][index]) {
    checklistPresets[presetKey][index].checked = checked;
    renderChecklist(presetKey);
  }
}

function addAllUncheckedToChecklistCart() {
  const items = checklistPresets[currentPresetKey] || [];
  let addedCount = 0;
  items.forEach(it => {
    if (!it.checked) {
      addToCart(it.productId);
      it.checked = true;
      addedCount++;
    }
  });

  if (addedCount > 0) {
    renderChecklist(currentPresetKey);
    showToast(`Added ${addedCount} essential touring gear items to cart!`);
    openCartDrawer();
  } else {
    showToast(`All expedition items are already checked! 🚀`);
  }
}

// Initialization on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  renderChecklist("kkh");

  // Category buttons
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      document.querySelectorAll(".category-btn").forEach(b => {
        b.className = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60";
      });
      btn.className = "category-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition bg-blue-600 text-white shadow-lg shadow-blue-500/25";
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      renderProducts();
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
