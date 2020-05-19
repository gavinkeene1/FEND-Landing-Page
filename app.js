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
  let newItem = document.createElement('li');
//  newItem.id = i;
/*Use the upward-counting local variable "i" to give each Navbar
element a link reference to its corresponding section in the HTML.*/
newItem.innerHTML = `<a href=#section` + /*newItem.id*/ i + `
class="navbar__menu  menu__link">` + sections[i-1].dataset.nav +
`</a>`;

  newItem.addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    //If there is no active class:
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    //Add the active class to the current/clicked button
    this.className += " active";
  });

  navbar.appendChild(newItem);
  }

//Create scroll function taking into account a section's position.
//For the moment, this is not a for loop or other kind of function
//to iterate over sections, but rather just checks coordinates
//of one section passed into the function.
function smoothScroll(section, duration) {
  console.log("Section is " + section);
  let scrollTarget = document.getElementById('section3');
  console.log(scrollTarget);
  let targetPosition = scrollTarget.getBoundingClientRect().top;
  console.log("targetPosition " + targetPosition);
  let startPosition = window.pageYOffset;
  console.log("startPosition " + startPosition);
  let distance = targetPosition - startPosition;
  console.log("distance " + distance);
  let startTime = null;
  console.log("startTime intentionally set to " + startTime);

  function animation(currentTime) {
    if (startTime === null) {
      console.log("startTime is indeed null");
      startTime = currentTime;
      console.log("startTime is " + startTime);
      let timeElapsed = currentTime - startTime;
      console.log("timeElapsed is instant: " + timeElapsed);
      let run = ease(timeElapsed, startPosition, targetPosition, duration);
      console.log("The run position is " + run);
      window.scrollTo(0, run);
      console.log("The scrollTo should have just run");
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  }


  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
      t--;
    }
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  window.requestAnimationFrame(animation);
  console.log("targetPosition at bottom is " + targetPosition);
}

smoothScroll('#section2', 1000);

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
