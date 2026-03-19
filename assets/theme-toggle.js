(function () {
  var body = document.body;
  if (!body) return;

  var wrap = document.createElement("div");
  wrap.className = "theme-toggle";
  wrap.innerHTML = '<span>Theme</span><button type="button" aria-label="Toggle color scheme">Auto</button>';

  var button = wrap.querySelector("button");
  var key = "studyhub-theme";

  function apply(mode) {
    if (mode === "dark") {
      body.style.backgroundColor = "#0f172a";
      body.style.color = "#e5e7eb";
      button.textContent = "Dark";
    } else {
      body.style.backgroundColor = "";
      body.style.color = "";
      button.textContent = "Light";
    }
  }

  var mode = localStorage.getItem(key) || "light";
  apply(mode);

  button.addEventListener("click", function () {
    mode = mode === "dark" ? "light" : "dark";
    localStorage.setItem(key, mode);
    apply(mode);
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(wrap);
  });
})();
