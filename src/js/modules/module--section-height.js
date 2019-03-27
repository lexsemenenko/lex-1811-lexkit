//= =============================================================================
// Module: Section Height
//= =============================================================================

import { _bundle } from '../core/core--bundles';
import { bp } from './module--breakpoints';

export const sectionHeight = (function() {
  const options = {
    name: 'Section Height',
    selectorselector: '.section--height',
    height: null,
    offsetElements: false,
    mingHeight: false,
    breakpoint: 'small',
    breakpointDir: 'up',
  };
  let s;

  function _mergeSettings(optionsPassed) {
    s = Object.assign({}, options, optionsPassed);
  }

  function _setHeight() {
    const el = $(s.selector);
    const elOffset = $(s.offsetElements);
    const offsetHeight = elOffset.outerHeight();
    const pageHeight = window.innerHeight;
    let sectionItemHeight = pageHeight;
    if (s.offsetElements) sectionItemHeight = pageHeight - offsetHeight;

    if (bp.match(s.breakpoint, s.breakpointDir)) {
      el.css('min-height', `${sectionItemHeight}px`);
    } else {
      el.css('min-height', 'auto');
    }
  }

  _bundle._add({
    name: 'Module: Section Height',
    event: ['on:Ready', 'on:Resize'],
    fn() {
      _setHeight();
    },
  });

  return {
    setSettings(s) {
      _mergeSettings(s);
    },
  };
})();
