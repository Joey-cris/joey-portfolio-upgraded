/* ---------- Icons (Lucide paths, inline so no library is needed) ---------- */
const ICONS = {
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-2.93 1.41-1.41m11.32-11.32 1.41-1.41M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
};
const icon = (name, size = 16) =>
  `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
function hydrateIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => { el.outerHTML = icon(el.dataset.icon, +el.dataset.size || 16); });
}

/* ---------- Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chips = (items, cls = "") => items.map((s) => `<span class="chip ${cls}">${esc(s)}</span>`).join("");
const nice = (file) => String(file || "").replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
const root = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;

/* Image with skeleton + fade-in. g = lightbox group; zoom:false = not clickable. */
function pic({ src, hint, ratio = "4/3", alt = "", title = "", round = false, g = "all", zoom = true }) {
  const style = `${ratio ? `aspect-ratio:${ratio};` : ""}${round ? "border-radius:50%;" : ""}`;
  if (!src) return `<div class="ph" style="${style}">${icon("plus", 18)}<small>${esc(hint)}</small></div>`;
  const z = zoom ? ` data-lb="${src}" data-g="${esc(g)}" data-title="${esc(title || alt)}" tabindex="0" role="button"` : "";
  return `<img class="pic" style="${style}" src="${src}" alt="${esc(alt)}"${z} loading="lazy" decoding="async" onload="this.classList.add('ok')" onerror="this.classList.add('ok')" />`;
}

/* ---------- Data ---------- */
const profile = list("profile")[0]?.url;
const photos = list("photos");
const intern = list("internship");
const agri = list("agriculture");
const work = list("work").map((w) => ({ ...w, cat: WORK_CATS[w.file.split("-")[0].toLowerCase()] || "IT" }));

/* ---------- Static bindings (links hide themselves when empty) ---------- */
const realSocial = (u) => u && !/^https?:\/\/(www\.)?(github|linkedin)\.com\/?$/i.test(u);
$$("[data-bind]").forEach((a) => {
  const k = a.dataset.bind, v = k === "mailto" ? "mailto:" + ME.email : ME[k];
  if (k === "github" || k === "linkedin" ? !realSocial(v) : !v) { a.hidden = true; return; }
  a.href = v;
});
/* CV button disappears (instead of 404ing) if the PDF isn't deployed */
if (ME.cv) fetch(ME.cv, { method: "HEAD" }).then((r) => {
  if (!r.ok) { $$('[data-bind="cv"]').forEach((a) => (a.hidden = true)); console.warn("CV not found at", ME.cv); }
}).catch(() => {});

if (ME.whyHire) { $("#whyHire").textContent = ME.whyHire; $("#whyHire").hidden = false; }
$("#stats").innerHTML = [["2 yrs", "Photojournalism"], ["2", "Internships"], [CERTS.length, "Certificates"], ["2026", "BSIT Graduate"]]
  .map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join("");
$("#heroPortrait").innerHTML = profile
  ? `<img class="portrait" src="${profile}" alt="Portrait of ${esc(ME.name)}" />`
  : `<div class="portrait ph big"><span>${ME.initials}</span><small>Put profile.jpg in src/assets/profile/</small></div>`;
$("#marquee").innerHTML = [...TECH, ...TECH].map((t) => `<span>${esc(t)}</span>`).join("");
$("#aboutPic").innerHTML = pic({ src: profile, hint: "src/assets/profile/profile.jpg", ratio: "1/1", alt: `Portrait of ${ME.name}`, title: ME.name, g: "profile" });
$("#aboutName").textContent = ME.name;
$("#aboutLoc").textContent = ME.location;
$("#cEmail").innerHTML = `<a href="mailto:${esc(ME.email)}">${esc(ME.email)}</a>`;
$("#cPhone").innerHTML = `<a href="tel:+63${esc(ME.phone.replace(/\D/g, "").replace(/^0/, ""))}">${esc(ME.phone)}</a>`;
$("#cLoc").textContent = ME.location;
$("#footer").innerHTML = `<div class="flinks">${realSocial(ME.github) ? `<a href="${esc(ME.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}${realSocial(ME.linkedin) ? `<a href="${esc(ME.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ""}<a href="mailto:${esc(ME.email)}">Email</a>${ME.cv ? `<a data-bind="cv" href="${esc(ME.cv)}" target="_blank" rel="noopener noreferrer">CV</a>` : ""}</div>© ${new Date().getFullYear()} ${esc(ME.name)} · Last updated ${esc(ME.updated || "")}`;

/* ---------- Hero facts + What I Do ---------- */
$("#facts").innerHTML = [["Looking for", ME.lookingFor], ["Based in", ME.location], ["Education", "BSIT · SLSU, 2026"], ["Status", ME.availability]]
  .filter((f) => f[1]).map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("");
$("#svgrid").innerHTML = SERVICES.map((s, i) => `
  <div class="rv" style="transition-delay:${i * 80}ms"><article class="card cb sv"><div class="ico">${icon(s.icon, 22)}</div><h3>${esc(s.title)}</h3><p class="mute">${esc(s.text)}</p><div class="chips">${chips(s.tags || [])}</div></article></div>`).join("");

/* ---------- Education ---------- */
$("#eduWrap").innerHTML = EDUCATION.map((e) => `
  <article class="card edc"><div class="ico">${icon("graduation", 24)}</div><div>
    <span class="eyebrow">${esc(e.year)}</span><h3>${esc(e.degree)}</h3>
    <p class="org">${esc(e.school)}${e.campus ? ` · ${esc(e.campus)}` : ""}</p>
    ${e.honors?.length ? `<ul>${e.honors.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
  </div></article>`).join("");

/* ---------- Skills ---------- */
$("#skgrid").innerHTML = SKILLS.map((s, i) =>
  `<div class="rv" style="transition-delay:${(i % 3) * 100}ms"><div class="card cb sk"><h3>${esc(s.t)}</h3><div class="chips">${chips(s.items, s.c)}</div></div></div>`).join("");

/* ---------- Projects (+ detail modal) ---------- */
const liveBtn = (p) => (p.link ? `<a class="btn sm" href="${esc(p.link)}" target="_blank" rel="noreferrer">Live Demo ${icon("arrowUpRight", 14)}</a>` : "");
const codeBtn = (p) => (p.gh ? `<a class="btn sm ghost" href="${esc(p.gh)}" target="_blank" rel="noreferrer">${icon("github", 14)}Code</a>` : "");
$("#pgrid").innerHTML = PROJECTS.map((p, i) => `
  <div class="rv" style="transition-delay:${i * 90}ms">
    <article class="card proj">
      <div class="pimg" data-pj="${i}">${pic({ src: find("projects", p.img), hint: `src/assets/projects/${p.img}.png`, ratio: "16/10", alt: `Screenshot of ${p.title}`, title: p.title, zoom: false })}<span class="badge">${esc(p.cat)}</span></div>
      <div class="cb">
        <h3>${esc(p.title)}</h3><p class="mute">${esc(p.desc)}</p>
        <div class="chips">${chips(p.tech)}</div>
        <div class="row"><button class="btn sm" data-pj="${i}">View Project ${icon("arrowUpRight", 14)}</button>${liveBtn(p)}${codeBtn(p)}</div>
      </div>
    </article>
  </div>`).join("");

const md = $("#md"), mdBody = $("#mdBody");
function openProject(i) {
  const p = PROJECTS[i];
  const shots = [p.img, ...(p.shots || [])].map((b) => find("projects", b)).filter(Boolean);
  const rows = [["Role", p.role], ["Problem", p.problem], ["What I built", p.solution], ["Result", p.result]].filter((r) => r[1]);
  const alt = `${p.title} screenshot`;
  mdBody.innerHTML = `
    <span class="tag">${esc(p.cat)}</span><h3 id="mdTitle">${esc(p.title)}</h3>
    ${shots.length
      ? `<div class="mdshots">${pic({ src: shots[0], ratio: "16/10", alt, title: p.title, g: "shots" })}${shots.length > 1 ? `<div class="mdthumbs">${shots.slice(1).map((s) => pic({ src: s, ratio: "16/10", alt, title: p.title, g: "shots" })).join("")}</div>` : ""}</div>`
      : `<div class="ph" style="aspect-ratio:16/10">${icon("image", 18)}<small>No screenshots yet</small></div>`}
    <p class="mute mdd">${esc(p.desc)}</p>
    ${rows.length ? `<dl class="cs">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` : ""}
    <div class="chips">${chips(p.tech)}</div>
    ${p.link || p.gh ? `<div class="row">${liveBtn(p)}${codeBtn(p)}</div>` : ""}`;
  openD(md, $("#mdClose"));
}

/* ---------- Photojournalism ---------- */
const ctxBits = [PUBLICATION.name && `${PUBLICATION.role} for <b>${esc(PUBLICATION.name)}</b>.`, PUBLICATION.events?.length && `Covered: ${PUBLICATION.events.map(esc).join(", ")}.`].filter(Boolean);
$("#photoCtx").innerHTML = ctxBits.length ? `<p class="lead" style="margin-bottom:18px">${ctxBits.join(" ")}</p>` : "";
$("#photoChips").innerHTML = chips(["Event Coverage", "Photography", "Composition", "Visual Storytelling", "Photo Documentation", "Deadline Management"]);
const photoItems = photos.length ? photos : Array.from({ length: 6 }, (_, i) => ({ file: "", url: "", ratio: [3 / 4, 1, 4 / 3][i % 3] }));
const shot = (p, i, feat) => {
  const info = PHOTO_INFO[p.file], has = info && info.event;
  const label = has ? info.event : nice(p.file);
  return `<div class="rv" style="transition-delay:${(i % 3) * 80}ms"><figure class="shot${feat ? " feat" : ""}">
    ${pic({ src: p.url, hint: "src/assets/photos/", ratio: p.url ? "" : String(p.ratio), alt: has ? `${info.event}${info.place ? " at " + info.place : ""}` : `Photojournalism photo: ${label}`, title: label, g: "photos" })}
    ${has ? `<figcaption><b>${esc(info.event)}</b><span>${esc([info.date, info.place].filter(Boolean).join(" · "))}</span>${info.desc ? `<p>${esc(info.desc)}</p>` : ""}</figcaption>` : ""}
  </figure></div>`;
};
const useFeat = photos.length > 2;
$("#photoFeat").innerHTML = useFeat ? shot(photoItems[0], 0, true) : "";
$("#photoGrid").innerHTML = photoItems.slice(useFeat ? 1 : 0).map((p, i) => shot(p, i, false)).join("");

/* ---------- Experience galleries ---------- */
const mini = (arr, hint, g, label) => (arr.length ? arr : [{}, {}, {}]).map((x) => pic({ src: x.url, hint, alt: `${label} — ${nice(x.file)}`, title: label, g })).join("");
$("#internGrid").innerHTML = mini(intern, "src/assets/internship/", "intern", "Web Developer Internship");
$("#agriGrid").innerHTML = mini(agri, "src/assets/agriculture/", "agri", "Department of Agriculture, LGU-Malitbog");

/* ---------- Testimonials (removed when empty) ---------- */
if (TESTIMONIALS.length) {
  $("#tgrid").innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="rv" style="transition-delay:${i * 90}ms"><figure class="card tq"><blockquote>“${esc(t.quote)}”</blockquote><figcaption><b>${esc(t.name)}</b><span>${esc(t.role)}</span></figcaption></figure></div>`).join("");
} else { $("#testimonials").remove(); $('#nav a[data-id="testimonials"]').remove(); }

/* ---------- Certificates ---------- */
$("#cgrid").innerHTML = CERTS.map((c, i) => {
  const src = find("certificates", c.file);
  return `<div class="rv" style="transition-delay:${(i % 3) * 80}ms"><div class="card cert">
    ${pic({ src, hint: `src/assets/certificates/${c.file}.png`, alt: `Certificate: ${c.title}`, title: c.title, g: "certs" })}
    <div class="cb"><h3>${esc(c.title)}</h3><p class="mute">${esc(c.org)}</p><p class="date">${esc(c.date)}</p>
    ${src ? `<button class="link" data-lb="${src}" data-g="certs" data-title="${esc(c.title)}">View Certificate ${icon("arrowUpRight", 14)}</button>` : ""}</div>
  </div></div>`;
}).join("");

/* ---------- My Work (filterable) ---------- */
let filter = "All";
function renderWork() {
  $("#filters").innerHTML = ["All", ...Object.values(WORK_CATS)]
    .map((f) => `<button class="${filter === f ? "on" : ""}" data-f="${f}" aria-pressed="${filter === f}">${f}</button>`).join("");
  const shown = work.filter((w) => filter === "All" || w.cat === filter);
  $("#workWrap").innerHTML = work.length
    ? `<div class="masonry">${shown.map((w) => pic({ src: w.url, ratio: "", alt: `${w.cat} work: ${nice(w.file)}`, title: `${w.cat} · ${nice(w.file)}`, g: "work" })).join("")}</div>`
    : `<div class="ph wide">${icon("plus", 18)}<small>No work images yet — put them in src/assets/work/</small></div>`;
}
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-f]");
  if (b) { filter = b.dataset.f; renderWork(); $(`#filters [data-f="${filter}"]`)?.focus({ preventScroll: true }); }
});
renderWork();

