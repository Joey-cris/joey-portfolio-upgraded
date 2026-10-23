/* ===== Intro: timeline + synthesized sound (no audio files needed) ===== */
(function () {
  var html = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  var intro = $("intro");
  html.classList.add("intro-ready"); // tells the safety timer in <head> we loaded

  var DUR = 8400;               // total intro length (ms)
  var REMEMBER = true;          // true = only show once per browser session

  function closeNow() { html.classList.remove("intro-on"); html.classList.add("no-intro"); }
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var seen = false; try { seen = REMEMBER && sessionStorage.getItem("introSeen"); } catch (e) {}
  if (!intro || reduce || seen) { closeNow(); return; }

  var gate = $("inGate"), stage = $("inStage"), bar = stage.querySelector(".in-bar i");
  var start = $("inStart"), skip = $("inSkip"), mute = $("inMute");
  var started = false, ended = false, timer;

  /* split text into animated letters */
  function split(el, text) {
    el.innerHTML = text.split("").map(function (c, i) {
      return c === " " ? '<span class="sp"></span>' : '<span class="lt" style="--i:' + i + '">' + c + "</span>";
    }).join("");
  }
  split($("inWelcome"), "WELCOME TO MY PORTFOLIO");
  split($("inName"), "JOEY GALOLO");
  stage.style.setProperty("--dur", DUR + "ms");

  /* ---------- sound ---------- */
  var ac, master, muted = false;
  function env(g, t, peak, a, d) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  function tone(freq, t, peak, a, d, type) {
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = type || "sine"; o.frequency.setValueAtTime(freq, t);
    env(g, t, peak, a, d); o.connect(g); g.connect(master);
    o.start(t); o.stop(t + a + d + 0.05);
  }
  function initAudio(t0) {
    try {
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      ac = new AC(); if (ac.state === "suspended") ac.resume();
      master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
      var t = ac.currentTime + 0.05, end = t + DUR / 1000;

      /* ambient pad: A major add9, slow swell, breathing low-pass */
      var lp = ac.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 850; lp.Q.value = 0.5;
      var pg = ac.createGain();
      pg.gain.setValueAtTime(0.0001, t);
      pg.gain.exponentialRampToValueAtTime(0.14, t + 3);
      pg.gain.setValueAtTime(0.14, end - 1.2);
      pg.gain.exponentialRampToValueAtTime(0.0001, end + 0.8);
      lp.connect(pg); pg.connect(master);
      [110, 164.81, 220, 277.18, 329.63].forEach(function (f, i) {
        [-6, 6].forEach(function (d) {
          var o = ac.createOscillator(); o.type = i % 2 ? "triangle" : "sine";
          o.frequency.value = f; o.detune.value = d; o.connect(lp);
          o.start(t); o.stop(end + 1);
        });
      });
      var lfo = ac.createOscillator(), lg = ac.createGain();
      lfo.frequency.value = 0.18; lg.gain.value = 320; lfo.connect(lg); lg.connect(lp.frequency);
      lfo.start(t); lfo.stop(end + 1);

      /* low swell as rings draw */
      tone(55, t + 0.2, 0.18, 1.6, 2.2);

      /* typing ticks, synced with the letter animations */
      function ticks(base, step, text, f0, peak) {
        text.split("").forEach(function (c, i) {
          if (c !== " ") tone(f0 + (i % 5) * 180, t + base + i * step, peak, 0.002, 0.07, "triangle");
        });
      }
      ticks(3.6, 0.045, "WELCOME TO MY PORTFOLIO", 1900, 0.018);
      ticks(5.0, 0.085, "JOEY GALOLO", 1100, 0.035);

      /* chime when the monogram fills in */
      [440, 554.37, 659.25, 880].forEach(function (f, i) { tone(f, t + 3.3 + i * 0.13, 0.05, 0.01, 1.8); });
      /* soft hit when the name lands */
      var k = ac.createOscillator(), kg = ac.createGain();
      k.frequency.setValueAtTime(140, t + 5.9); k.frequency.exponentialRampToValueAtTime(48, t + 6.6);
      env(kg, t + 5.9, 0.16, 0.01, 0.9); k.connect(kg); kg.connect(master); k.start(t + 5.9); k.stop(t + 7);
    } catch (e) { ac = null; }
  }
  function whoosh() {
    if (!ac) return;
    try {
      var t = ac.currentTime, len = ac.sampleRate, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      var s = ac.createBufferSource(); s.buffer = buf;
      var bp = ac.createBiquadFilter(); bp.type = "bandpass"; bp.Q.value = 0.8;
      bp.frequency.setValueAtTime(250, t + 0.3); bp.frequency.exponentialRampToValueAtTime(3200, t + 1.3);
      var g = ac.createGain(); env(g, t + 0.3, 0.09, 0.4, 0.6);
      s.connect(bp); bp.connect(g); g.connect(master); s.start(t); s.stop(t + 1.5);
      master.gain.setTargetAtTime(0, t + 1.2, 0.25);
      setTimeout(function () { try { ac.close(); } catch (e) {} }, 2600);
    } catch (e) {}
  }

  /* ---------- flow ---------- */
  function begin(withSound) {
    if (started || ended) return; started = true;
    intro.classList.add("started");
    if (withSound) initAudio(); else mute.hidden = true;
    gate.classList.add("off");
    setTimeout(function () { gate.hidden = true; }, 650);
    stage.hidden = false; void stage.offsetWidth; stage.classList.add("play");
    timer = setTimeout(finish, DUR);
  }
  function finish() {
    if (ended) return; ended = true; clearTimeout(timer);
    try { if (REMEMBER) sessionStorage.setItem("introSeen", "1"); } catch (e) {}
    if (!location.hash) window.scrollTo(0, 0);
    html.classList.remove("intro-on"); html.classList.add("intro-done"); // releases scroll + hero entrance
    intro.classList.add("out");
    whoosh();
    setTimeout(function () { intro.classList.add("done"); }, 1800);
  }

  start.addEventListener("click", function () { begin(true); });
  var quiet = $("inQuiet"); if (quiet) quiet.addEventListener("click", function () { begin(false); });
  skip.addEventListener("click", finish);
  mute.addEventListener("click", function () {
    muted = !muted; mute.classList.toggle("muted", muted);
    mute.setAttribute("aria-label", muted ? "Unmute sound" : "Mute sound");
    if (master) master.gain.setTargetAtTime(muted ? 0 : 0.9, ac.currentTime, 0.08);
  });
  addEventListener("keydown", function (e) { if (e.key === "Escape") finish(); });
  try { start.focus({ preventScroll: true }); } catch (e) {}
})();