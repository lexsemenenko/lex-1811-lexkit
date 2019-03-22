// JS Goes here - ES6 supported

import './css/main.less'

// Import Core
// Import Modules
import { collapsibles } from './js/modules/module--collapsibles.js'

// Import Site Specific
import { smoothScroll } from './js/site/smooth-scroll'
import { pageHeader } from './js/site/page-header'
import { menuScroll } from './js/site/menu-scroll'

let lexkit = function () {
  // Commonly needed objects

  // Fire Modules
  // =============================================================================

  collapsibles({
    block: '.menu-mobile',
    elemToggle: '.menu-mobile__toggle',
    elemContent: '.menu-mobile__content',
    closeOutside: false,
    closeAnyClick: true,
    callbackOpenPost: function () {},
    callbackClosePost: function () {}
  })
  // menuMain.setName("Lex");


  $( ".overlay--toggle" ).each(function() {

    let $thisOverlayBlock = $(this)[0];

    collapsibles({
      block: $thisOverlayBlock,
      elemToggle: '.overlay__toggle',
      elemContent: '.overlay__content',
      closeOutside: true,
      closeAnyClick: false,
    })

  });




  // Site Specific
  menuScroll()
  pageHeader()
  smoothScroll()
}

$(document).ready(function () {
  window._lxGlobal = lexkit()
})
