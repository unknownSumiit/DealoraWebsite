/**
 * Dealora — coupon & store interactions
 */

const CATEGORIES = [
  { name: "Fashion", slug: "fashion", deals: 18, icon: "shirt" },
  { name: "Electronics", slug: "electronics", deals: 14, icon: "device" },
  { name: "Food & Dining", slug: "food", deals: 11, icon: "food" },
  { name: "Beauty", slug: "beauty", deals: 9, icon: "spark" },
  { name: "Travel", slug: "travel", deals: 7, icon: "plane" },
  { name: "Home & Garden", slug: "home", deals: 10, icon: "home" },
  { name: "Software", slug: "software", deals: 8, icon: "code" },
  { name: "Health & Fitness", slug: "health", deals: 6, icon: "heart" },
];

const STORES = [
  { name: "Amazon", initials: "AM", color: "#f59e0b" },
  { name: "Walmart", initials: "WM", color: "#2563eb" },
  { name: "Target", initials: "TG", color: "#dc2626" },
  { name: "Nike", initials: "NK", color: "#111827" },
  { name: "Adidas", initials: "AD", color: "#1d4ed8" },
  { name: "Best Buy", initials: "BB", color: "#1e40af" },
  { name: "Macy's", initials: "MC", color: "#be123c" },
  { name: "Sephora", initials: "SP", color: "#111827" },
  { name: "eBay", initials: "EB", color: "#e11d48" },
  { name: "Home Depot", initials: "HD", color: "#ea580c" },
  { name: "Lowe's", initials: "LW", color: "#0f766e" },
  { name: "Wayfair", initials: "WF", color: "#7c3aed" },
  { name: "Nordstrom", initials: "ND", color: "#334155" },
  { name: "Kohl's", initials: "KH", color: "#4338ca" },
  { name: "Old Navy", initials: "ON", color: "#0369a1" },
  { name: "Gap", initials: "GP", color: "#0f172a" },
  { name: "Dell", initials: "DL", color: "#0284c7" },
  { name: "Samsung", initials: "SM", color: "#1428a0" },
  { name: "Uber Eats", initials: "UE", color: "#16a34a" },
  { name: "DoorDash", initials: "DD", color: "#dc2626" },
  { name: "Apple", initials: "AP", color: "#111827" },
  { name: "Costco", initials: "CS", color: "#dc2626" },
  { name: "Etsy", initials: "ET", color: "#ea580c" },
  { name: "Ulta Beauty", initials: "UB", color: "#db2777" },
];

