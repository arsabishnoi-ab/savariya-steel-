/* Set phone to the firm's 10-digit mobile when it is known. Do not guess. */
var FIRM = {
  phone: ""
};

var PRODUCTS = [
  { name: "LPG cylinders", line: "Piped cylinders with a meter", category: "Gas Pipelines", image: "assets/images/gas-lpg-cylinders.jpg" },
  { name: "Kitchen LPG cylinder", line: "Cylinder and hose in a cabinet", category: "Gas Pipelines", image: "assets/images/gas-kitchen-cylinder.jpg" },
  { name: "LPG regulator", line: "Red regulator on the rubber hose", category: "Gas Pipelines", image: "assets/images/gas-lpg-regulator.jpg" },
  { name: "LPG hose", line: "Orange hose and brass fitting", category: "Gas Pipelines", image: "assets/images/gas-lpg-hose.jpg" },
  { name: "Pipe joint", line: "Copper joint heated for the seal", category: "Gas Pipelines", image: "assets/images/gas-pipe-joint.jpg" },
  { name: "Pipe brazing", line: "Copper line joined on the bench", category: "Gas Pipelines", image: "assets/images/gas-pipe-brazing.jpg" },
  { name: "Kitchen gas stove", line: "Four-burner hob on the counter", category: "Gas Pipelines", image: "assets/images/gas-kitchen-stove.jpg" },
  { name: "Stacked glass balconies", line: "Clear glass on three floors", category: "All", image: "assets/images/stacked-glass-balconies.jpg" },
  { name: "Triangle skylight", line: "Framed glass on the terrace", category: "All", image: "assets/images/triangle-skylight.jpg" },
  { name: "Glass balcony fronts", line: "Clear panels on a white block", category: "All", image: "assets/images/glass-balcony-fronts.jpg" },
  { name: "Grey-frame glass balconies", line: "Clear glass on three floors", category: "All", image: "assets/images/grey-frame-balconies.jpg" },
  { name: "Circle-pattern terrace", line: "Printed glass around the terrace", category: "All", image: "assets/images/circle-pattern-terrace.jpg" },
  { name: "Vertical bar balcony", line: "Stainless flats and a pipe rail", category: "All", image: "assets/images/vertical-bar-balcony.jpg" },
  { name: "Block glass balconies", line: "Clear glass with a white channel", category: "All", image: "assets/images/block-glass-balconies.jpg" },
  { name: "Pattern-glass stair", line: "Printed glass beside a steel grille", category: "All", image: "assets/images/pattern-glass-stair.jpg" },
  { name: "Corner house railing", line: "Glass balconies and a louvre gate", category: "All", image: "assets/images/corner-house-railing.jpg" },
  { name: "House glass balcony", line: "Clear glass above a louvre gate", category: "All", image: "assets/images/house-glass-balcony.jpg" },
  { name: "Compound main gate", line: "Wood panels with laser-cut steel", category: "Gates", image: "assets/images/compound-main-gate.jpg" },
  { name: "Louvre main gate", line: "Wood panels and a top ventilator", category: "Gates", image: "assets/images/louvre-main-gate.jpg" },
  { name: "Floral laser gate", line: "Wicket door and a louvre top", category: "Gates", image: "assets/images/floral-laser-gate.jpg" },
  { name: "Geometric band gate", line: "Wood leaves and a laser-cut band", category: "Gates", image: "assets/images/geometric-band-gate.jpg" },
  { name: "Mirror-base main gate", line: "Wood panels and a laser-cut band", category: "Gates", image: "assets/images/mirror-base-gate.jpg" },
  { name: "Floral side-panel gate", line: "Grooved panels and cut-out flowers", category: "Gates", image: "assets/images/floral-side-panel-gate.jpg" },
  { name: "Star-cut double gate", line: "Wood panels and long steel handles", category: "Gates", image: "assets/images/star-cut-double-gate.jpg" },
  { name: "Floating wood staircase", line: "Glass side with a stainless handrail", category: "Glass Railings", image: "assets/images/floating-wood-stair.jpg" },
  { name: "Open-riser wood stair", line: "Glass panel beside the treads", category: "Glass Railings", image: "assets/images/open-riser-wood-stair.jpg" },
  { name: "Site staircase railing", line: "Three-line stainless pipe", category: "SS Railings", image: "assets/images/site-stair-three-line.jpg" },
  { name: "Frosted glass staircase", line: "Horizontal bands and a stainless handrail", category: "Glass Railings", image: "assets/images/frosted-glass-stair.jpg" },
  { name: "Wood panel staircase", line: "Four stainless lines and a ball newel", category: "SS Railings", image: "assets/images/wood-panel-stair.jpg" },
  { name: "Outdoor stone staircase", line: "Stainless rail on black stone", category: "SS Railings", image: "assets/images/outdoor-stone-stair.jpg" },
  { name: "Apartment glass balcony", line: "Clear glass on the front elevation", category: "Glass Railings", image: "assets/images/apartment-glass-balcony.jpg" },
  { name: "Clear glass staircase", line: "Stainless handrail on marble steps", category: "Glass Railings", image: "assets/images/clear-glass-marble-stair.jpg" },
  { name: "Corner glass landing", line: "Stainless channel on the turn", category: "Glass Railings", image: "assets/images/corner-glass-landing.jpg" },
  { name: "Granite staircase railing", line: "Five-line stainless pipe", category: "SS Railings", image: "assets/images/granite-five-line-stair.jpg" },
  { name: "Switchback pipe railing", line: "Stainless rails on both flights", category: "SS Railings", image: "assets/images/switchback-pipe-stair.jpg" },
  { name: "Wood and tinted glass stair", line: "Wooden handrail on tinted panels", category: "Glass Railings", image: "assets/images/wood-tinted-glass-stair.jpg" },
  { name: "Ball-newel staircase", line: "Diagonal stainless rods", category: "SS Railings", image: "assets/images/ball-newel-stair.jpg" },
  { name: "Teak handrail staircase", line: "Clear glass and granite treads", category: "Glass Railings", image: "assets/images/teak-handrail-stair.jpg" },
  { name: "Flat-bar staircase", line: "Brushed stainless bars", category: "SS Railings", image: "assets/images/flat-bar-stair.jpg" },
  { name: "Curved wood handrail", line: "Glass railing on a floating stair", category: "Glass Railings", image: "assets/images/curved-wood-handrail.jpg" },
  { name: "Three-line granite stair", line: "Square stainless posts", category: "SS Railings", image: "assets/images/three-line-granite-stair.jpg" },
  { name: "Entrance staircase railing", line: "Outdoor stainless pipe", category: "SS Railings", image: "assets/images/entrance-stair-railing.jpg" },
  { name: "Black marble staircase", line: "Wood handrail and clear glass", category: "Glass Railings", image: "assets/images/black-marble-stair.jpg" },
  { name: "Mid-height glass railing", line: "Glass panels under a stainless handrail", category: "Glass Railings", image: "assets/images/mid-glass-stair.jpg" },
  { name: "Looped baluster staircase", line: "Bent stainless balusters", category: "SS Railings", image: "assets/images/looped-baluster-stair.jpg" },
  { name: "Ball-fitting staircase", line: "Three stainless rods", category: "SS Railings", image: "assets/images/ball-fitting-stair.jpg" },
  { name: "Etched glass staircase", line: "Floral glass and a wood newel", category: "Glass Railings", image: "assets/images/etched-glass-stair.jpg" }
];

