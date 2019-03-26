// JS Goes here - ES6 supported

import './css/main.less'

// Import a module for its side effects only. This runs module globally
// without importing any values
import './js/core/core--events-custom'
import { _Base } from './js/core/core--base'
import { _bundle } from './js/core/core--bundles'

// Import Library
import { _libraryArray } from './js/library/library--array'

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

  bp.setSettings({
    breakpointsArray: ['small', 'large', 'widescreen']
  })

  _bundle._add({
    name: 'Breakpoints Test',
    event: ['on:Ready', 'on:Resize'],
    fn: function () {
      console.log(bp.match('small'), 'small', "down")
      console.log(bp.match('large'), 'large', "down")
      console.log(bp.match('widescreen'), 'widescreen', "down")
      console.log('========================')
      console.log(bp.match('small', 'up'), 'small', "up")
      console.log(bp.match('large', 'up'), 'large', "up")
      console.log(bp.match('widescreen', 'up'), 'widescreen', "up")
    }
  })

  // =============================================================================
  // Site Specific: Fire Modules
  // =============================================================================

  // _bundle._add({
  //   name: 'resizeEnd',
  //   event: ['on:ResizeEnd'],
  //   fn: function () {
  //     console.log(this.name)
  //   }
  // })
  // _bundle._add({
  //   name: 'Ready',
  //   event: ['on:Ready'],
  //   fn: function () {
  //     console.log(this.name)
  //   }
  // })
  // _bundle._add({
  //   name: 'Resize',
  //   event: ['on:Resize'],
  //   fn: function () {
  //     console.log(this.name)
  //   }
  // })
  // _bundle._add({
  //   name: 'Scroll',
  //   event: ['on:Scroll'],
  //   fn: function () {
  //     console.log(this.name)
  //   }
  // })

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
