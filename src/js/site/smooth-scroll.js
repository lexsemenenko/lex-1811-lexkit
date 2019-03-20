// =============================================================================
// Smooth Scroll
// =============================================================================

export function smoothScroll () {
  $('.menu-main__menu a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault()
      let hash = this.hash
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800
      )
    }
  })
}
