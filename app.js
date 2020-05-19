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
/* This For Loop runs through index.html to dynamically add an element
to navbar__list for each section found in the HTML. Based on the
section being iterated over, the Loop also populates the newly created
element with the section name as it appears on the webpage.*/
let navbar = document.getElementById('navbar__list');
let sections = document.getElementsByTagName("section");
for (let i = 1; i < (sections.length + 1); i++) {
  console.log(sections[i]);
  let listItem = i;
  console.log(listItem);
  let newItem = document.createElement('li');
  console.log("listElement" + i + " created");
//  newItem.id = i;
  console.log("listElement" + i + " ID is set");
/*Use the upward-counting local variable "i" to give each Navbar
element a link reference to its corresponding section in the HTML.*/
newItem.innerHTML = `<a href=#section` + /*newItem.id*/ i + `
class="navbar__menu  menu__link` + ` class` + `"` + `>` + sections[i-1].dataset.nav +
`</a>`;

newItem.addEventListener("click",function() {
  let current = document.getElementsByClassName("active");

  //If there is no active class:
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }

  //Add the active class to the current/clicked button
  this.className += " active";
})

navbar.appendChild(newItem);
}

console.log("JS Reached Point 1");

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
