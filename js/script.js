// Menu
function showMenu() {
  let menu = document.querySelector("#topnav_menu");
  let icon = document.querySelector("#topnav_icon");

  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
  } else {
    menu.className = "";
    icon.className = "";
  }
}

// Chaussures
let chaussures = document.querySelector("#chaussures");
let listeChaussures = document.querySelector("#listeChaussures");

chaussures.addEventListener("click", () => {
  listeChaussures.classList.toggle("open");
});

//  Sacs
let sacs = document.querySelector("#sacs");
let listeSacs = document.querySelector("#listeSacs");

sacs.addEventListener("click", () => {
  listeSacs.classList.toggle("open");
});

// Robes
let robes = document.querySelector("#robes");
let listeRobes = document.querySelector("#listeRobes");

robes.addEventListener("click", () => {
  listeRobes.classList.toggle("open");
});

// Bijoux
let bijoux = document.querySelector("#bijoux");
let listeBijoux = document.querySelector("#listeBijoux");

bijoux.addEventListener("click", () => {
  listeBijoux.classList.toggle("open");
});

// Burger croix
const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

// Menu responsive
let menu = document.querySelector("#topnav_menu");
let icon = document.querySelector("#topnav_icon");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// GSAP
const logo = document.querySelector(".LOGO");
const vit = document.querySelector(".vit");
const anim = document.querySelectorAll(".anim");

window.addEventListener("DOMContentLoaded", () => {
  // Used "DOMContentLoaded" instead of event "load" to prevent warning messages
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(vit, 1, { top: -100, ease: "power2.out" }, 0.3);
  TL.staggerFrom(
    logo,
    1,
    { top: -50, opacity: 0, ease: "power2.out" },
    0.3,
    "-=0.8"
  );
  TL.staggerFrom(anim, 3, { opacity: 0, ease: "power2.out" }, 0.3, "-=0.2");

  TL.play();
});

// Intersection Observer API
let observer = new IntersectionObserver(
  function (observables) {
    observables.forEach(function (observable) {
      // L'élément devient visible
      if (observable.intersectionRatio > 0.5) {
        observable.target.classList.remove("not-visible");
        observer.unobserve(observable.target);
      }
    });
  },
  {
    threshold: [0.5],
  }
);

// On observe nos éléments
let items = document.querySelectorAll(".yeah");
items.forEach(function (item) {
  item.classList.add("not-visible");
  observer.observe(item);
});

// Bouton coeur page vêtement
let coeur = document.querySelector("#coeur");
if (coeur) {
  // Add "if" statement to remove error message in console "Cannot read property 'addEventListener' of null"
  coeur.addEventListener("click", () => {
    coeur.classList.toggle("active");
  });
}

// Slideshow vêtement sélectionné
let slide = new Array(
  "./images/sélection/responsive/vue1-1000px.jpg",
  "./images/sélection/responsive/vue2-1000px.jpg",
  "./images/sélection/responsive/vue3-1000px.jpg",
  "./images/sélection/responsive/vue4-1000px.jpg"
);

let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.querySelector("#slide").src = slide[numero];
}
