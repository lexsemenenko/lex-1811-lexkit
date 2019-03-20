// =============================================================================
// Change Header on Scroll
// =============================================================================

export function pageHeader () {
  let pageHeader = $('#header')
  let pageHeaderHeight = pageHeader.outerHeight()
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > pageHeaderHeight) {
      $('#header').addClass('active')
    } else {
      $('#header').removeClass('active')
    }
  })
}
