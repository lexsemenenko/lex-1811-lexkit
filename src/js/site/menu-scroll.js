// =============================================================================
// Highlight Menu link
// =============================================================================
import { _bundle } from '../core/core--bundles';

export function menuScroll() {
  // Get all sections that have an ID defined
  const sections = document.querySelectorAll('.section--menu[id]');
  const pageHeader = $('#header');
  const pageHeaderHeight = pageHeader.outerHeight();

  function navHighlighter() {
    // Get current scroll position
    const scrollY = window.pageYOffset;
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(function(current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - pageHeaderHeight;
      const sectionId = current.getAttribute('id');

      // If our current scroll position enters the space where current section on screen is,
      // add .active class to corresponding navigation link, else remove it
      // To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $(`.menu-main__menu a[href*=${sectionId}]`).addClass('active');
      } else {
        $(`.menu-main__menu a[href*=${sectionId}]`).removeClass('active');
      }
    });
  }

  _bundle._add({
    name: 'Site: Menu Scroll',
    event: ['on:Scroll'],
    fn: navHighlighter,
  });
}