/* ---------- Contact: copy email + validated form ---------- */
$("#copyEmail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(ME.email); }
  catch (e) { const t = document.createElement("textarea"); t.value = ME.email; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); } catch (_) {} t.remove(); }
  const b = $("#copyEmail"); b.innerHTML = `${icon("check", 14)}Copied`;
  setTimeout(() => (b.innerHTML = `${icon("copy", 14)}Copy`), 1800);
});

const form = $("#cform"), fStatus = $("#fStatus"), sendBtn = $("#send");
const sendLabel = `Send Message ${icon("arrowRight", 16)}`;
const setErr = (id, msg) => { $("#e" + id).textContent = msg || ""; $("#f" + id).setAttribute("aria-invalid", msg ? "true" : "false"); return !msg; };
const status = (kind, msg) => { fStatus.className = "fs " + kind; fStatus.textContent = msg; fStatus.hidden = false; };
["Name", "Email", "Text"].forEach((id) => $("#f" + id).addEventListener("input", () => setErr(id, "")));
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = $("#fName").value.trim(), email = $("#fEmail").value.trim(), text = $("#fText").value.trim();
  const ok = [
    setErr("Name", name.length < 2 ? "Please enter your name." : ""),
    setErr("Email", !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? "Please enter a valid email address." : ""),
    setErr("Text", text.length < 10 ? "Message should be at least 10 characters." : ""),
  ].every(Boolean);
  if (!ok) { status("bad", "Please fix the highlighted fields."); form.querySelector('[aria-invalid="true"]')?.focus(); return; }
  if (form.elements._gotcha.value) { status("ok", "Thanks! Your message was sent."); form.reset(); return; } // bot
  if (!ME.formEndpoint) {   // no form service set up yet → open the visitor's email app
    window.location.href = `mailto:${ME.email}?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${encodeURIComponent(`${text}\n\n— ${name} (${email})`)}`;
    status("ok", "Opening your email app…"); return;
  }
  sendBtn.disabled = true; sendBtn.textContent = "Sending…"; fStatus.hidden = true;
  try {
    const r = await fetch(ME.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
    if (!r.ok) throw new Error(r.status);
    form.reset(); status("ok", "Thanks! Your message was sent. I'll get back to you soon.");
  } catch (err) {
    status("bad", `Couldn't send right now. Please email me directly at ${ME.email}.`);
  } finally { sendBtn.disabled = false; sendBtn.innerHTML = sendLabel; }
});

