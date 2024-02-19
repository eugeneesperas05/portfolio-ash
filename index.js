// portfolio

const activeNav = document.querySelectorAll(".nav-link");

activeNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    activeNav.forEach((active) => {
      active.removeAttribute("id");
    });

    nav.setAttribute("id", "active-nav");
  });
});
