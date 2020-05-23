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
  let listItem = i;
  let navListItem = document.createElement('li');
  let navAnchor = document.createElement('a');

  navbar.appendChild(navListItem);
  navListItem.appendChild(navAnchor);

  navAnchor.href = "#section" + i;
  navAnchor.text = sections[i-1].dataset.nav;
  navAnchor.classList.add('navbar__menu');
  navAnchor.classList.add('menu__link');

  navListItem.addEventListener("click", function() {
    let activeItems = document.getElementsByClassName("active");

    // Toggle active classes based on the status of the anchor being
    // clicked and the status of the other anchors. First, if some
    // other anchor is active, remove its "active" class.
    if (activeItems.length > 0) {
      activeItems[0].className = activeItems[0].className.replace("active", "");
    }

    // After clearing the navbar of previous "active" statuses (if
    // applicable), add an "active" class to the navbar link that's
    // been clicked.
    this.className += "active";
  });
  }

//Create scroll function taking into account a section's position.
//For the moment, this is not a for loop or other kind of function
//to iterate over sections, but rather just checks coordinates
//of one section passed into the function.
function smoothScroll(section) {
  let clickedSection = section;
  let scrollTarget = document.querySelector(clickedSection);
  scrollTarget.scrollIntoView({
    behavior: 'smooth'
  });
}

// Get all sections (by their anchor links) on the page
const anchorLinks = document.querySelectorAll('a[href^="#"]');
//console.log(anchorLinks);

anchorLinks.forEach(link => {
  //Get the scrollTarget by getting the section's href value
  let scrollTarget = link.getAttribute('href');
  //console.log(scrollTarget);
  // When a section's navbar element is clicked
  link.addEventListener('click', (event) => {
    // First, prevent the href behavior from jumping directly to
    // scrollTarget without actually scrolling
    event.preventDefault();
    //console.log("Clicked " + scrollTarget + " - preventDefault applied");
    //Remember, scrollTarget will be whichever Navbar Item is clicked
    smoothScroll(scrollTarget);
  })
})

// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