function initLogo() {
  document.querySelectorAll(".logo img, .footer-logo img").forEach(function (img) {
    img.addEventListener("error", function () {
      img.hidden = true;
    });
  });
}

function initStats() {
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  if (!nodes.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function run(node) {
    var target = Number(node.getAttribute("data-count")) || 0;
    if (reduce) {
      node.textContent = String(target);
      return;
    }
    var start = 0;
    var duration = 1400;
    function tick(now) {
      if (!start) start = now;
      var progress = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = String(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(run);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      run(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  nodes.forEach(function (node) {
    observer.observe(node);
  });
}

function initHeader() {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    document.body.style.overflow = open ? "hidden" : "";
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });
}

function initPhone() {
  var digits = String(FIRM.phone || "").replace(/\D/g, "");
  if (!digits) return;
  var local = digits.length > 10 ? digits.slice(-10) : digits;
  var pretty = "+91 " + local;
  var tel = "+91" + local;
  var wa = "https://wa.me/91" + local;

  document.querySelectorAll("[data-phone]").forEach(function (node) {
    node.hidden = false;
    var link = node.tagName === "A" ? node : node.querySelector("a");
    if (link) link.href = "tel:" + tel;
    var label = node.querySelector("[data-phone-text]");
    if (label) label.textContent = pretty;
  });

  var floatBtn = document.querySelector("[data-whatsapp]");
  if (floatBtn) {
    floatBtn.hidden = false;
    floatBtn.href = wa;
  }

  document.querySelectorAll("[data-whatsapp-link]").forEach(function (node) {
    node.hidden = false;
    var link = node.tagName === "A" ? node : node.querySelector("a");
    if (link) link.href = wa;
  });
}

function initHero() {
  var slides = Array.prototype.slice.call(document.querySelectorAll("[data-slide]"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("[data-dot]"));
  var index = 0;
  var timer;

  slides.forEach(function (slide) {
    var src = slide.getAttribute("data-image");
    if (!src) return;
    var probe = new Image();
    probe.onload = function () {
      slide.style.backgroundImage = 'url("' + src + '")';
    };
    probe.src = src;
  });

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === index);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === index);
      dot.setAttribute("aria-current", i === index ? "true" : "false");
    });
  }

  function start() {
    stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = window.setInterval(function () {
      show(index + 1);
    }, 6000);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
  }

  document.querySelector("[data-hero-prev]").addEventListener("click", function () {
    show(index - 1);
    start();
  });
  document.querySelector("[data-hero-next]").addEventListener("click", function () {
    show(index + 1);
    start();
  });
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      show(Number(dot.getAttribute("data-dot")));
      start();
    });
  });

  show(0);
  start();
}

