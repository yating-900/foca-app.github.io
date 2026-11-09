(function () {
  document.documentElement.classList.add("js");

  // App Store Connect campaign attribution. Fill in your provider token (App Store Connect →
  // App Analytics → Sources → Campaigns → "Generate a Campaign Link") to see website downloads.
  var PROVIDER_TOKEN = "";

  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }

  // Tag App Store links with a campaign so downloads from foca.work are attributable.
  Array.prototype.forEach.call(document.querySelectorAll("a[data-campaign]"), function (a) {
    var href = a.getAttribute("href");
    if (href.indexOf("apps.apple.com") !== -1 && PROVIDER_TOKEN) {
      href += (href.indexOf("?") === -1 ? "?" : "&") + "pt=" + PROVIDER_TOKEN + "&ct=" + a.dataset.campaign + "&mt=" + (a.dataset.platform === "mac" ? "12" : "8");
      a.setAttribute("href", href);
    }
    a.addEventListener("click", function () {
      track("store_click", { campaign: a.dataset.campaign, platform: a.dataset.platform || "" });
    });
  });

  // Put the visitor's own platform first and make it the primary button.
  var box = document.querySelector("[data-downloads]");
  if (box) {
    var ua = (navigator.userAgent || "").toLowerCase();
    var isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    var platform = /android/.test(ua) ? "android" : (/iphone|ipad|ipod/.test(ua) || isIPadOS) ? "iphone" : "mac";
    var first = box.querySelector('[data-platform="' + platform + '"]');
    if (first) box.insertBefore(first, box.firstChild);
  }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal.
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Video: the play button only appears once a video source is set on the showcase.
  var showcase = document.querySelector("[data-video]");
  if (showcase) {
    var src = showcase.getAttribute("data-video");
    var btn = showcase.querySelector(".play");
    if (src && btn) {
      var wrapEl = document.querySelector("[data-video-wrap]");
      if (wrapEl) wrapEl.hidden = false;
      btn.hidden = false;
      btn.addEventListener("click", function () {
        var v = document.createElement("video");
        v.src = src;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true;
        var poster = showcase.getAttribute("data-poster");
        if (poster) v.poster = poster;
        showcase.appendChild(v);
        btn.hidden = true;
        track("video_play", {});
      });
    }
  }
})();
