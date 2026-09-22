/* ================= CONFIG ================= */
const NURSERY = {
  name: "Gurudatta Nursery",
  phone: "919657515353", // country code + number, no + or spaces
};

/* ================= CATEGORIES ================= */
const CATEGORIES = [
  { id: "indoor",    label: "Indoor Plants" },
  { id: "flowering", label: "Flowering Plants" },
  { id: "outdoor",   label: "Outdoor & Garden" },
  { id: "fruit",     label: "Fruit Plants" },
  { id: "succulent", label: "Succulents & Cacti" },
  { id: "medicinal", label: "Medicinal & Herbal" },
];

/* ================= PLANTS =================
   Edit this list to match actual stock.
   `photo`: put a real photo of that plant at this path inside the
   images/ folder (jpg or png). Until a file exists there, a drawn
   illustration is shown instead — nothing breaks either way. */
const PLANTS = [
  // Indoor
  { name: "Money Plant", local: "Epipremnum aureum", category: "indoor", photo: "images/money-plant.jpg", blurb: "Trailing vine, thrives indoors, very low maintenance." },
  { name: "Snake Plant", local: "Sansevieria trifasciata", category: "indoor", photo: "images/snake-plant.jpg", blurb: "Upright leaves, tolerates low light and irregular watering." },
  { name: "Areca Palm", local: "Dypsis lutescens", category: "indoor", photo: "images/areca-palm.jpg", blurb: "Feathery palm, good for corners and balconies." },
  { name: "ZZ Plant", local: "Zamioculcas zamiifolia", category: "indoor", photo: "images/zz-plant.jpg", blurb: "Glossy leaves, survives weeks without water." },
  { name: "Peace Lily", local: "Spathiphyllum", category: "indoor", photo: "images/peace-lily.jpg", blurb: "White blooms, prefers shade and moist soil." },
  { name: "Spider Plant", local: "Chlorophytum comosum", category: "indoor", photo: "images/spider-plant.jpg", blurb: "Arching striped leaves, easy to propagate." },

  // Flowering
  { name: "Rose", local: "Rosa hybrid", category: "flowering", photo: "images/rose.jpg", blurb: "Classic garden rose, several colours usually in stock." },
  { name: "Hibiscus", local: "Hibiscus rosa-sinensis", category: "flowering", photo: "images/hibiscus.jpg", blurb: "Big bright blooms, full sun, flowers most of the year." },
  { name: "White Hibiscus", local: "Hibiscus rosa-sinensis (white)", category: "flowering", photo: "images/white-hibiscus.jpg", blurb: "Large white blooms, bright and elegant, ideal for sunny corners." },
  { name: "Marigold", local: "Tagetes (Zendu)", category: "flowering", photo: "images/marigold.jpg", blurb: "Festival flower, fast growing." },
  { name: "Jasmine", local: "Jasminum sambac (Mogra)", category: "flowering", photo: "images/jasmine.jpg", blurb: "Fragrant white flowers, climbs or stays bushy." },
  { name: "Bougainvillea", local: "Bougainvillea glabra", category: "flowering", photo: "images/bougainvillea.jpg", blurb: "Papery bracts, needs sun, great for gates and fences." },
  { name: "Hydrangea", local: "Hydrangea macrophylla", category: "flowering", photo: "images/hydrangea.jpg", blurb: "Large flower clusters, keep soil consistently moist." },

  // Outdoor / Garden
  { name: "Croton", local: "Codiaeum variegatum", category: "outdoor", photo: "images/croton.jpg", blurb: "Colourful leaves, good hedge or accent plant." },
  { name: "Areca Hedge Palm", local: "Dypsis lutescens (hedge)", category: "outdoor", photo: "images/areca-hedge.jpg", blurb: "Planted in rows for privacy screening." },
  { name: "Ficus Bonsai", local: "Ficus microcarpa", category: "outdoor", photo: "images/ficus-bonsai.jpg", blurb: "Trained bonsai form, several years old." },
  { name: "Ashoka Tree", local: "Polyalthia longifolia", category: "outdoor", photo: "images/ashoka-tree.jpg", blurb: "Tall narrow tree, common for boundary planting." },
  { name: "Bamboo", local: "Bambusa species", category: "outdoor", photo: "images/bamboo.jpg", blurb: "Clumping bamboo for screening and borders." },

  // Fruit
  { name: "Mango Sapling", local: "Mangifera indica", category: "fruit", photo: "images/mango.jpg", blurb: "Grafted variety, fruits in 3–4 years." },
  { name: "Guava", local: "Psidium guajava", category: "fruit", photo: "images/guava.jpg", blurb: "Grafted, compact size, fruits within 1–2 years." },
  { name: "Lemon", local: "Citrus limon", category: "fruit", photo: "images/lemon.jpg", blurb: "Regular fruiting, needs full sun." },
  { name: "Pomegranate", local: "Punica granatum", category: "fruit", photo: "images/pomegranate.jpg", blurb: "Grafted variety, tolerates dry spells once established." },
  { name: "Sitaphal (Custard Apple)", local: "Annona squamosa", category: "fruit", photo: "images/sitaphal.jpg", blurb: "Hardy tree, suited to local soil and climate." },
  { name: "Chikoo", local: "Manilkara zapota", category: "fruit", photo: "images/chikoo.jpg", blurb: "Slow growing, long fruiting life once mature." },

  // Succulents & Cacti
  { name: "Jade Plant", local: "Crassula ovata", category: "succulent", photo: "images/jade-plant.jpg", blurb: "Thick glossy leaves, said to bring good luck." },
  { name: "Echeveria", local: "Echeveria elegans", category: "succulent", photo: "images/echeveria.jpg", blurb: "Rosette succulent, needs bright light, little water." },
  { name: "Haworthia", local: "Haworthia fasciata", category: "succulent", photo: "images/haworthia.jpg", blurb: "Small striped succulent, ideal for desks and shelves." },
  { name: "Assorted Cactus", local: "Cactaceae species", category: "succulent", photo: "images/cactus.jpg", blurb: "Mixed small cacti, sold potted, colours vary." },

  // Medicinal & Herbal
  { name: "Tulsi (Holy Basil)", local: "Ocimum tenuiflorum", category: "medicinal", photo: "images/tulsi.jpg", blurb: "Grown for daily use and puja, full sun." },
  { name: "Aloe Vera", local: "Aloe barbadensis miller", category: "medicinal", photo: "images/aloe-vera.jpg", blurb: "Thick gel-filled leaves, very low water needs." },
  { name: "Curry Leaf", local: "Murraya koenigii", category: "medicinal", photo: "images/curry-leaf.jpg", blurb: "Everyday kitchen herb, needs regular trimming to bush out." },
  { name: "Neem", local: "Azadirachta indica", category: "medicinal", photo: "images/neem.jpg", blurb: "Hardy tree, leaves and twigs widely used medicinally." },
];

