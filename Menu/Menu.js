
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
// }

// // Start Here: Create a reference to the ".menu" class
// const menu;
// // create a reference to the ".menu-button" class
// const menuButton;
// // Using your menuButton reference, add a click handler that calls toggleMenu

const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);