// JS Goes here - ES6 supported

import './css/main.less';

// Import a module for its side effects only. This runs module globally
// without importing any values
import './js/core/core--events-custom';
import { _bundle } from './js/core/core--bundles';

// Import Modules
import { collapsibles } from './js/modules/module--collapsibles';
import { bp } from './js/modules/module--breakpoints';
// import { sectionHeight } from './js/modules/module--section-height';
import { scrollpoints } from './js/modules/module--scrollpoints';

// Import Site Specific
import { smoothScroll } from './js/site/smooth-scroll';
import { pageHeader } from './js/site/page-header';
import { menuScroll } from './js/site/menu-scroll';

// =============================================================================
// =============================================================================
// =============================================================================

let lexkit;
lexkit = function () {
  $(document).ready(() => { $.event.trigger('on:Ready'); });

  // =============================================================================
  // Site Specific: Fire Modules
  // =============================================================================

  // sectionHeight.setSettings({
  //   selector: '.section--height'
  // })

  scrollpoints({
    scrollpoint: '.scrollpoint',
    classActive: 'active',
    elementOffset: '#header',
    direction: 'both',
    debug: false
  });

  scrollpoints({
    scrollpoint: '.scrollpoint--menu-anchor',
    classActive: 'active',
    elementOffset: '#header',
    // offset: 0,
    debug: false,
    direction: 'down',
    callbackActivePost() {
      const _this = this;
      const sp = $(_this.scrollpoint);
      sp.css('top', `${$(_this.elementOffset).outerHeight()}px`);
      $('body').css('padding-top', `${sp.height()}px`);
    },
    callbackInactivePost() {
      const _this = this;
      const sp = $(_this.scrollpoint);
      sp.css('top', 'auto');
      $('body').css('padding-top', '0');
    },
  });

  bp.setSettings({
    breakpointsArray: ['small', 'large', 'widescreen'],
  });


  collapsibles({
    block: '.menu-mobile',
    elemToggle: '.menu-mobile__toggle',
    elemContent: '.menu-mobile__content',
    closeOutside: false,
    closeAnyClick: true,
    callbackOpenPost() {
    },
    callbackClosePost() {
    },
  });

  $('.overlay--toggle').each(function () {
    const $thisOverlayBlock = $(this)[0];
    collapsibles({
      block: $thisOverlayBlock,
      elemToggle: '.overlay__toggle',
      elemContent: '.overlay__content',
      closeOutside: true,
      closeAnyClick: false,
    });
  });

  menuScroll();
  pageHeader();
  smoothScroll();

  // =============================================================================
  // Framework Bottom
  // =============================================================================

  _bundle.fire();
};

$(document).ready(() => {
  window._lxGlobal = lexkit();
});
