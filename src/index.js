// JS Goes here - ES6 supported

import './css/main.less'

// Import a module for its side effects only. This runs module globally
// without importing any values
import './js/core/core--events-custom'
import { _bundle } from './js/core/core--bundles'

// Import Modules
import './js/modules/module--breakpoints'
import { collapsibles } from './js/modules/module--collapsibles'
import { sectionHeight } from './js/modules/module--section-height'
import { bp } from './js/modules/module--breakpoints'

// Import Site Specific
import { smoothScroll } from './js/site/smooth-scroll'
import { pageHeader } from './js/site/page-header'
import { menuScroll } from './js/site/menu-scroll'

// =============================================================================
// =============================================================================
// =============================================================================

let lexkit
lexkit = function () {
  $(document).ready(function () { $.event.trigger('on:Ready') })

  // =============================================================================
  // Site Specific: Fire Modules
  // =============================================================================

  bp.setSettings({
    breakpointsArray: ['small', 'large', 'widescreens']
  })

  collapsibles({
    block: '.menu-mobile',
    elemToggle: '.menu-mobile__toggle',
    elemContent: '.menu-mobile__content',
    closeOutside: false,
    closeAnyClick: true,
    callbackOpenPost: function () {
    },
    callbackClosePost: function () {
    }
  })

  $('.overlay--toggle').each(function () {
    let $thisOverlayBlock = $(this)[0]
    collapsibles({
      block: $thisOverlayBlock,
      elemToggle: '.overlay__toggle',
      elemContent: '.overlay__content',
      closeOutside: true,
      closeAnyClick: false
    })
  })

  menuScroll()
  pageHeader()
  smoothScroll()

  // =============================================================================
  // Framework Bottom
  // =============================================================================

  _bundle.fire()
}

$(document).ready(function () {
  window._lxGlobal = lexkit()
})
