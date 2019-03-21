//= =============================================================================
// Module: collapsibles
//= =============================================================================

import events from '../core/core--events'

let collapsibles = function (instanceSettings) {
  'use strict'

  let root = {
    name: 'Collapsibles',
    settings: {
      block: '.dropdown',
      elemToggle: '.dropdown__toggle',
      elemContent: '.dropdown__content',
      classOpen: 'open',
      callbackBuildPost: false,
      callbackOpenPre: false,
      callbackOpenPost: false,
      callbackClosePre: false,
      callbackClosePost: false,
      callbackDestroyPost: false,
      closeOutside: false,
      closeAnyClick: false
    },
    public: {
      setName: setName
    },
    instance: {
      settings: instanceSettings
    }
  }

  function init () {
    _mergeSettings()
    _cacheSelections()
    _defaults()
    _bindEvents()
  }

  let s, block, elemToggle, elemContent, elemAll

  function _mergeSettings () {
    s = Object.assign({}, root.settings, root.instance.settings)
  }

  function _cacheSelections () {
    block = $(s.block)
    elemToggle = $(s.elemToggle)
    elemContent = $(s.elemContent)
    elemAll = block.add(elemToggle).add(elemContent)
  }

  function _defaults () {
    elemAll.attr('data-collapsible', 'open: false')
  }

  function _bindEvents () {
    elemToggle.on('click', _handle)
    $(document.body).on('click', _closeAnyClick)
  }

  function _close () {
    elemAll.removeClass(s.classOpen)
    elemAll.attr('data-collapsible', 'open: false')
    // Fire callback after close
    if (s.callbackClosePost) s.callbackClosePost()
  }

  function _open () {
    elemAll.addClass(s.classOpen)
    elemAll.attr('data-collapsible', 'open: true')
    // Fire callback after open
    if (s.callbackOpenPost) s.callbackOpenPost()
  }

  function _closeAnyClick (e) {
    function closeHelper (elExludesClosing) {
      // if the target of the click isn't the container && nor a descendant of the container
      if (!elExludesClosing.is(e.target) && elExludesClosing.has(e.target).length === 0) _close()
    }
    if (s.closeOutside) closeHelper(block)
    if (s.closeAnyClick) closeHelper(elemToggle)
  }

  function _handle () {
    if (!elemAll.hasClass(s.classOpen)) {
      _open()
    } else {
      _close()
    }
    // Send Data when triggering event
    events.trigger('collapsible', {
      hey: 'Hey',
      heya: 'Hey A'
    })
    // events.trigger('eventTwo', 'Clicked collapsibles three')
    // events.trigger('eventThree', 'Clicked collapsibles four')
  }

  function setName (newName) {
    name = newName
    // report(name);
  }

  init()
  return root.public
}

//                  Pass the main module namespace to a smaller
//                  module, so we can extend the main one from a smaller module.

let toggleAria = (function (collapsibles) {
  collapsibles.extension = function () {
    // report("extension");
  }
  return collapsibles
})(collapsibles || {})

export { collapsibles }