/* ---------- Dialogs: focus management, scroll lock, focus trap ---------- */
const lb = $("#lb"), lbImg = $("#lbImg"), lbPrev = $("#lbPrev"), lbNext = $("#lbNext");
const openers = new Map();
function openD(el, focusEl) { openers.set(el, document.activeElement); el.hidden = false; root.classList.add("lock"); focusEl.focus({ preventScroll: true }); }
function closeD(el) {
  el.hidden = true;
  if (lb.hidden && md.hidden) root.classList.remove("lock");
  const o = openers.get(el); if (o && o.isConnected) o.focus({ preventScroll: true });
}
function trap(e, box) {
  if (e.key !== "Tab") return;
  const f = $$('button,a[href],input,textarea,[tabindex="0"]', box).filter((n) => !n.hidden && n.getClientRects().length);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* Lightbox: gallery per group, arrows, keyboard, swipe, counter */
let gal = [], gi = 0;
function showLb() {
  const it = gal[gi];
  lbImg.src = it.src; lbImg.alt = it.title || ""; $("#lbCap").textContent = it.title || "";
  $("#lbCount").textContent = gal.length > 1 ? `${gi + 1} / ${gal.length}` : "";
  lbPrev.hidden = lbNext.hidden = gal.length < 2;
  [1, -1].forEach((d) => { const n = gal[(gi + d + gal.length) % gal.length]; if (n && gal.length > 1) new Image().src = n.src; });
}
const stepLb = (d) => { if (gal.length > 1) { gi = (gi + d + gal.length) % gal.length; showLb(); } };
function openLb(el) {
  gal = $$(`[data-lb][data-g="${el.dataset.g}"]`)
    .filter((n, i, a) => a.findIndex((m) => m.dataset.lb === n.dataset.lb) === i)
    .map((n) => ({ src: n.dataset.lb, title: n.dataset.title }));
  gi = Math.max(0, gal.findIndex((x) => x.src === el.dataset.lb));
  showLb(); openD(lb, $("#lbClose"));
}
const closeLb = () => { closeD(lb); lbImg.removeAttribute("src"); };
lbPrev.addEventListener("click", () => stepLb(-1));
lbNext.addEventListener("click", () => stepLb(1));
$("#lbClose").addEventListener("click", closeLb);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
let tx = null;
lb.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1);
});
$("#mdClose").addEventListener("click", () => closeD(md));

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-lb]");
  if (t && !lb.contains(t)) return openLb(t);
  const pj = e.target.closest("[data-pj]");
  if (pj) return openProject(+pj.dataset.pj);
  if (e.target === md) closeD(md);
});
addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches?.("img[data-lb]")) { e.preventDefault(); return openLb(e.target); }
  if (!lb.hidden) {
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") stepLb(1);
    else if (e.key === "ArrowLeft") stepLb(-1);
    else trap(e, lb);
    return;
  }
  if (!md.hidden) { if (e.key === "Escape") closeD(md); else trap(e, md); }
});

