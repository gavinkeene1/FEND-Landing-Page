/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav
let navbar = document.getElementById('navbar__list');
document.body.prepend(navbar);
let sections = document.getElementsByTagName("section");
for (let i = 1; i < (sections.length + 1); i++) {
  console.log(sections[i]);
  let listItem = i;
  console.log(listItem);
  let newItem = document.createElement('li');
  console.log("listElement" + i + " created");
  newItem.id = i;
  console.log("listElement" + i + " ID is set");
  newItem.innerHTML = `<a href=#section` + newItem.id + `>` + `Section ` + i + `</a>`;
  navbar.appendChild(newItem);
}

//    List item syntax: <li><a href="#">Home</a></li>

console.log("JS Reached Point 1")

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
