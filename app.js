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

// Define Global Variables
 let navbar = document.getElementById('navbar__list');
 let sections = document.getElementsByTagName("section");


// Build the Navbar
/* This For Loop runs through index.html to dynamically add an element
to navbar__list for each section found in the HTML. Based on the
section being iterated over, the Loop also populates the newly created
element with the section name as it appears on the webpage.*/
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


/* Commented Out: The following on-click event conflicts with
on-scroll event since both try to style Navbar links with a light
blue background. The on-click event wants to do it instantly, but the
on-scroll event wants to change background color of Navbar links as
it scrolls over their corresponding page sections. There may be use
for this on-click styling in the future if the conflict can be
resolved.*/

/*  navListItem.addEventListener("click", function() {
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
  });*/
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
let pageSections = document.querySelectorAll('section');
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

// Toggle the 'active' class of Navbar links and HTML page sections
//based on which section is near the top of the viewport
function changeAnchorState() {
  let sectionIndex = sections.length;

  while(--sectionIndex && window.scrollY + 50 < sections[sectionIndex].offsetTop) {}
  anchorLinks.forEach((link) => link.classList.remove('active'));
  anchorLinks[sectionIndex].classList.add('active');
  pageSections.forEach((section) => section.classList.remove('active-section'));
  pageSections[sectionIndex].classList.add('active-section');
}

changeAnchorState();

// Update the 'active' state of Navbar links and page sections
// whenever scrolling happens in the window
window.addEventListener('scroll', changeAnchorState);