/* ---------- Mobile sidebar ---------- */
const side = $("#side"), burger = $("#burger");
const setMenu = (open) => {
  side.classList.toggle("open", open);
  burger.innerHTML = icon(open ? "x" : "menu", 20);
  burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
burger.addEventListener("click", () => setMenu(!side.classList.contains("open")));
$("#nav").addEventListener("click", (e) => e.target.closest("a") && setMenu(false));

/* ---------- Hobbies (animated scenes) ---------- */
const SC = {
  chess: `<div class="s-chess"><span>♞</span></div>`,
  edit: `<div class="s-edit"><div class="trk"><i style="left:4%;width:36%"></i><i style="left:44%;width:50%"></i></div><div class="trk"><i style="left:12%;width:52%"></i><i style="left:68%;width:24%"></i></div><div class="trk"><i style="left:0;width:70%"></i></div><b></b></div>`,
  game: `<svg class="s-game" width="132" height="88" viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="8" y="16" width="104" height="48" rx="24"/><path d="M34 32v20M24 42h20" stroke-width="5"/><circle class="bt" style="--d:0s" cx="88" cy="32" r="4.5"/><circle class="bt" style="--d:.4s" cx="98" cy="42" r="4.5"/><circle class="bt" style="--d:.8s" cx="88" cy="52" r="4.5"/><circle class="bt" style="--d:1.2s" cx="78" cy="42" r="4.5"/></svg>`,
  pc: `<div class="s-term"><i style="--n:0;--w:55%"></i><i style="--n:1;--w:80%"></i><i style="--n:2;--w:40%"></i><i style="--n:3;--w:68%"></i><u></u></div>`,
  doc: `<svg width="104" height="104" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.5"><g class="reel"><circle cx="40" cy="40" r="34"/><circle cx="40" cy="40" r="5" fill="currentColor"/>${[0,72,144,216,288].map((a) => `<circle cx="40" cy="20" r="7" transform="rotate(${a} 40 40)"/>`).join("")}</g></svg>`,
  frame: `<div class="s-frame"></div>`,
};
$("#hgrid").innerHTML = HOBBIES.map((h, i) => `
  <div class="rv" style="transition-delay:${(i % 3) * 90}ms"><article class="card hb" tabindex="0">
    <div class="sc">${SC[h.scene]}</div>
    <div class="cb"><h3>${esc(h.title)}</h3><p class="mute">${esc(h.text)}</p></div>
  </article></div>`).join("");
const demo = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  demo.unobserve(e.target); e.target.classList.add("demo");
  setTimeout(() => e.target.classList.remove("demo"), 3600);
}), { threshold: 0.6 });
$$(".hb").forEach((el) => demo.observe(el));

