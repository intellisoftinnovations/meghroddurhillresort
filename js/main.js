/* =========================================================
   Megh Roddur Hill Resort – main script
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------- Slides ----------
     TO ADD / CHANGE PHOTOS: set `img` to an image path (e.g. "images/new.jpg").
     If `img` is empty, a generated hill illustration (palette `p`) is used instead. */
  const S = [
    { t: "Megh Roddur Hill Resort", e: "Sajek Valley · Rangamati", d: "The signature view of the property among the hills.", c: "Explore the resort", h: "#about", img: "images/mainlook.jpg", cat: "hills", p: ["#2b5a73", "#e9c892", "#1d4a3b", "#2c6a54", "#13362c"] },
    { t: "Wake Above the Clouds", e: "Sajek landscape", d: "Mist rolling through the Sajek hills at first light.", c: "Discover Sajek", h: "#experience", img: "images/cloude.jpg", cat: "hills", p: ["#6f95a8", "#dfe9ec", "#33695a", "#4a8570", "#1e4a3d"] },
    { t: "A Balcony in the Hills", e: "The stay", d: "Wake to open hill views from a private balcony (to be verified).", c: "Explore the stay", h: "#stay", img: "images/balcony.jpg", cat: "hills", p: ["#4c7d92", "#cfe0df", "#2a5c4c", "#3d7660", "#183f33"] },
    { t: "Golden Hour in Sajek", e: "Sunrise & sunset", d: "Warm light settling over the ridgeline.", c: "Plan your visit", h: "#location", img: "images/goldenday.jpg", cat: "hills", p: ["#a45d3c", "#f3b565", "#3a5a45", "#2f5946", "#16352b"] },
    { t: "The Quiet of the Hills", e: "Around the resort", d: "A wide, calm landscape to slow down in.", c: "Get in touch", h: "#contact", img: "images/quiethill.jpg", cat: "hills", p: ["#3a647a", "#b6cdd2", "#27564a", "#366d59", "#143329"] }
  ];

  /* ---------- Room views ---------- */
  const R = [
    {
      t: "Cottage Room · Balcony View",
      e: "Balcony & Mist View",
      d: "Traditional warm timber cottage room opening directly onto a sunlit wooden balcony above the Sajek clouds.",
      img: "images/room-balcony.jpg",
      cat: "rooms",
      tags: ["Private balcony", "Timber interior", "Double bed"]
    },
    {
      t: "Wooden Room · Hill & Foliage View",
      e: "Garden & Balcony View",
      d: "Cozy wood-panelled room with large windows framing lush hillside greenery, seating corner and balcony access.",
      img: "images/room-garden.jpg",
      cat: "rooms",
      tags: ["Hillside greenery", "Balcony access", "Seating area"]
    },
    {
      t: "Panorama Room · Valley View",
      e: "Valley & Sunset View",
      d: "Spacious wooden bedroom with wide sliding glass doors looking out over the Sajek mountain ridgeline at dusk.",
      img: "images/room-hillview.jpg",
      cat: "rooms",
      tags: ["Panoramic glass door", "Lounge chair", "Valley view"]
    }
  ];

  /* Combined gallery (5 resort/hill views + 3 room views = 8 photos) */
  const G = [...S, ...R];

  const $ = (id) => document.getElementById(id);
  const n = S.length, gn = G.length;
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = matchMedia("(min-width: 960px)");

  /* Fallback illustration as a data: URI */
  function artUri(i) {
    const q = (G[i] && G[i].p) || S[0].p;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${q[0]}"/><stop offset="1" stop-color="${q[1]}"/></linearGradient></defs><rect width="1600" height="900" fill="url(#g)"/><circle cx="${1000 + i * 90}" cy="${300 - i * 8}" r="70" fill="#fff" opacity=".55"/><path d="M0 520Q250 380 520 470T1040 440T1600 500V900H0Z" fill="${q[2]}"/><ellipse cx="500" cy="540" rx="620" ry="48" fill="#fff" opacity=".35"/><path d="M0 640Q300 520 640 610T1240 580T1600 640V900H0Z" fill="${q[3]}"/><ellipse cx="1100" cy="650" rx="640" ry="44" fill="#fff" opacity=".3"/><path d="M0 760Q400 690 800 750T1600 730V900H0Z" fill="${q[4]}"/></svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }
  const srcOf = (i) => G[i].img || artUri(i);
  const bgOf = (i) => `url("${srcOf(i)}")`;
  const attrBg = (i) => bgOf(i).replace(/"/g, "&quot;");

  /* ---------- Build rail, rooms, gallery and section images ---------- */
  $("rail").innerHTML = S.map((s, i) =>
    `<div class="card"><button type="button" class="pick" style="background-image:${attrBg(i)}" aria-label="Show slide ${i + 1}: ${s.t}"><span>${s.t}</span></button><button type="button" class="pv" aria-label="View larger: ${s.t}">⤢</button></div>`
  ).join("");

  if ($("rooms")) {
    $("rooms").innerHTML = R.map((r, idx) => {
      const gi = n + idx;
      return `<article class="rcard">
        <button type="button" class="rimg" data-gi="${gi}" aria-label="View full photo: ${r.t}">
          <span class="rimg-bg" style="background-image:${attrBg(gi)}"></span>
          <span class="rbadge glass">${r.e}</span>
          <span class="rzoom glass" aria-hidden="true">⤢</span>
        </button>
        <div class="rbody">
          <h3>${r.t}</h3>
          <p>${r.d}</p>
          <div class="rtags">${r.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          <div class="rfoot">
            <small>Rates on inquiry</small>
            <a class="btn" href="#contact" data-room="${r.t}">Inquire</a>
          </div>
        </div>
      </article>`;
    }).join("");

    $("rooms").querySelectorAll(".rimg").forEach((btn) => {
      btn.addEventListener("click", () => openLb(+btn.dataset.gi, btn));
    });
    $("rooms").querySelectorAll("[data-room]").forEach((link) => {
      link.addEventListener("click", () => {
        const sel = $("r");
        if (sel) sel.value = link.dataset.room;
      });
    });
  }

  function renderGal(cat) {
    const gal = $("gal");
    const items = G.map((g, idx) => ({ g, idx })).filter((x) => cat === "all" || x.g.cat === cat);
    gal.className = "gal" + (items.length % 2 === 1 ? " odd" : "") + (cat === "rooms" ? " cat-rooms" : "");
    gal.innerHTML = items.map(({ g, idx }) =>
      `<button type="button" data-gi="${idx}" style="background-image:${attrBg(idx)}" aria-label="Open image: ${g.t}"><span><em>${g.cat === "rooms" ? "Room view" : "Resort & hills"}</em>${g.t}</span></button>`
    ).join("");
    [...gal.children].forEach((b) => b.addEventListener("click", () => openLb(+b.dataset.gi, b)));
  }
  renderGal("all");

  if ($("gtabs")) {
    $("gtabs").addEventListener("click", (e) => {
      const btn = e.target.closest(".gtab");
      if (!btn) return;
      $("gtabs").querySelectorAll(".gtab").forEach((t) => {
        const on = t === btn;
        t.classList.toggle("on", on);
        t.setAttribute("aria-selected", String(on));
      });
      renderGal(btn.dataset.cat);
    });
  }

  document.querySelectorAll(".pic").forEach((el) => {
    el.style.backgroundImage = bgOf(+el.dataset.i);
  });

  const cards = [...document.querySelectorAll(".card")];
  cards.forEach((c, i) => {
    c.querySelector(".pick").addEventListener("click", () => go(i));
    c.querySelector(".pv").addEventListener("click", (e) => openLb(i, e.currentTarget));
  });

  /* ---------- Hero carousel ---------- */
  let cur = 0, pending = 0;
  const rail = $("rail");
  const hero = $("home");

  // Create one dedicated background layer per slide so mid-transition clicks never overwrite an active layer
  const existingBgs = [...hero.querySelectorAll(".bg")];
  existingBgs.forEach((el) => el.remove());
  const bgs = S.map((s, i) => {
    const d = document.createElement("div");
    d.className = "bg" + (i === 0 ? " on" : "");
    d.style.backgroundImage = bgOf(i);
    hero.insertBefore(d, hero.firstChild);
    if (s.img) {
      const im = new Image();
      im.decoding = "async";
      im.src = s.img;
    }
    return d;
  });

  function centerRail(i, smooth) {
    if (desktop.matches) {
      rail.scrollLeft = 0;
      return;
    }
    const shortPhone = innerHeight <= 720;
    const baseW = shortPhone ? 108 : 132;
    const activeW = shortPhone ? 140 : 176;
    const gap = 14, pad = 14;
    const totalW = pad * 2 + (n - 1) * (baseW + gap) + activeW;
    const maxScroll = Math.max(0, totalW - rail.clientWidth);
    const target = Math.max(0, Math.min(maxScroll, pad + i * (baseW + gap) - (rail.clientWidth - activeW) / 2));

    rail.scrollTo({
      left: target,
      behavior: smooth && !rm ? "smooth" : "auto"
    });
  }

  function setCopy(s, animate) {
    $("eb").textContent = s.e;
    $("hl").textContent = s.t;
    $("ds").textContent = s.d;
    $("cta").textContent = s.c;
    $("cta").href = s.h;

    const cp = $("copy");
    cp.classList.remove("out");
    if (!animate) return;
    cp.querySelectorAll(":scope > *").forEach((el) => {
      el.style.animation = "none";
      void el.offsetHeight; // restart entry animation
      el.style.animation = "";
    });
  }

  function go(i, first) {
    i = (i + n) % n;
    if (!first && i === cur) return;
    clearTimeout(pending);
    const s = S[i];
    cur = i;

    // 1. Immediately crossfade dedicated background layer, update active card, progress & counter
    bgs.forEach((b, k) => b.classList.toggle("on", k === i));

    $("ct").textContent = String(i + 1).padStart(2, "0") + " / " + String(n).padStart(2, "0");
    $("pg").style.transform = `scaleX(${(i + 1) / n})`;

    cards.forEach((c, k) => {
      c.classList.toggle("on", k === i);
      c.querySelector(".pick").setAttribute("aria-current", k === i ? "true" : "false");
    });

    centerRail(i, !first);

    // 2. Smoothly transition text in parallel
    if (first || rm) {
      setCopy(s, !rm);
      return;
    }
    $("copy").classList.add("out");
    pending = setTimeout(() => {
      pending = 0;
      setCopy(s, true);
    }, 140);
  }

  $("pv").addEventListener("click", () => go(cur - 1));
  $("nx").addEventListener("click", () => go(cur + 1));
  addEventListener("resize", () => centerRail(cur, false), { passive: true });
  go(0, true);

  /* Swipe on the hero (ignored when it starts on the thumbnail rail) */
  function swipe(el, onSwipe, ignoreSel) {
    let sx = 0, sy = 0, active = false;
    el.addEventListener("touchstart", (e) => {
      active = !(ignoreSel && e.target.closest(ignoreSel));
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (!active) return;
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) onSwipe(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
  swipe(hero, (k) => go(cur + k), ".rail");

  let heroVisible = true;
  new IntersectionObserver((es) => { heroVisible = es[es.length - 1].isIntersecting; }, { threshold: 0.3 }).observe(hero);

  /* ---------- Lightbox ---------- */
  const lb = $("lb"), lbImg = $("lbi");
  let lbi = 0, opener = null;

  function showLb(i, animate) {
    lbi = (i + gn) % gn;
    const s = G[lbi];
    if (animate && !rm) {
      lbImg.classList.remove("swap");
      void lbImg.offsetWidth;
      lbImg.classList.add("swap");
    }
    lbImg.src = srcOf(lbi);
    lbImg.alt = s.t + (s.img ? "" : " (illustration)");
    $("lbc").textContent = s.t + " – " + (lbi + 1) + " of " + gn;
    // preload neighbours
    [lbi + 1, lbi - 1].forEach((k) => { const m = G[(k + gn) % gn].img; if (m) { const im = new Image(); im.src = m; } });
  }

  function openLb(i, from) {
    opener = from || document.activeElement;
    showLb(i, false);
    lb.classList.add("open");
    document.documentElement.classList.add("lock");
    $("lx").focus();
  }

  function closeLb() {
    if (!lb.classList.contains("open")) return;
    lb.classList.remove("open");
    lbImg.classList.remove("swap");
    document.documentElement.classList.remove("lock");
    if (opener && opener.focus) opener.focus();
  }

  $("lx").addEventListener("click", closeLb);
  $("lp").addEventListener("click", () => showLb(lbi - 1, true));
  $("ln").addEventListener("click", () => showLb(lbi + 1, true));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  swipe(lb, (k) => showLb(lbi + k, true));

  /* ---------- Mobile menu ---------- */
  const mnav = $("mnav"), mb = $("mb"), hd = $("hd");

  function setMenu(open) {
    mnav.classList.toggle("open", open);
    hd.classList.toggle("menu-open", open);
    mb.setAttribute("aria-expanded", String(open));
    mb.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mb.textContent = open ? "✕" : "☰";
    updateBar();
  }
  const menuOpen = () => mnav.classList.contains("open");

  mb.addEventListener("click", () => setMenu(!menuOpen()));
  mnav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", (e) => {
    if (menuOpen() && !mnav.contains(e.target) && !mb.contains(e.target)) setMenu(false);
  });
  desktop.addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", (e) => {
    const lbOpen = lb.classList.contains("open");

    if (e.key === "Escape") {
      if (lbOpen) closeLb();
      if (menuOpen()) { setMenu(false); mb.focus(); }
      return;
    }

    // keep focus inside the lightbox
    if (lbOpen && e.key === "Tab") {
      const f = [...lb.querySelectorAll("button")];
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!lb.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      return;
    }

    if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const k = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!k) return;
    if (lbOpen) showLb(lbi + k, true);
    else if (heroVisible) go(cur + k);
  });

  /* ---------- Header, sticky bar, active link, reveal ---------- */
  const mbar = $("mbar");
  let formFocus = false;

  function updateBar() {
    if (!mbar) return;
    const show = !desktop.matches && scrollY > innerHeight * 0.6 && !formFocus && !menuOpen();
    mbar.classList.toggle("show", show);
  }

  function onScroll() {
    hd.classList.toggle("solid", scrollY > 40);
    updateBar();
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", updateBar, { passive: true });
  onScroll();

  const links = [...document.querySelectorAll("nav a")];
  const so = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach((s) => so.observe(s));

  const ro = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach((el) => ro.observe(el));

  /* ---------- Inquiry form ---------- */
  const form = $("f");
  const fields = ["n", "p", "a", "d", "g"];

  // local date (not UTC) as YYYY-MM-DD
  function ymd(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  function nextDay(str) {
    const [y, m, d] = str.split("-").map(Number);
    return ymd(new Date(y, m - 1, d + 1));
  }

  const today = ymd(new Date());
  $("a").min = today;
  $("d").min = nextDay(today);
  $("a").addEventListener("change", () => {
    const a = $("a").value;
    $("d").min = a ? nextDay(a) : nextDay(today);
  });

  function clearErr(k) {
    $(k).removeAttribute("aria-invalid");
    $(k).removeAttribute("aria-describedby");
    $("e" + k).textContent = "";
  }
  function fail(k, msg) {
    $(k).setAttribute("aria-invalid", "true");
    $(k).setAttribute("aria-describedby", "e" + k);
    $("e" + k).textContent = msg;
    return 1;
  }
  fields.forEach((k) => {
    $(k).addEventListener("input", () => clearErr(k));
    $(k).addEventListener("change", () => clearErr(k));
  });

  // hide the sticky bar while typing (on-screen keyboard)
  form.addEventListener("focusin", () => { formFocus = true; updateBar(); });
  form.addEventListener("focusout", () => { formFocus = false; setTimeout(updateBar, 100); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fields.forEach(clearErr);
    const v = (k) => $(k).value.trim();
    let bad = 0;

    if (!v("n")) bad += fail("n", "Please enter your full name.");
    if (!/^[+()\d\s-]{7,20}$/.test(v("p"))) bad += fail("p", "Please enter a valid phone number.");
    if (!v("a")) bad += fail("a", "Please choose an arrival date.");
    else if (v("a") < today) bad += fail("a", "Arrival date cannot be in the past.");
    if (!v("d")) bad += fail("d", "Please choose a departure date.");
    else if (v("a") && v("d") <= v("a")) bad += fail("d", "Departure must be after arrival.");
    if (!(+v("g") >= 1)) bad += fail("g", "Guests must be at least 1.");

    if (bad) {
      const firstBad = form.querySelector("[aria-invalid=true]");
      firstBad.focus();
      firstBad.scrollIntoView({ block: "center", behavior: rm ? "auto" : "smooth" });
      return;
    }

    const msg = `Booking inquiry – Megh Roddur Hill Resort\nName: ${v("n")}\nPhone: ${v("p")}\nArrival: ${v("a")}\nDeparture: ${v("d")}\nGuests: ${v("g")}\nRoom: ${$("r").value}\nMessage: ${v("m") || "-"}`;
    $("wa").href = "https://wa.me/8801511670068?text=" + encodeURIComponent(msg);
    const ok = $("ok");
    ok.classList.add("show");
    ok.focus();
    ok.scrollIntoView({ block: "center", behavior: rm ? "auto" : "smooth" });
  });
})();

