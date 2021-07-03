function showResponsiveMenu() {
    var menu = document.getElementById("topnav_menu");
    var icon = document.getElementById("topnav_icon");
    var root = document.getElementById("root");
    // var burger = document.getElementById("burger");

    if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      // burger.className = 'active';
    } else {
      menu.className = "";                    
      icon.className = "";
      // burger.className = '';

    }
    
  }


// const burger = document.querySelector('.burger');
// const ul = document.querySelector('ul');

// burger.addEventListener ('mouseover', ()=>{
//     burger.classList.toggle('active');
// });

// burger.addEventListener('mouseover', show);

// ul.addEventListener('click', () => {
//     burger.classList.remove('active');
//   });


