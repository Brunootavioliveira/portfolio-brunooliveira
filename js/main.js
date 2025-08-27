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

const translations = {
  en: {
    heroTitle: "Hello, I'm <strong style='color: var(--color-strongs);'>Bruno Oliveira</strong>",
    heroSubtitle: "Software Engineer Student",
    about1: "Hello! My name is Bruno Oliveira, and I am a Software Engineering student at FIAP. My main focus is on <strong>Back-end</strong>, working with <strong>Java</strong> to develop robust and scalable systems.",
    about2: "Currently, I am deepening my knowledge in <strong>Spring</strong>, <strong>microservices</strong>, and best practices in <strong>software architecture</strong>. I have already developed projects involving Java applications, always aiming to create efficient and modern solutions.",
    exp1: "Organization of documents, patient/companion assistance, and operation of internal systems.",
    exp2: "Projects in <strong>Java</strong> and <strong>Python</strong> focused on applications and frameworks.",
    project1: "System for organizing and recommending entertainment content, such as <strong>films</strong> and <strong>series</strong>.",
    project2: "Audio management and playback platform, such as <strong>music</strong> and <strong>podcasts</strong>.",
    project3: "Application allows you to perform basic operations such as <strong>account</strong> creation, <strong>deposits</strong>, <strong>withdrawals</strong> and <strong>balance</strong> viewing.",
    project4: "<strong>Live</strong> racing streaming site with detailed <strong>informations</strong>, highlights from each <strong>team</strong>, and an updated <strong>news</strong> section."
  },
  pt: {
    heroTitle: "Olá, eu sou <strong style='color: var(--color-strongs);'>Bruno Oliveira</strong>",
    heroSubtitle: "Estudante de Engenharia de Software",
    about1: "Olá! Meu nome é Bruno Oliveira, e sou estudante de Engenharia de Software na FIAP. Meu foco principal é em <strong>Back-end</strong>, trabalhando com <strong>Java</strong> para desenvolver sistemas robustos e escaláveis.",
    about2: "Atualmente, estou aprofundando meus conhecimentos em <strong>Spring</strong>, <strong>microsserviços</strong> e boas práticas em <strong>arquitetura de software</strong>. Já desenvolvi projetos envolvendo aplicações Java, sempre buscando criar soluções modernas e eficientes.",
    exp1: "Organização de documentos, atendimento a pacientes/acompanhantes e operação de sistemas internos.",
    exp2: "Projetos em <strong>Java</strong> e <strong>Python</strong> com foco em aplicações e frameworks.",
    project1: "Sistema para organizar e recomendar conteúdos de entretenimento, como <strong>filmes</strong> e <strong>séries</strong>.",
    project2: "Plataforma de gerenciamento e reprodução de áudio, como <strong>músicas</strong> e <strong>podcasts</strong>.",
    project3: "Aplicação permite realizar operações básicas como criação de <strong>conta</strong>, <strong>depósitos</strong>, <strong>saques</strong> e visualização de <strong>saldo</strong>.",
    project4: "Site de streaming de corridas <strong>ao vivo</strong> com <strong>informações</strong> detalhadas, destaques de cada <strong>equipe</strong> e uma seção de <strong>notícias</strong> atualizada."
  }
};

function setLanguage(lang) {
  document.querySelector("#hero h1").innerHTML = translations[lang].heroTitle;
  document.querySelector("#hero p").innerHTML = translations[lang].heroSubtitle;

  const aboutParas = document.querySelectorAll("#about .about-text p");
  aboutParas[0].innerHTML = translations[lang].about1;
  aboutParas[1].innerHTML = translations[lang].about2;

  const expParas = document.querySelectorAll("#experiences .timeline-item p");
  expParas[0].innerHTML = translations[lang].exp1;
  expParas[1].innerHTML = translations[lang].exp2;

  const projParas = document.querySelectorAll("#projects .project-card p:first-of-type");
  projParas[0].innerHTML = translations[lang].project1;
  projParas[1].innerHTML = translations[lang].project2;
  projParas[2].innerHTML = translations[lang].project3;
  projParas[3].innerHTML = translations[lang].project4;
}

document.querySelector("#btn-pt").addEventListener("click", () => setLanguage("pt"));
document.querySelector("#btn-en").addEventListener("click", () => setLanguage("en"));