function applyFilter(category) {
  document.querySelectorAll("[data-product]").forEach(function (card) {
    var match = category === "All" || card.getAttribute("data-category") === category;
    card.hidden = !match;
  });
  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.classList.toggle("is-active", button.getAttribute("data-filter") === category);
  });
}

function initProducts() {
  var grid = document.querySelector("[data-product-grid]");
  PRODUCTS.forEach(function (item) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "product-card";
    card.setAttribute("data-product", "");
    card.setAttribute("data-category", item.category);
    card.setAttribute("data-name", item.line ? item.name + " — " + item.line : item.name);
    card.setAttribute("data-image", item.image);
    card.innerHTML = "<span><strong></strong><em></em></span>";
    card.querySelector("strong").textContent = item.name;
    card.querySelector("em").textContent = item.line;
    if (!item.line) card.querySelector("em").hidden = true;
    var probe = new Image();
    probe.onload = function () {
      card.style.backgroundImage = 'url("' + item.image + '")';
    };
    probe.src = item.image;
    card.addEventListener("click", function () {
      openLightbox(card);
    });
    grid.appendChild(card);
  });

  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-filter"));
      if (button.closest("[data-nav]")) {
        var nav = document.querySelector("[data-nav]");
        var toggle = document.querySelector("[data-nav-toggle]");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.style.overflow = "";
        document.getElementById("products").scrollIntoView();
      }
    });
  });
}

