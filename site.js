// French / English switch: remembers the choice, follows the browser language, honors #fr and #en.
(function () {
  var fr = document.getElementById("fr"), en = document.getElementById("en");
  var bfr = document.getElementById("btn-fr"), ben = document.getElementById("btn-en");
  if (!fr || !en || !bfr || !ben) return;
  function show(lang) {
    fr.hidden = lang !== "fr"; en.hidden = lang !== "en";
    bfr.setAttribute("aria-pressed", String(lang === "fr")); ben.setAttribute("aria-pressed", String(lang === "en"));
    document.documentElement.lang = lang;
    document.title = document.documentElement.getAttribute("data-title-" + lang) || document.title;
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }
  var start = "";
  try { start = localStorage.getItem("lang") || ""; } catch (e) { start = ""; }
  if (location.hash === "#en") start = "en";
  else if (location.hash === "#fr") start = "fr";
  else if (!start) start = (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  show(start === "en" ? "en" : "fr");
  bfr.addEventListener("click", function () { show("fr"); });
  ben.addEventListener("click", function () { show("en"); });
})();
