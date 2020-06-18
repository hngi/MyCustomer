// NAV
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li");

  burger.addEventListener("click", navbutton);

  function navbutton(e) {
    e.preventDefault();
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .5s ease-in-out forwards ${index / 7 + 1}s`;
      }
    });

    // Animate Burger

    burger.classList.toggle("toggle");
  }
}

navSlide();
