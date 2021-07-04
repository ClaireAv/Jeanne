//  Menu souris
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

//  MENU RESPONSIVE
var menu = document.getElementById("topnav_menu");
var icon = document.getElementById("topnav_icon");


burger.addEventListener ('click', ()=>{
  menu.classList.toggle('open');
});

 
// Chaussures
    var chaussures = document.getElementById("chaussures");
    var listeChaussures = document.getElementById("listeChaussures");

    chaussures.addEventListener ('click', ()=>{
      listeChaussures.classList.toggle('open');
  });
//  SACS
  var sacs = document.getElementById("sacs");
  var listeSacs = document.getElementById("listeSacs");

  sacs.addEventListener ('click', ()=>{
    listeSacs.classList.toggle('open');
});

//  robes
var robes = document.getElementById("robes");
  var listeRobes = document.getElementById("listeRobes");

    robes.addEventListener ('click', ()=>{
    listeRobes.classList.toggle('open');
});

// BIJOUX

var bijoux = document.getElementById("bijoux");
  var listeBijoux = document.getElementById("listeBijoux");

    bijoux.addEventListener ('click', ()=>{
    listeBijoux.classList.toggle('open');
});
  

// Burger  croix
const burger = document.querySelector('.burger');

burger.addEventListener ('click', ()=>{
    burger.classList.toggle('active');
});



// ESSAI GSAP


const logo = document.querySelector('.LOGO');
const vit = document.querySelector('.vit');
const anim = document.querySelectorAll('.anim');

window.addEventListener('load', () => {

  const TL = gsap.timeline({paused: true});

  TL.staggerFrom(vit, 1, {top: -100, ease: 'power2.out'}, 0.3);
  TL.staggerFrom(logo, 1, {top: -50, opacity: 0, ease: 'power2.out'}, 0.3, '-=0.8');
  TL.staggerFrom(anim, 3, {opacity: 0, ease: 'power2.out'}, 0.3, '-=0.2');

  TL.play();

})




// ! test menu claire
//   var menu = document.getElementById("topnav_menu");
//   var icon = document.getElementById("topnav_icon");

//   icon.addEventListener ('mouseover', ()=>{
//     menu.classList.toggle('open');
// });
// menu.addEventListener ('mouseover', ()=>{
//   menu.classList.toggle('');
// });


// ! test API
// const options = {
//   root : null,
//   rootMargin: '0px',
//   threshold: 0.5
// }
// let observer;
// let target = document.querySelector('.yeah');
// // observer.observe(target);

// let callback = (entries, observer) => {
//   entries.forEach(entry => {
    
//     // Each entry describes an intersection change for one observed
//     // target element:
//       // entry.boundingClientRect
//       // entry.intersectionRatio
//       // entry.intersectionRect
//       // entry.isIntersecting
//       // entry.rootBounds
//       entry.observe(target)
//       entry.time
//   });
// };
// observer = new IntersectionObserver(callback, options);









// const handleIntersect = function (entries, observer) {
//   entries.forEach(function (entry){
//     if(entry.intersectionRatio> threshold) {
//       entry.target.classList.remove('yeah')
//       observer.unobserve(entry.target)
//     }
//   })
// }
// document.documentElement.classList.add('API')

//   const observer = new IntersectionObserver(handleIntersect, options)
//   const targets = document.querySelectorAll('.yeah')
//   targets.forEach(function (target) {
//     observer.observe(target)
//   })









// let observer = new IntersectionObserver ((entries) =>
// {
//   entries.forEach((entry) => {
//     threshold: 0.5
//   });
// })

// let API= document.querySelector('.API');
// observer.observe(API, 'yeah');


