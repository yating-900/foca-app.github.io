// Tenderday "Notify me" form.
// Set ENDPOINT to a form service URL that accepts a POST with an `email` field and replies
// with JSON (for example a Formspree form URL, https://formspree.io/f/xxxxxxx).
// While ENDPOINT is empty the form falls back to opening an email to the studio address,
// so the page works before a service is set up.
(function () {
  var ENDPOINT = "";
  var FALLBACK_TO = "focastudio@outlook.com";

  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }

  function valid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  }

  Array.prototype.forEach.call(document.querySelectorAll("form[data-join]"), function (form) {
    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button[type="submit"]');
    var msg = form.querySelector(".msg");
    var trap = form.querySelector('input[name="_gotcha"]');

    function say(text, kind) {
      msg.textContent = text;
      msg.className = "msg" + (kind ? " " + kind : "");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var email = (input.value || "").trim();
      if (trap && trap.value) return; // a bot filled the hidden field
      if (!valid(email)) {
        say("Please enter a valid email address.", "err");
        input.focus();
        return;
      }

      if (!ENDPOINT) {
        var subject = encodeURIComponent("Tenderday: notify me");
        var body = encodeURIComponent("Please let me know when Tenderday launches or the beta opens.\n\nEmail: " + email);
        window.location.href = "mailto:" + FALLBACK_TO + "?subject=" + subject + "&body=" + body;
        say("Your email app should open. Send the message and you’re on the list.", "ok");
        track("tenderday_join", { method: "mailto" });
        return;
      }

      button.disabled = true;
      say("Adding you…");
      var data = new FormData();
      data.append("email", email);
      data.append("source", "foca.work/tenderday");
      fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (res) {
          if (!res.ok) throw new Error("status " + res.status);
          form.reset();
          say("Thank you. We’ll email you when Tenderday is ready.", "ok");
          track("tenderday_join", { method: "form" });
        })
        .catch(function () {
          say("Something went wrong. Please try again, or email " + FALLBACK_TO + ".", "err");
        })
        .then(function () { button.disabled = false; });
    });
  });
})();