const COUPONS = [
  { id: 1, store: "Nike", category: "Fashion", type: "Promo Code", headline: "20% Off Select Styles", description: "Promo for selected Nike apparel and footwear collections.", code: "DEALORA10", expires: "Oct 31, 2026" },
  { id: 2, store: "Walmart", category: "Home", type: "Deal", headline: "$15 Off $75+ Online", description: "Example savings offer on eligible Walmart.com orders over $75.", code: null, expires: "Nov 15, 2026" },
  { id: 3, store: "Target", category: "Beauty", type: "Promo Code", headline: "15% Off Beauty", description: "Code for Target beauty and personal care items.", code: "SAVE20", expires: "Oct 20, 2026" },
  { id: 4, store: "Best Buy", category: "Electronics", type: "Deal", headline: "Up to $100 Off Laptops", description: "Deal highlighting laptop savings during a promotional window.", code: null, expires: "Dec 01, 2026" },
  { id: 5, store: "Amazon", category: "Electronics", type: "Free Shipping", headline: "Free Shipping on Eligible Orders", description: "Example shipping offer. Availability depends on Amazon account and items.", code: null, expires: "Ongoing" },
  { id: 6, store: "Macy's", category: "Fashion", type: "Promo Code", headline: "Extra 20% Off Sale", description: "Extra-savings code for already reduced Macy's items.", code: "WELCOME15", expires: "Nov 02, 2026" },
  { id: 7, store: "Adidas", category: "Fashion", type: "Promo Code", headline: "25% Off Outlet Picks", description: "Coupon for selected Adidas outlet products.", code: "SAVE20", expires: "Oct 28, 2026" },
  { id: 8, store: "Sephora", category: "Beauty", type: "Cashback", headline: "Example $10 Beauty Credit", description: "Cashback-style offer for qualifying Sephora purchases.", code: null, expires: "Dec 12, 2026" },
  { id: 9, store: "eBay", category: "Electronics", type: "Promo Code", headline: "10% Off Select Tech", description: "Example promo code for eligible electronics listings.", code: "DEALORA10", expires: "Nov 08, 2026" },
  { id: 10, store: "Home Depot", category: "Home", type: "Deal", headline: "$20 Off $100+ Tools", description: "Home Depot savings on qualifying tool purchases.", code: null, expires: "Oct 25, 2026" },
  { id: 11, store: "Lowe's", category: "Home", type: "Free Shipping", headline: "Free Shipping on $45+", description: "Example shipping promotion for qualifying Lowe's online orders.", code: null, expires: "Nov 30, 2026" },
  { id: 12, store: "Wayfair", category: "Home", type: "Promo Code", headline: "15% Off Home Decor", description: "Code for selected Wayfair furniture and decor.", code: "WELCOME15", expires: "Dec 05, 2026" },
  { id: 13, store: "Nordstrom", category: "Fashion", type: "Deal", headline: "Designer Sale Highlights", description: "Featured sale messaging for Nordstrom seasonal markdowns.", code: null, expires: "Oct 18, 2026" },
  { id: 14, store: "Kohl's", category: "Fashion", type: "Promo Code", headline: "$10 Off $50 Purchase", description: "Example Kohl's coupon for a minimum purchase threshold.", code: "SAVE20", expires: "Nov 22, 2026" },
  { id: 15, store: "Old Navy", category: "Fashion", type: "Promo Code", headline: "30% Off Full-Price", description: "Old Navy promo for full-price apparel.", code: "DEALORA10", expires: "Oct 14, 2026" },
  { id: 16, store: "Gap", category: "Fashion", type: "Free Shipping", headline: "Free Shipping, No Minimum", description: "Example Gap shipping offer for online checkout.", code: null, expires: "Nov 11, 2026" },
  { id: 17, store: "Dell", category: "Electronics", type: "Deal", headline: "Up to $200 Off PCs", description: "Dell savings on selected computers and accessories.", code: null, expires: "Dec 20, 2026" },
  { id: 18, store: "Samsung", category: "Electronics", type: "Promo Code", headline: "Student-Style Save", description: "Samsung promo code for education-themed offers.", code: "WELCOME15", expires: "Jan 15, 2027" },
  { id: 19, store: "Uber Eats", category: "Food", type: "Promo Code", headline: "\$10 Off First Order", description: "First-order style code.", code: "DEALORA10", expires: "Oct 31, 2026" },
  { id: 20, store: "DoorDash", category: "Food", type: "Cashback", headline: "DashPass Trial Promo", description: "Cashback-style dining offer for illustration only.", code: null, expires: "Nov 05, 2026" },
  { id: 21, store: "Apple", category: "Electronics", type: "Deal", headline: "Back-to-School Style Save", description: "Example Apple education-period savings message.", code: null, expires: "Sep 30, 2026" },
  { id: 22, store: "Etsy", category: "Home", type: "Promo Code", headline: "15% Off Handmade Picks", description: "Etsy promo for selected handmade goods.", code: "SAVE20", expires: "Dec 08, 2026" },
  { id: 23, store: "Ulta Beauty", category: "Beauty", type: "Deal", headline: "Bonus Points Example", description: "Beauty rewards-style deal for Ulta purchases.", code: null, expires: "Nov 18, 2026" },
  { id: 24, store: "Costco", category: "Food", type: "Deal", headline: "Member Savings Spotlight", description: "Example warehouse-club deal card for Costco shoppers.", code: null, expires: "Oct 22, 2026" },
  { id: 25, store: "Amazon", category: "Travel", type: "Deal", headline: "Travel Gear Save", description: "Travel-accessories deal for luggage and packing products.", code: null, expires: "Nov 28, 2026" },
  { id: 26, store: "Target", category: "Health", type: "Promo Code", headline: "10% Off Wellness Picks", description: "Target code for selected health and wellness items.", code: "WELCOME15", expires: "Dec 02, 2026" },
  { id: 27, store: "Dell", category: "Software", type: "Promo Code", headline: "Software Bundle Save", description: "Dell promo for selected software and service add-ons.", code: "SAVE20", expires: "Jan 08, 2027" },
  { id: 28, store: "Samsung", category: "Software", type: "Deal", headline: "App Credit Offer", description: "Samsung software/services deal.", code: null, expires: "Nov 19, 2026" },
];

