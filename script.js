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

const burger = document.querySelector('.burger');
// const ul = document.querySelector('ul');

burger.addEventListener ('click', ()=>{
    burger.classList.toggle('active');
});

// burger.addEventListener('mouseover', show);

// ul.addEventListener('click', () => {
//     burger.classList.remove('active');
//   });


