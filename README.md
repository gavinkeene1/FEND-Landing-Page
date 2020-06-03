# Landing-Page
A multi-section landing page in Javascript/HTML/CSS with a dynamically updating navigation menu based on the amount of content that is added to the page. This is the second project in the Udacity Front End Web Developer Nanodegree.

This project is very much about DOM manipulation, building elements, and adding event listeners to a landing page.

The main features of this one-pager include:
  - A dynamically built navigation bar based on the number sections created in the HTML
  - On-click scrolling to page sections via respective navigation bar items
  - Active state toggling based on a section's position relative to the top of the viewport whenever scrolling occurs
  
Somewhat more specifically, the aforementioned features make use of:
  - A "for" loop that creates as many Navbar elements as there are HTML sections
  - Some "forEach" methods that add on-click and on-scroll event listeners to Navbar links
  - A changeState function that toggles the active status of said Navbar links as well as their respective HTML sections
  - A basic smoothScroll function that scrolls the appropriate HTML section into view
