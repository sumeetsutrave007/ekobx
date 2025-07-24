document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("navbar-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  burgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Optional: Close menu when a link is clicked (on mobile)
  document.querySelectorAll(".nsv-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});

const scrollElements = document.querySelectorAll(".scroll-fade-bottom");

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= window.innerHeight - offset;
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add("in-view");
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
