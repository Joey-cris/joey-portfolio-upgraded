/* Phone UX: tab bar, drawer scrim + swipe, edge-swipe, bottom-sheet drag */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var mq = matchMedia("(max-width:1000px)");
  var side = $("side"), scrim = $("scrim"), burger = $("burger"), menuTab = $("menuTab"), md = $("md"), lb = $("lb");
  if (!side || !burger || !menuTab) return;
  var isOpen = function () { return side.classList.contains("open"); };
  var toggle = function () { burger.click(); };

  new MutationObserver(function () {
    var o = isOpen();
    scrim.classList.toggle("on", o);
    menuTab.classList.toggle("on", o);
    menuTab.setAttribute("aria-expanded", o);
    menuTab.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  }).observe(side, { attributes: true, attributeFilter: ["class"] });
  menuTab.addEventListener("click", toggle);
  scrim.addEventListener("click", function () { if (isOpen()) toggle(); });
  addEventListener("keydown", function (e) { if (e.key === "Escape" && isOpen() && md.hidden && lb.hidden) toggle(); });

  /* swipe the drawer shut; swipe in from the left edge to open it */
  var sx = null, sy = null;
  document.addEventListener("touchstart", function (e) {
    var t = e.touches[0]; sx = t.clientX; sy = t.clientY;
  }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (sx === null || !mq.matches) { sx = null; return; }
    var t = e.changedTouches[0], dx = t.clientX - sx, dy = Math.abs(t.clientY - sy), fromX = sx; sx = null;
    if (dy > 60 || document.documentElement.classList.contains("intro-on")) return;
    if (isOpen() && dx < -60) toggle();
    else if (!isOpen() && fromX < 20 && dx > 70 && md.hidden && lb.hidden) toggle();
  });

  /* active tab follows the section on screen */
  var tabs = [].slice.call(document.querySelectorAll("#tabbar a[data-id]"));
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) tabs.forEach(function (a) { a.classList.toggle("on", a.dataset.id === e.target.id); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });

  /* drag the project sheet down to close it */
  var box = document.querySelector(".mdbox"), y0 = null, dy = 0;
  if (box) {
    box.addEventListener("touchstart", function (e) {
      if (!mq.matches || box.scrollTop > 0) return;
      y0 = e.touches[0].clientY; dy = 0; box.style.transition = "none";
    }, { passive: true });
    box.addEventListener("touchmove", function (e) {
      if (y0 === null) return;
      dy = Math.max(0, e.touches[0].clientY - y0);
      box.style.transform = dy ? "translateY(" + dy + "px)" : "";
    }, { passive: true });
    box.addEventListener("touchend", function () {
      if (y0 === null) return;
      box.style.transition = "transform .25s";
      var close = dy > 110; y0 = null; dy = 0;
      box.style.transform = "";
      if (close) $("mdClose").click();
    });
  }
})();