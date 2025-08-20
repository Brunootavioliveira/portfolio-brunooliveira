document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado!");
});

//Header muda cor ao scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.6)";
    header.style.backdropFilter = "blur(8px)";
  } else {
    header.style.background = "transparent";
  }
});

//Fade-in nas sections 
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});

//Skills Animation
const skillCards = document.querySelectorAll('.skill-card, .social-links a');

skillCards.forEach((card, i) => {
  let direction = 1;
  let pos = 0;
  setInterval(() => {
    pos += direction * 0.8;
    if (pos > 5 || pos < -5) direction *= -1;
    card.style.transform = `translateY(${pos}px)`;
  }, 50 + i * 10);
});

//Interação no hover (inútil mas vou fazer)
skillCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.2)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Navbar aparece com fundo só quando rolar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

