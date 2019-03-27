// =============================================================================
// Highlight Menu link
// =============================================================================
import { _bundle } from '../core/core--bundles'

export function menuScroll () {
// Get all sections that have an ID defined
  let sections = document.querySelectorAll('.section--menu[id]')
  let pageHeader = $('#header')
  let pageHeaderHeight = pageHeader.outerHeight()

  _bundle._add({
    name: 'Site: Menu Scroll',
    event: ['on:Scroll'],
    fn: navHighlighter
  })

  function navHighlighter () {
    // Get current scroll position
    let scrollY = window.pageYOffset
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(function (current) {
      let sectionHeight = current.offsetHeight
      let sectionTop = current.offsetTop - pageHeaderHeight
      let sectionId = current.getAttribute('id')

      // If our current scroll position enters the space where current section on screen is,
      // add .active class to corresponding navigation link, else remove it
      // To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $('.menu-main__menu a[href*=' + sectionId + ']').addClass('active')
      } else {
        $('.menu-main__menu a[href*=' + sectionId + ']').removeClass('active')
      }
    })
  }
}