/* ================= WHATSAPP LINK ================= */
function whatsappLink(plant) {
  const text = plant
    ? `Hi ${NURSERY.name}, I want to buy this plant: ${plant.name}. Please let me know if it's in stock.`
    : `Hi ${NURSERY.name}, I'd like to know more about your plants and current stock.`;
  return `https://wa.me/${NURSERY.phone}?text=${encodeURIComponent(text)}`;
}

/* ================= AI-GENERATED PLACEHOLDER ART =================
   Every card uses generated plant artwork so there are no missing-image errors,
   broken links, or blank sections. Real photos can be swapped in later. */
function makePlantArt(plant) {
  const label = plant.name || "Plant";
  const shortLabel = label.length > 18 ? label.split(" ").slice(0, 2).join(" ") : label;
  const palette = {
    indoor: ["#edf7d6", "#7fa66b", "#244b3f"],
    flowering: ["#f7ead9", "#d68a44", "#6a3f2f"],
    outdoor: ["#dfeee0", "#5b8d58", "#2e4336"],
    fruit: ["#f7f1d5", "#d9a337", "#4a5d2e"],
    succulent: ["#eaf6d7", "#8db66a", "#2d4c3d"],
    medicinal: ["#e3f2d9", "#6f9d4d", "#1b3a2d"],
  };
  const [bg, leaf, dark] = palette[plant.category] || ["#edf7d6", "#7fa66b", "#244b3f"];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg${plant.name}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="#f6f0de"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg${plant.name})"/>
      <ellipse cx="420" cy="470" rx="250" ry="65" fill="rgba(35,61,40,0.12)"/>
      <circle cx="650" cy="120" r="52" fill="#f4d784" opacity="0.8"/>
      <path d="M402 456 C332 382, 285 302, 287 228 C290 166, 338 120, 392 120 C457 120, 513 161, 520 231 C527 330, 469 389, 402 456 Z" fill="${leaf}" opacity="0.96"/>
      <path d="M463 182 C500 210, 544 252, 552 314 C517 292, 477 286, 432 290 C416 252, 431 214, 463 182 Z" fill="${dark}" opacity="0.22"/>
      <path d="M344 182 C314 216, 278 246, 246 282 C280 280, 322 278, 366 290 C376 249, 365 212, 344 182 Z" fill="${dark}" opacity="0.18"/>
      <path d="M307 275 C330 259, 362 248, 405 247" stroke="${leaf}" stroke-width="18" fill="none" stroke-linecap="round"/>
      <path d="M409 248 C441 224, 469 197, 493 172" stroke="${leaf}" stroke-width="18" fill="none" stroke-linecap="round"/>
      <path d="M394 168 C403 120, 426 95, 448 78" stroke="${dark}" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M390 170 C356 138, 327 111, 302 86" stroke="${dark}" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M390 168 C438 140, 484 122, 530 120" stroke="${dark}" stroke-width="12" fill="none" stroke-linecap="round"/>
      <rect x="90" y="430" width="620" height="88" rx="18" fill="rgba(35,61,40,0.10)"/>
      <text x="400" y="488" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" font-weight="700" fill="${dark}">${shortLabel}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const FALLBACK_PHOTO = makePlantArt({ name: "Gurudatta Nursery", category: "indoor" });

const whatsIconSVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.9 14.1c-.25.7-1.45 1.35-2 1.44-.53.09-1.16.13-1.87-.12-.43-.15-.98-.33-1.69-.64-2.98-1.29-4.92-4.3-5.07-4.5-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.05-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.76 1.28 1.64 2.07 1.13 1.02 2.08 1.34 2.38 1.49.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.27.1 1.75.85 2.05 1 .3.15.5.23.58.35.07.13.07.75-.18 1.45z"/></svg>`;

/* ================= RENDER: CATEGORY TAGS ================= */
let activeCategory = "all";

function renderCatTags() {
  const nav = document.getElementById("catTags");
  const all = [{ id: "all", label: "All Plants" }, ...CATEGORIES];
  nav.innerHTML = all.map(c =>
    `<button class="cat-tag" data-cat="${c.id}" aria-pressed="${c.id === activeCategory}">${c.label}</button>`
  ).join("");
  nav.querySelectorAll(".cat-tag").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderCatTags();
      renderPlantGroups();
      document.getElementById("plants").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ================= RENDER: PLANT CARDS ================= */
function plantCardHTML(plant) {
  const imageSrc = plant.photo && plant.photo.startsWith("data:") ? plant.photo : makePlantArt(plant);
  return `
  <article class="plant-card">
    <div class="plant-photo-wrap">
      <img src="${imageSrc}" alt="${plant.name}"
           onerror="this.onerror=null;this.src='${FALLBACK_PHOTO}';">
    </div>
    <div class="plant-body">
      <h3 class="plant-name">${plant.name}</h3>
      <p class="plant-local">${plant.local}</p>
      <p class="plant-blurb">${plant.blurb}</p>
      <a class="plant-buy" href="${whatsappLink(plant)}" target="_blank" rel="noopener">${whatsIconSVG}<span>Ask on WhatsApp</span></a>
    </div>
  </article>`;
}

function renderPlantGroups() {
  const container = document.getElementById("plantGroups");
  const cats = activeCategory === "all" ? CATEGORIES : CATEGORIES.filter(c => c.id === activeCategory);
  container.innerHTML = cats.map(cat => {
    const items = PLANTS.filter(p => p.category === cat.id);
    if (!items.length) return "";
    return `
    <div class="cat-group">
      <h3 class="cat-group-title">${cat.label} <span>${items.length} varieties</span></h3>
      <div class="plant-grid">${items.map(plantCardHTML).join("")}</div>
    </div>`;
  }).join("");
}

/* ================= RENDER: CATALOG (list, no rates) ================= */
function renderCatalogFilter() {
  const select = document.getElementById("catalogFilter");
  select.innerHTML = `<option value="all">All categories</option>` +
    CATEGORIES.map(c => `<option value="${c.id}">${c.label}</option>`).join("");
}

function renderCatalogList() {
  const list = document.getElementById("catalogList");
  const search = document.getElementById("catalogSearch").value.trim().toLowerCase();
  const filter = document.getElementById("catalogFilter").value;

  const rows = PLANTS.filter(p => {
    const matchesCat = filter === "all" || p.category === filter;
    const matchesSearch = !search || p.name.toLowerCase().includes(search) || p.local.toLowerCase().includes(search);
    return matchesCat && matchesSearch;
  });

  if (!rows.length) {
    list.innerHTML = `<li class="catalog-empty">No plants match that search.</li>`;
    return;
  }

  list.innerHTML = rows.map(p => `
    <li>
      <div>
        <span class="catalog-plant-name">${p.name}</span>
        <span class="catalog-plant-local">${p.local}</span>
      </div>
      <span class="catalog-cat-label">${CATEGORIES.find(c => c.id === p.category)?.label || ""}</span>
      <a class="catalog-buy" href="${whatsappLink(p)}" target="_blank" rel="noopener">Ask on WhatsApp</a>
    </li>`).join("");
}

/* ================= NAV TOGGLE (mobile) ================= */
function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "100%";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background = "var(--paper)";
      nav.style.padding = "1rem 5vw";
      nav.style.borderBottom = "1px solid var(--line)";
    } else {
      nav.removeAttribute("style");
    }
  });
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("heroPhoto").src = makePlantArt({
    name: "Gurudatta Nursery",
    category: "outdoor",
  });
  document.getElementById("headerWhatsapp").href = whatsappLink();
  document.getElementById("aboutWhatsapp").href = whatsappLink();
  document.getElementById("floatWhatsapp").href = whatsappLink();

  renderCatTags();
  renderPlantGroups();
  renderCatalogFilter();
  renderCatalogList();

  document.getElementById("catalogSearch").addEventListener("input", renderCatalogList);
  document.getElementById("catalogFilter").addEventListener("change", renderCatalogList);

  setupNavToggle();
});
