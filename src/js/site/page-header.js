import { _bundle } from "../core/core--bundles"

// Change Header on Scroll
// =============================================================================

export function pageHeader () {
  let pageHeader = $('#header')
  let pageHeaderHeight = pageHeader.outerHeight()

  _bundle._add({
    name: 'Site: PageHeader',
    event: ['on:Scroll'],
    fn: function () {
      if ($(window).scrollTop() > pageHeaderHeight) {
        $('#header').addClass('active')
      } else {
        $('#header').removeClass('active')
      }
    }
  })
}
