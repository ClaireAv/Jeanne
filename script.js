var btnC = document.querySelector('.toggle_collection');
var btnN = document.querySelector('.toggle_nouveautés');
var navC = document.querySelector('.navC');
var navN = document.querySelector('.navN');

btnC.onmouseover = function(){
    navC.classList.toggle ('navC_open');
}
btnC.onmouseout = function(){
    navC.classList.toggle ('navC');
}
btnN.onmouseover = function(){
    navN.classList.toggle ('navN_open');
}

// btnN.onmouseout = function(){
//     navN.classList.toggle ('navN');
// }