const PAGE_SIZE = 9;
const storeByName = Object.fromEntries(STORES.map((s) => [s.name, s]));

function storeColor(name) {
  return storeByName[name]?.color || "#4f46e5";
}

function storeInitials(name) {
  return storeByName[name]?.initials || name.slice(0, 2).toUpperCase();
}

function couponCount(storeName) {
  return COUPONS.filter((c) => c.store === storeName).length;
}

function typeBadgeClass(type) {
  if (type === "Promo Code") return "badge--code";
  if (type === "Free Shipping") return "badge--ship";
  if (type === "Cashback") return "badge--cash";
  return "badge--deal";
}

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function couponCardHTML(coupon) {
  const hasCode = Boolean(coupon.code);
  const action = hasCode
    ? `<button class="btn btn--primary btn--sm btn--block" type="button" data-open-coupon="${coupon.id}">Show Code</button>`
    : `<button class="btn btn--primary btn--sm btn--block" type="button" data-open-coupon="${coupon.id}">Get Deal</button>`;

  return `
    <article class="card coupon-card">
      <div class="store-chip">
        <div class="avatar" style="background:${storeColor(coupon.store)}" aria-hidden="true">${escapeHtml(storeInitials(coupon.store))}</div>
        <div>
          <strong>${escapeHtml(coupon.store)}</strong>
          <div class="muted">Listing</div>
        </div>
      </div>
      <div>
        <span class="badge ${typeBadgeClass(coupon.type)}">${escapeHtml(coupon.type)}</span>
        
      </div>
      <h3>${escapeHtml(coupon.headline)}</h3>
      <p class="muted">${escapeHtml(coupon.description)}</p>
      <p class="expire">Example expiration: ${escapeHtml(coupon.expires)}</p>
      <div class="actions">${action}</div>
    </article>
  `;
}

function storeCardHTML(store) {
  const count = couponCount(store.name);
  return `
    <article class="card store-card" data-store-name="${escapeHtml(store.name)}">
      <div class="store-chip">
        <div class="avatar" style="background:${store.color}" aria-hidden="true">${escapeHtml(store.initials)}</div>
        <div>
          <h3>${escapeHtml(store.name)}</h3>
          <p class="muted">${count} ${count === 1 ? "deal" : "deals"}</p>
        </div>
      </div>
      <div class="actions">
        <a class="btn btn--ghost btn--sm btn--block" href="coupons.html?store=${encodeURIComponent(store.name)}">View Coupons</a>
      </div>
    </article>
  `;
}

function setupMobileNav() {
  const toggle = qs("[data-menu-toggle]");
  const panel = qs("[data-mobile-nav]");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function setupHeaderSearch() {
  qsa("[data-site-search]").forEach((form) => {
    const input = qs("input", form);
    const box = qs("[data-suggestions]", form);
    if (!input) return;

    const runSearch = (term) => {
      const q = (term || input.value || "").trim();
      if (!q) return;
      window.location.href = `coupons.html?q=${encodeURIComponent(q)}`;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      runSearch();
    });

    if (!box) return;

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 1) {
        box.classList.remove("is-open");
        box.innerHTML = "";
        return;
      }
      const matches = [
        ...STORES.map((s) => s.name),
        ...COUPONS.map((c) => c.headline),
      ].filter((item, i, arr) => arr.indexOf(item) === i && item.toLowerCase().includes(q)).slice(0, 7);

      if (!matches.length) {
        box.innerHTML = `<p class="muted" style="padding:0.7rem 0.9rem;margin:0">No deals found. Try another search.</p>`;
        box.classList.add("is-open");
        return;
      }

      box.innerHTML = matches
        .map((m) => `<button type="button" data-suggest="${escapeHtml(m)}">${escapeHtml(m)}</button>`)
        .join("");
      box.classList.add("is-open");
    });

    box.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-suggest]");
      if (!btn) return;
      input.value = btn.getAttribute("data-suggest");
      runSearch(input.value);
    });

    document.addEventListener("click", (e) => {
      if (!form.contains(e.target)) box.classList.remove("is-open");
    });
  });
}

