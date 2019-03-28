//= =============================================================================
// Module: Section Height
//= =============================================================================

import { _bundle } from '../core/core--bundles'
import { bp} from "./module--breakpoints";

export let sectionHeight = (function () {

  let options = {
    name: 'Section Height',
    selectorselector: '.section--height',
    height: null,
    offsetElements: false,
    mingHeight: false,
    breakpoint: 'small',
    breakpointDir: 'up'
  }
  let s

  function _mergeSettings (optionsPassed) {
    s = Object.assign({}, options, optionsPassed)
  }

  function _setHeight () {
    let el = $(s.selector)
    let elOffset = $(s.offsetElements)
    let offsetHeight = elOffset.outerHeight()
    let pageHeight = window.innerHeight
    let sectionHeight = pageHeight
    if ( s.offsetElements) sectionHeight = pageHeight - offsetHeight

    if (bp.match(s.breakpoint, s.breakpointDir)) {
      el.css('min-height', sectionHeight + 'px');
    } else {
      el.css('min-height', 'auto')
    }
  }

  _bundle._add({
    name: 'Module: Section Height',
    event: ['on:Ready', 'on:Resize'],
    fn: function () {
      // _setHeight()
    }
  })

  return {
    setSettings: function (s) {
      _mergeSettings(s)
    }
  }
})()