function openLightbox(card) {
  var lightbox = document.querySelector("[data-lightbox]");
  var image = lightbox.querySelector("img");
  var caption = lightbox.querySelector("figcaption");
  var src = card.getAttribute("data-image");
  caption.textContent = card.getAttribute("data-name");
  image.hidden = true;
  image.removeAttribute("src");
  if (src && card.style.backgroundImage) {
    image.src = src;
    image.alt = card.getAttribute("data-name");
    image.hidden = false;
  }
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  var lightbox = document.querySelector("[data-lightbox]");
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function initLightbox() {
  var lightbox = document.querySelector("[data-lightbox]");
  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });
}

function starHtml(rating) {
  var html = "";
  for (var i = 1; i <= 5; i += 1) {
    if (rating >= i) html += '<i class="fa-solid fa-star"></i>';
    else if (rating >= i - 0.5) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

function initReviews() {
  var reviews = window.SAVARIYA_REVIEWS || [];
  var list = document.querySelector("[data-review-list]");
  var more = document.querySelector("[data-review-more]");
  var empty = document.querySelector("[data-review-empty]");
  var summary = document.querySelector("[data-review-summary]");
  var shown = 0;

  if (!reviews.length) {
    more.hidden = true;
    empty.hidden = false;
    return;
  }

  var total = reviews.reduce(function (sum, review) {
    return sum + Number(review.rating);
  }, 0);
  var average = total / reviews.length;
  summary.hidden = false;
  summary.querySelector("[data-review-average]").textContent = average.toFixed(1);
  summary.querySelector("[data-review-stars]").innerHTML = starHtml(average);
  summary.querySelector("[data-review-count]").textContent = String(reviews.length);
  paintReviewBars(reviews);
  empty.hidden = true;

  var colors = ["#1a73e8", "#ea4335", "#f9ab00", "#188038", "#9334e6", "#e67c73", "#00796b", "#c2185b"];

  function addBatch() {
    reviews.slice(shown, shown + 5).forEach(function (review) {
      var card = document.createElement("article");
      card.className = "card review-card";
      var initial = document.createElement("div");
      initial.className = "avatar";
      var letter = (review.name || "?").trim().charAt(0).toUpperCase();
      initial.textContent = letter;
      initial.style.background = colors[letter.charCodeAt(0) % colors.length];
      var top = document.createElement("div");
      top.className = "review-top";
      var who = document.createElement("div");
      var name = document.createElement("strong");
      name.textContent = review.name;
      var meta = document.createElement("p");
      meta.className = "review-meta";
      var stars = document.createElement("span");
      stars.className = "stars";
      stars.innerHTML = starHtml(Number(review.rating));
      var date = document.createElement("span");
      date.textContent = review.date || "";
      meta.appendChild(stars);
      meta.appendChild(date);
      who.appendChild(name);
      who.appendChild(meta);
      top.appendChild(initial);
      top.appendChild(who);
      var quote = document.createElement("blockquote");
      quote.textContent = review.quote;
      card.appendChild(top);
      card.appendChild(quote);
      list.appendChild(card);
    });
    shown += 5;
    if (shown > reviews.length) shown = reviews.length;
    more.hidden = shown >= reviews.length;
  }

  more.addEventListener("click", addBatch);
  addBatch();
}

function paintReviewBars(reviews) {
  var bars = document.querySelector("[data-review-bars]");
  if (!bars) return;
  var counts = [0, 0, 0, 0, 0, 0];
  reviews.forEach(function (review) {
    var star = Math.round(Number(review.rating));
    if (star >= 1 && star <= 5) counts[star] += 1;
  });
  bars.textContent = "";
  for (var star = 5; star >= 1; star -= 1) {
    var row = document.createElement("div");
    row.className = "google-bar";
    var label = document.createElement("span");
    label.textContent = String(star);
    var track = document.createElement("span");
    track.className = "track";
    var fill = document.createElement("span");
    fill.className = "fill";
    fill.style.width = (counts[star] / reviews.length) * 100 + "%";
    track.appendChild(fill);
    var count = document.createElement("span");
    count.textContent = String(counts[star]);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(count);
    bars.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initLogo();
  initStats();
  initHeader();
  initPhone();
  initHero();
  initProducts();
  initLightbox();
  initReviews();
});
