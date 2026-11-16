(function () {
  // GA4 event store_click. Fires on any apps.apple.com or play.google.com link.
  // Params: app (foca | dayfold | core), store (app_store | google_play),
  // link_url, page_path. transport_type beacon so the hit leaves before navigation.
  var APP_BY_ID = {
    "1526204217": "foca",
    "com.pomodoro.foca": "foca",
    "6802240198": "dayfold",
    "1562215374": "core"
  };

  function inferApp(anchor) {
    var explicit = anchor.getAttribute("data-app");
    if (explicit) return explicit;
    var href = anchor.href || anchor.getAttribute("href") || "";
    var apple = href.match(/\/id(\d+)/);
    if (apple && APP_BY_ID[apple[1]]) return APP_BY_ID[apple[1]];
    var play = href.match(/[?&]id=([^&#]+)/);
    if (play && APP_BY_ID[decodeURIComponent(play[1])]) return APP_BY_ID[decodeURIComponent(play[1])];
    return "";
  }

  function inferStore(href) {
    if (href.indexOf("play.google.com") !== -1) return "google_play";
    if (href.indexOf("apps.apple.com") !== -1) return "app_store";
    return "";
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    var anchor = target && target.closest ? target.closest("a") : null;
    if (!anchor) return;
    var href = anchor.href || "";
    var store = inferStore(href);
    if (!store) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "store_click", {
      app: inferApp(anchor),
      store: store,
      link_url: href,
      page_path: location.pathname || "/",
      transport_type: "beacon"
    });
  }, true);
})();
