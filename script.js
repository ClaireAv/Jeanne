function showResponsiveMenu() {
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



