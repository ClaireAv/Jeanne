
const deroulant =document.querySelector('.deroulant');
const click =document.querySelector('.click')


click.addEventListener('click', show);

function show(){
  deroulant.classList.toggle('active');}


// const burger = document.querySelector('.burger');
// const sidebar =document.querySelector('.sidebar');

// burger.addEventListener ('click', ()=>{
//     burger.classList.toggle('active');
// });

// burger.addEventListener('click', show);

// function show(){
//   sidebar.classList.toggle('active');
// }

//     // Click pour enlever le menu
//     const ul = document.querySelector('ul');

//     ul.addEventListener('click', () => {
//       sidebar.classList.remove('active');
//     });

//     ul.addEventListener('click', () => {
//         burger.classList.remove('active');
//       });