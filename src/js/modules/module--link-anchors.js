// =============================================================================
// Smooth Scroll
// =============================================================================

import { _bundle } from '../core/core--bundles';

export const linkAnchors = function(instanceSettings) {
  const root = {
    settings: {
      element: null,
      offset: 0,
      offsetElement: null,
      offsetNudge: 0
    },
    instance: {
      settings: instanceSettings
    },
    public: {}
  };

  let s;
  let element;
  let offset;
  let offsetElement;
  let offsetNudge;
  let $offsetElement;
  let $element;

  function _mergeSettings() {
    s = Object.assign({}, root.settings, root.instance.settings);
  }

  function _cacheSelections() {
    ({ element, offset, offsetElement, offsetNudge } = s);
    $element = $(element);
    $offsetElement = $(offsetElement);
  }

  function _scroll() {
    $element.on('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        const { hash } = this;
        const elOffset = $offsetElement.outerHeight()
          ? $offsetElement.outerHeight()
          : s.offset;

        $('html,body').animate(
          {
            scrollTop: $(hash).offset().top - elOffset + offsetNudge
          },
          800
        );
      }
    });
  }

  function init() {
    _mergeSettings();
    _cacheSelections();
    _scroll();
  }

  init();
  return root.public;
};