/* ---------- Icons, reveal-on-scroll, active nav ---------- */
hydrateIcons();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } });
}, { threshold: 0.12 });
$$(".rv").forEach((el) => reveal.observe(el));

const links = $$("#nav a");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.dataset.id === e.target.id)); });
}, { rootMargin: "-45% 0px -50% 0px" });
links.forEach((a) => { const el = document.getElementById(a.dataset.id); el && spy.observe(el); });

/* ---------- Motion & UX ---------- */
/* Hero name: letters rise in once */
let k = 0;
const word = (w) => `<span class="w">${[...w].map((c) => `<span class="ch" style="--i:${k++}">${esc(c)}</span>`).join("")}</span>`;
const [first, ...rest] = ME.name.split(" ");
$("#heroName").setAttribute("aria-label", ME.name);
$("#heroName").innerHTML = `${word(first)} <em>${rest.map(word).join(" ")}</em>`;

/* Hero role typewriter */
const roles = ["BSIT Graduate", "Web Developer", "Photojournalist"], typed = $("#typed");
if (!reduced) {
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = roles[r]; c += del ? -1 : 1; typed.textContent = w.slice(0, c);
    let t = del ? 35 : 75;
    if (!del && c === w.length) { del = true; t = 1500; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; t = 300; }
    setTimeout(tick, t);
  })();
}

