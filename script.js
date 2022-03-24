//  Menu
function showMenu() {
  var menu = document.getElementById("topnav_menu");
  var icon = document.getElementById("topnav_icon");
  var root = document.getElementById("root");

  if (menu.className === "") {
    menu.className = "open";
    icon.className = "open";
  } else {
    menu.className = "";
    icon.className = "";
  }
}

// Chaussures
var chaussures = document.getElementById("chaussures");
var listeChaussures = document.getElementById("listeChaussures");

chaussures.addEventListener("click", () => {
  listeChaussures.classList.toggle("open");
});

//  Sacs
var sacs = document.getElementById("sacs");
var listeSacs = document.getElementById("listeSacs");

sacs.addEventListener("click", () => {
  listeSacs.classList.toggle("open");
});

//  Robes
var robes = document.getElementById("robes");
var listeRobes = document.getElementById("listeRobes");

robes.addEventListener("click", () => {
  listeRobes.classList.toggle("open");
});

// Bijoux

var bijoux = document.getElementById("bijoux");
var listeBijoux = document.getElementById("listeBijoux");

bijoux.addEventListener("click", () => {
  listeBijoux.classList.toggle("open");
});

// Burger  croix
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

//  Menu responsive
var menu = document.getElementById("topnav_menu");
var icon = document.getElementById("topnav_icon");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Essai GSAP
const logo = document.querySelector(".LOGO");
const vit = document.querySelector(".vit");
const anim = document.querySelectorAll(".anim");

window.addEventListener("load", () => {
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

// Test API

let observer = new IntersectionObserver(
  function (observables) {
    observables.forEach(function (observable) {
      // L'élément devient visible
      if (observable.intersectionRatio > 0.5) {
        observable.target.classList.remove("not-visible");
        observer.unobserve(observable.target);
        console.log(observables);
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

// Bouton coeur
let coeur = document.getElementById("coeur");
coeur.addEventListener("click", () => {
  coeur.classList.toggle("active");
});

// Slideshow vêtement sélectionné

var slide = new Array(
  "./images/sélection/responsive/vue1-1000px.jpg",
  "./images/sélection/responsive/vue2-1000px.jpg",
  "./images/sélection/responsive/vue3-1000px.jpg",
  "./images/sélection/responsive/vue4-1000px.jpg"
);

var numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}
