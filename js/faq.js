(function () {
  var root = document.querySelector("[data-accordion]");
  if (root) {
    var items = Array.prototype.slice.call(root.querySelectorAll("details"));
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  function openFromHash() {
    var id = (location.hash || "").replace(/^#/, "");
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var details = el.tagName.toLowerCase() === "details" ? el : el.closest("details");
    if (details) details.open = true;
  }

  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
