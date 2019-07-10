/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuSelector = document.querySelector('.header');

menuSelector.appendChild(createMenu())

function createMenu(parameter) {
  //Toggle
  const menuBar = document.querySelector('.menu-button');

  menuBar.addEventListener('click', e => {
    console.log('clicked', e.target);
    menu.classList.toggle('menu--open')
  })

  //define new elements
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');
  const listedItems = document.createElement('li');

  //structure elements
  menu.appendChild(unorderedList);
  unorderedList.appendChild(listedItems);

  //set class name
  menu.classList.add('menu');

  //Display
  const numberOfLi = menuItems.length;

  for (var i = 0; i < numberOfLi; i++) {
    const listedItems = document.createElement('li');
    listedItems.textContent = menuItems[i];
    unorderedList.appendChild(listedItems)
  }

  return menu;

}
