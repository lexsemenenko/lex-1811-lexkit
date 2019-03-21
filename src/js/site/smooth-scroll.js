// =============================================================================
// Smooth Scroll
// =============================================================================

import { sel } from "../core/global"

export function smoothScroll () {
  $('.menu-main__menu a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault()
      let hash = this.hash
      sel.$htmlBody.animate({
        scrollTop: $(hash).offset().top
      }, 800
      )
    }
  })
}
