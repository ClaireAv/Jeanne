var btnC = document.querySelector('.toggle_collection');
var btnN = document.querySelector('.toggle_nouveautés');
var navC = document.querySelector('.navC');
var navN = document.querySelector('.navN');

btnC.onclick = function(){
    navC.classList.toggle ('navC_open');
}
btnN.onclick = function(){
    navN.classList.toggle ('navN_open');
}
