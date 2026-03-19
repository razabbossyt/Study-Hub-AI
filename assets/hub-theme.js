(function () {
  var nav = document.getElementById("navbar");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var burger = document.getElementById("nav-burger");
  var drawer = document.getElementById("m-drawer");
  var backdrop = document.getElementById("m-backdrop");
  var close = document.getElementById("m-close");

  if (!burger || !drawer || !backdrop || !close) {
    return;
  }

  var openDrawer = function () {
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  var closeDrawer = function () {
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", openDrawer);
  close.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });
})();
