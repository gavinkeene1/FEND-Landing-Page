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
  console.log("smoothScroll starting");
  //console.log("Section is " + section);
  let scrollTarget = document.getElementById('section4');
  //console.log(scrollTarget);
  let targetPosition = scrollTarget.getBoundingClientRect().top;
  //console.log("targetPosition " + targetPosition);
  let startPosition = window.pageYOffset;
  //console.log("startPosition " + startPosition);
  let distance = targetPosition - startPosition;
  //console.log("distance " + distance);
  let startTime = null;
  //console.log("startTime intentionally set to " + startTime);

  function animation(currentTime) {
    console.log("animation starting");
    if (startTime === null) {
      //console.log("startTime is indeed null");
      startTime = currentTime;
      //console.log("startTime is " + startTime);
      let timeElapsed = currentTime - startTime;
      //console.log("timeElapsed is instant: " + timeElapsed);
      let yCoord = yCoordinate(timeElapsed, startPosition, distance, duration, targetPosition);
      //console.log("The yCoord position is " + yCoord);
      //console.log("yCoord is " + yCoord);
      //console.log("I'm giving the yCoord to scrollTo()");
      if(yCoord !== 0) {
        setTimeout(function() {
          console.log("yCoord is not 0, it is " + yCoord);
          window.scrollTo(0, yCoord);
          console.log("trying after timeout");
        }, 200);
        //console.log("The scrollTo should have just yCoord");
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      else if (yCoord === 0) {
          console.log("yCoord is equal to 0");
          setTimeout(function() {
            window.scrollTo(0, yCoord);
            console.log("trying after timeout");
          }, 200);
          //console.log("The scrollTo should have just yCoord");
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
      }
    }
  }

// The yCoordinate function returns the y-coordinate of the right
// section that the page should scroll to when a Navbar item is
// clicked.
  function yCoordinate(t, b, c, d, e) {
    console.log(t + " " + b + " " + c + " " + d);
    console.log("yCoordinate starting");
    // When the page sits at y = 0 (top of the page), simply jump
    // to the desired y-coordinate which is "distance" away from 0.
    if (b === 0) {
      return c;
    }
    // When the page has been scrolled down at all, factor in a new
    // startPosition to get the accurate y-coordinate of the target
    else if (b > 0) {
      console.log("non-zero y is " + b);
      console.log("distance to target is " + c);
      return (b+e);
      }
  }

  window.requestAnimationFrame(animation);
  //console.log("targetPosition at bottom is " + targetPosition);
}

// Scroll to anchor ID using scrollTO event

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
    // Make a section active when clicked
    let current = document.getElementsByClassName("active");

    //If there is no active class:
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    //Add the active class to the current/clicked button
    this.className += " active";
    // Call the smoothScroll Function
    //console.log("trying smoothScroll now:");
    //Remember, scrollTarget will be whichever Navbar Item is clicked
    smoothScroll(scrollTarget, 1000);
  })
})

// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
