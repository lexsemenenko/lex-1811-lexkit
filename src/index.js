/* eslint-disable func-names */
// JS Goes here - ES6 supported

import './css/main.less';

// Import a module for its side effects only. This runs module globally
// without importing any values
import './js/core/core--events-custom';
import { _bundle } from './js/core/core--bundles';

// Import Modules
import { collapsibles } from './js/modules/module--collapsibles';
import { bp } from './js/modules/module--breakpoints';
import { scrollpoints, test } from './js/modules/module--scrollpoints';
import { linkAnchors } from './js/modules/module--link-anchors';

// =============================================================================
// =============================================================================
// =============================================================================

function lexkit() {
  $(document).ready(() => {
    $.event.trigger('on:Ready');
  });

  // sectionHeight.setSettings({
  //   selector: '.section--height'
  // })

  linkAnchors({
    element: '.menu-scroll a',
    offset: 0,
    // offsetElement: '#header',
    offsetNudge: 0
  });

  // Homepage Sections for sticky menu active classes
  scrollpoints({
    scrollpoint: '.scrollpoint',
    classActive: 'active',
    offset: 0,
    elementOffset: '#header',
    direction: 'both',
    debug: false,
    watch: '.scrollpoints-watch--menu'
  });

  // Sticky Functionality for Scrollpoints Menu
  scrollpoints({
    scrollpoint: '.scrollpoint--menu-anchor',
    classActive: 'active',
    // elementOffset: '#header',
    offset: 0,
    debug: false,
    direction: 'down',
    callbackActivePost() {
      const _this = this;
      const sp = $(_this.scrollpoint);
      // const height = `${$(_this.elementOffset).outerHeight()}px`;
      sp.css('top', 0);
      $('#header').addClass('active');
    },
    callbackInactivePost() {
      const _this = this;
      const sp = $(_this.scrollpoint);
      sp.css('top', '0');
      $('#header').removeClass('active');
    }
  });

  bp.setSettings({
    breakpointsArray: ['small', 'large', 'widescreen']
  });

  collapsibles({
    block: '.menu-mobile',
    elemToggle: '.menu-mobile__toggle',
    elemContent: '.menu-mobile__content',
    closeOutside: false,
    closeAnyClick: true,
    callbackOpenPost() {},
    callbackClosePost() {}
  });

  $('.overlay--toggle').each(function() {
    const $thisOverlayBlock = $(this)[0];
    collapsibles({
      block: $thisOverlayBlock,
      elemToggle: '.overlay__toggle',
      elemContent: '.overlay__content',
      closeOutside: true,
      closeAnyClick: false
    });
  });

  // =============================================================================
  // Framework Bottom
  // =============================================================================

  _bundle.fire();
}

$(document).ready(() => {
  window._lxGlobal = lexkit();
});
