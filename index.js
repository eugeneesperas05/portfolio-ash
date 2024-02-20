// portfolio

const activeNav = document.querySelectorAll(".nav-link");

activeNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    activeNav.forEach((active) => {
      active.removeAttribute("id");
    });

    // nav.setAttribute("id", "active-nav");
  });
});

// -----scroll up-------
window.onscroll = function () {
  scrollFunction();
};
function scrollToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
}

const scrollFunction = () => {
  const scrollToTopBtn = document.querySelector("#scrollToTop");
  scrollToTopBtn.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none";
};
// -----end of sroll up------

// --------about----------
// start of button see more and show less
const seeMore = document.querySelector(".see-more");
const moreBtn = document.querySelector("#more-btn");
const lessBtn = document.querySelector("#less-btn");
const tabCont = document.querySelector(".tabs-container");

moreBtn.addEventListener("click", () => {
  seeMore.style.display = "block";
  // seeMore.style.textIndent = "0";
  moreBtn.style.display = "none";
  moreBtn.style.transition = "0.5s";
  tabCont.style.display = "none";
});

lessBtn.addEventListener("click", () => {
  seeMore.style.display = "none";
  moreBtn.style.display = "block";
  tabCont.style.display = "block";
});

// end of button see more and show less

// start of about me tabs for skills
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

const openTab = (tabName) => {
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });

  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

// --for my kodego button to show certifate---
const certificateBtn = document.querySelector("#certificate-btn");
const certiContainer = document.querySelector(".cert-container");
certificateBtn.addEventListener("click", () => {
  certiContainer.style.display = "block";
});

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", () => {
  certiContainer.style.display = "none";
});

// end of about me tabs for skills
