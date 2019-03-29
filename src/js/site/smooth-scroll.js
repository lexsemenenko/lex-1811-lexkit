// =============================================================================
// Smooth Scroll
// =============================================================================

import { sel } from '../core/global';

export function smoothScroll() {
  $('.menu-scroll a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const { hash } = this;
      sel.$htmlBody.animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
}
