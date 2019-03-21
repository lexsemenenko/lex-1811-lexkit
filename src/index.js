// JS Goes here - ES6 supported

import './css/main.less'

// Import Core
import _events from './js/core/core--events'
import { sel } from './js/core/global'

// Import Modules

// Import Modules
import { collapsibles } from './js/modules/module--collapsibles.js'

// Import Site Specific
import { smoothScroll } from './js/site/smooth-scroll'
import { pageHeader } from './js/site/page-header'
import { menuScroll } from './js/site/menu-scroll'

let lexkit = function () {
  // Commonly needed objects

  // Fire Modules
  let menuMain = collapsibles({
    block: '.menu-mobile',
    elemToggle: '.menu-mobile__toggle',
    elemContent: '.menu-mobile__content',
    closeOutside: false,
    closeAnyClick: true,
    callbackOpenPost: function () {
      // console.log("Menu Open");
    },
    callbackClosePost: function () {
      // console.log("Menu Closed");
    }

  })
  // menuMain.setName("Lex");

  // Site Specific
  menuScroll()
  pageHeader()
  smoothScroll()
}

$(document).ready(function () {
  window._lxGlobal = lexkit()
})