function setupNewsletter() {
  qsa("[data-newsletter]").forEach((form) => {
    const input = qs('input[type="email"]', form);
    const msg = qs("[data-newsletter-msg]", form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (input.value || "").trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!valid) {
        msg.textContent = "Please enter a valid email address.";
        msg.className = "form-message is-error";
        input.focus();
        return;
      }
      msg.textContent = "Thanks! Your submission has been received.";
      msg.className = "form-message is-ok";
      form.reset();
    });
  });
}

function setupBackToTop() {
  const btn = qs("[data-back-to-top]");
  if (!btn) return;
  const onScroll = () => {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  onScroll();
}

function setupSubmitModal() {
  const modal = qs("#submit-modal");
  if (!modal) return;
  qsa("[data-open-submit]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(modal));
  });
  const form = qs("[data-submit-form]", modal);
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = qs("[data-submit-msg]", form);
      msg.textContent = "Submission received.";
      msg.className = "form-message is-ok";
      msg.style.color = "#047857";
      form.reset();
    });
  }
}

let activeModal = null;

function openModal(modal) {
  activeModal = modal;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  const closeBtn = qs("[data-close-modal]", modal);
  closeBtn?.focus();
}

function closeModal(modal) {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  activeModal = null;
}

function setupModalShell() {
  qsa(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target.matches("[data-close-modal], .modal-backdrop")) closeModal(modal);
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModal) closeModal(activeModal);
  });
}

function fillCouponModal(coupon) {
  const modal = qs("#coupon-modal");
  if (!modal) return;
  qs("[data-modal-store]", modal).textContent = coupon.store;
  qs("[data-modal-discount]", modal).textContent = coupon.headline;
  qs("[data-modal-desc]", modal).textContent = coupon.description;
  const code = coupon.code || "DEALPAGE";
  qs("[data-modal-code]", modal).textContent = code;
  const copyBtn = qs("[data-copy-code]", modal);
  copyBtn.dataset.code = code;
  copyBtn.textContent = "Copy Code";
  openModal(modal);
}

function setupCouponActions(root = document) {
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-coupon]");
    if (!btn) return;
    const coupon = COUPONS.find((c) => String(c.id) === btn.getAttribute("data-open-coupon"));
    if (coupon) fillCouponModal(coupon);
  });
}

function setupCopyCode() {
  const btn = qs("[data-copy-code]");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const code = btn.dataset.code || "";
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const tmp = document.createElement("textarea");
      tmp.value = code;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      tmp.remove();
    }
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy Code";
    }, 1600);
  });
}

function getParams() {
  return new URLSearchParams(window.location.search);
}

function renderHome() {
  const catGrid = qs("[data-category-grid]");
  if (catGrid) {
    catGrid.innerHTML = CATEGORIES.map((c) => `
      <a class="card category-card" href="coupons.html?category=${encodeURIComponent(c.slug === "food" ? "Food" : c.slug === "home" ? "Home" : c.name.split(" ")[0])}">
        <div class="category-icon" aria-hidden="true">${categorySVG(c.icon)}</div>
        <h3>${escapeHtml(c.name)}</h3>
        <p class="muted">${c.deals} deals</p>
      </a>
    `).join("");
  }

  const featured = qs("[data-featured-grid]");
  if (featured) {
    featured.innerHTML = COUPONS.slice(0, 8).map(couponCardHTML).join("");
  }

  const trending = qs("[data-trending-grid]");
  if (trending) {
    trending.innerHTML = STORES.slice(0, 8).map(storeCardHTML).join("");
  }
}

function categorySVG(icon) {
  const icons = {
    shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M4 7l4-3 4 3 4-3 4 3v4l-3-1v10H7V10L4 11V7z"/></svg>',
    device: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 18h6"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M4 12h16v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z"/><path d="M8 12V5m4 7V4m4 8V6"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M12 3l1.5 6L20 10.5 13.5 12 12 18l-1.5-6L4 10.5 10.5 9 12 3z"/></svg>',
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M3 12l18-8-8 18-2-7-8-3z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2"><path d="M12 20s-7-4.4-7-10a4 4 0 017-2 4 4 0 017 2c0 5.6-7 10-7 10z"/></svg>',
  };
  return icons[icon] || icons.spark;
}

function normalizeCategory(value) {
  const map = {
    fashion: "Fashion",
    electronics: "Electronics",
    beauty: "Beauty",
    food: "Food",
    travel: "Travel",
    home: "Home",
    software: "Software",
    health: "Health",
    "food & dining": "Food",
    "home & garden": "Home",
    "health & fitness": "Health",
  };
  if (!value) return "";
  return map[value.toLowerCase()] || value;
}