/* Stats count up */
const counter = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  counter.unobserve(e.target);
  const b = e.target.querySelector("b"), m = b.textContent.match(/^(\d+)(.*)$/);
  if (!m || +m[1] > 100 || reduced) return;
  const n = +m[1], t0 = performance.now();
  (function step(t) {
    const p = Math.min(1, (t - t0) / 900);
    b.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + m[2];
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}), { threshold: 0.6 });
$$("#stats > div").forEach((el) => counter.observe(el));

/* Scroll: progress bar, timeline, back-to-top, mobile Contact button */
const prog = $("#prog"), tl = $(".tl"), toTop = $("#toTop"), fab = $("#fab");
let contactIn = false;
new IntersectionObserver((es) => { contactIn = es[0].isIntersecting; onScroll(); }).observe($("#contact"));
function onScroll() {
  const d = document.documentElement;
  prog.style.transform = `scaleX(${scrollY / Math.max(1, d.scrollHeight - innerHeight)})`;
  const r = tl.getBoundingClientRect();
  tl.style.setProperty("--p", Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height)));
  toTop.classList.toggle("show", scrollY > 700);
  fab.classList.toggle("show", scrollY > 500 && !contactIn);
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));

/* 3D tilt on project and certificate cards */
const canHover = matchMedia("(hover:hover)").matches && !reduced;
if (canHover) {
  $$(".proj,.cert").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-6px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
  /* light magnetic pull on buttons */
  let mag = null;
  document.addEventListener("pointermove", (e) => {
    const b = e.target.closest?.(".btn:not(.full):not(.sm)");
    if (mag && mag !== b) { mag.style.transform = ""; mag = null; }
    if (!b) return;
    mag = b; const r = b.getBoundingClientRect();
    b.style.transform = `translate(${((e.clientX - r.left) / r.width - 0.5) * 7}px,${((e.clientY - r.top) / r.height - 0.5) * 7 - 2}px)`;
  });
}

/* Light / dark toggle (remembers the choice) */
const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches);
const paintTheme = () => { $("#theme").innerHTML = icon(isDark() ? "sun" : "moon", 16); $("#theme").setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode"); };
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("#theme").addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  paintTheme();
});
paintTheme();