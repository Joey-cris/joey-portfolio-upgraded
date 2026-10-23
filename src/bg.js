/* Animated background: scroll parallax, cursor spotlight, section tone */
(function () {
  var bg = document.getElementById("bg"); if (!bg) return;
  var r = document.documentElement, raf = false;
  var reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;

  addEventListener("scroll", function () {
    if (raf) return; raf = true;
    requestAnimationFrame(function () { r.style.setProperty("--sp", scrollY); raf = false; });
  }, { passive: true });

  if (matchMedia("(hover:hover)").matches && !reduced) {
    var mx = 0, my = 0, t = false;
    bg.classList.add("spot");
    addEventListener("pointermove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (t) return; t = true;
      requestAnimationFrame(function () { bg.style.setProperty("--mx", mx + "px"); bg.style.setProperty("--my", my + "px"); t = false; });
    }, { passive: true });
  }

  /* gold glow for the creative sections, blue for the technical ones */
  var gold = { hobbies: 1, photojournalism: 1, work: 1, testimonials: 1 };
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) bg.dataset.tone = gold[e.target.id] ? "gold" : "blue"; });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });

  document.addEventListener("visibilitychange", function () { r.classList.toggle("bg-paused", document.hidden); });
})();