function renderCouponsPage() {
  const grid = qs("[data-coupon-grid]");
  if (!grid) return;

  const params = getParams();
  const searchInput = qs("#coupon-search");
  const catSelect = qs("#filter-category");
  const storeSelect = qs("#filter-store");
  const typeSelect = qs("#filter-type");
  const sortSelect = qs("#filter-sort");
  const empty = qs("[data-empty]");
  const pager = qs("[data-pagination]");

  if (storeSelect) {
    storeSelect.innerHTML =
      `<option value="">All stores</option>` +
      STORES.map((s) => `<option value="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join("");
  }

  if (params.get("q") && searchInput) searchInput.value = params.get("q");
  if (params.get("store") && storeSelect) storeSelect.value = params.get("store");
  if (params.get("category") && catSelect) {
    const cat = normalizeCategory(params.get("category"));
    const match = [...catSelect.options].find((o) => o.value === cat);
    if (match) catSelect.value = cat;
  }

  let page = 1;

  const apply = () => {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const cat = catSelect?.value || "";
    const store = storeSelect?.value || "";
    const type = typeSelect?.value || "";
    const sort = sortSelect?.value || "featured";

    let list = COUPONS.filter((c) => {
      const hay = `${c.store} ${c.headline} ${c.description} ${c.category} ${c.type}`.toLowerCase();
      const matchQ = !q || hay.includes(q);
      const matchCat = !cat || c.category === cat;
      const matchStore = !store || c.store === store;
      const matchType = !type || c.type === type;
      return matchQ && matchCat && matchStore && matchType;
    });

    if (sort === "ending") {
      list = [...list].sort((a, b) => a.expires.localeCompare(b.expires));
    } else if (sort === "store") {
      list = [...list].sort((a, b) => a.store.localeCompare(b.store));
    } else if (sort === "newest") {
      list = [...list].reverse();
    }

    const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (page > totalPages) page = totalPages;
    const start = (page - 1) * PAGE_SIZE;
    const slice = list.slice(start, start + PAGE_SIZE);

    if (!list.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      pager.innerHTML = "";
      return;
    }

    empty.hidden = true;
    grid.innerHTML = slice.map(couponCardHTML).join("");
    pager.innerHTML = Array.from({ length: totalPages }, (_, i) => {
      const n = i + 1;
      return `<button type="button" class="${n === page ? "is-active" : ""}" data-page="${n}" aria-label="Page ${n}" ${n === page ? 'aria-current="page"' : ""}>${n}</button>`;
    }).join("");
  };

  [searchInput, catSelect, storeSelect, typeSelect, sortSelect].forEach((el) => {
    el?.addEventListener("input", () => {
      page = 1;
      apply();
    });
    el?.addEventListener("change", () => {
      page = 1;
      apply();
    });
  });

  pager.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn) return;
    page = Number(btn.dataset.page);
    apply();
    qs("#coupons-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  apply();
}

function renderStoresPage() {
  const grid = qs("[data-store-grid]");
  if (!grid) return;
  const search = qs("#store-search");
  const alpha = qs("[data-alpha]");
  const empty = qs("[data-empty]");
  let letter = "ALL";

  alpha.innerHTML =
    `<button type="button" class="is-active" data-letter="ALL" aria-pressed="true">All</button>` +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .map((l) => `<button type="button" data-letter="${l}" aria-pressed="false">${l}</button>`)
      .join("");

  const apply = () => {
    const q = (search.value || "").trim().toLowerCase();
    const list = STORES.filter((s) => {
      const matchQ = !q || s.name.toLowerCase().includes(q);
      const matchL = letter === "ALL" || s.name[0].toUpperCase() === letter;
      return matchQ && matchL;
    });
    if (!list.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    grid.innerHTML = list.map(storeCardHTML).join("");
  };

  search.addEventListener("input", apply);
  alpha.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-letter]");
    if (!btn) return;
    letter = btn.dataset.letter;
    qsa("[data-letter]", alpha).forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-pressed", String(b === btn));
    });
    apply();
  });

  apply();
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupHeaderSearch();
  setupNewsletter();
  setupBackToTop();
  setupSubmitModal();
  setupModalShell();
  setupCopyCode();
  setupCouponActions(document);
  renderHome();
  renderCouponsPage();
  renderStoresPage();
});
