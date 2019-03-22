// JS Goes here - ES6 supported

import './css/main.less'

// Import Core
// Import Modules
import { collapsibles } from './js/modules/module--collapsibles.js'

// Import Site Specific
import { smoothScroll } from './js/site/smooth-scroll'
import { pageHeader } from './js/site/page-header'
import { menuScroll } from './js/site/menu-scroll'

// =============================================================================
// =============================================================================
// =============================================================================
// TEMPORARY FUNCTION HERE
var anyMatchInArray = function (target, toMatch) {
  "use strict";
  var found, targetMap, i, j, cur;
  found = false;
  targetMap = {};
  // Put all values in the `target` array into a map, where
  //  the keys are the values from the array
  for (i = 0, j = target.length; i < j; i++) {
    cur = target[i];
    targetMap[cur] = true;
  }
  // Loop over all items in the `toMatch` array and see if any of
  //  their values are in the map from before
  for (i = 0, j = toMatch.length; !found && (i < j); i++) {
    cur = toMatch[i];
    found = !!targetMap[cur];
    // If found, `targetMap[cur]` will return true, otherwise it
    //  will return `undefined`...that's what the `!!` is for
  }
  return found;
};
// https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
// =============================================================================
// =============================================================================
// =============================================================================

let lexkit
lexkit = function () {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // =============================================================================
  // =============================================================================
  // =============================================================================
  // BASE
  function _Base (options) {
    Object.assign(this, options)
  }
  // =============================================================================
  // =============================================================================
  // =============================================================================
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // =============================================================================
  // =============================================================================
  // =============================================================================
  //  Core: Events
  // =============================================================================
  // on:Ready
  $(document).ready(function (event) {
    $.event.trigger('on:Ready')
  })

  // on:Resize
  $(window).on('resize', function (event) {
    $.event.trigger('on:Resize')
  });

  // on:Scroll
  $(window).on('scroll', function (event) {
    $.event.trigger('on:Scroll')
  });

  // on:ResizeEnd
  (function () {
    var rtime
    var timeout = false
    var delta = 200

    $(window).resize(function () {
      rtime = new Date()
      if (timeout === false) {
        timeout = true
        setTimeout(resizeEnd, delta)
      }
    })

    function resizeEnd () {
      if (new Date() - rtime < delta) {
        setTimeout(resizeEnd, delta)
      } else {
        timeout = false
        $.event.trigger('on:ResizeEnd')
      }
    }
  })()
  // =============================================================================
  // =============================================================================
  // =============================================================================
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // =============================================================================
  // =============================================================================
  // =============================================================================
  // Bundles
  // Description:     A bundle is an array of functions. Each item in the array is
  //                  an array of (name [optional], weight [optional], the function).
  //                  These functions will be fired in sequence when the target event
  //                  happens, or they can be fired manually (without an event) if
  //                  useful
  // Naming:
  //                  Bundle = The array that holds th bundleItems
  //                  BundleName = The property name where the bundle array is stored
  //                  Task = The object for each task
  //                  TaskName = The name for a given task (bundleTask.name)
  //                  TaskFn or TaskFunction = The function inside a bundle task
  //
  // Main Methods
  // =============================================================================
  // =============================================================================
  // Setup
  // =============================================================================
  let _bundle = new _Base()

  // Available Framework Events from Core Events
  // =============================================================================
  //                  Collected them into an Array for looping in bundles against
  //                  what's available

  _bundle._customEventsAvailable = [
    'on:Ready',
    'on:Resize',
    'on:ResizeEnd',
    'on:Scroll'
  ]

  // Run Bundle
  // =============================================================================

  _bundle._bundlesStorage = []
  _bundle._add = function (bundleObj) {
    _bundle._bundlesStorage.push(bundleObj)
  }

  _bundle._add({
    name: 'resizeEnd',
    event: ['on:ResizeEnd'],
    fn: function () {
      console.log(this.name)
    }
  })
  _bundle._add({
    name: 'Ready',
    event: ['on:Ready'],
    fn: function () {
      console.log(this.name)
    }
  })
  _bundle._add({
    name: 'Resize',
    event: ['on:Resize'],
    fn: function () {
      console.log(this.name)
    }
  })
  _bundle._add({
    name: 'Scroll',
    event: ['on:Scroll'],
    fn: function () {
      console.log(this.name)
    }
  })

  _bundle.fire = function () {
    _bundle._bundlesStorage.forEach(function (eachBundle) {
      // Fire each bundle's function if events in bundles and events available cross
      if (anyMatchInArray(_bundle._customEventsAvailable, eachBundle.event)) {
        eachBundle.event.map( function(event) {

          // When we fire eachBundle, we bound the bundle's 'this' to it,
          // This way, inside each bundle's main function, we make 'this' refer to
          // each bundles object
          let boundFunction = (function() {
            eachBundle.fn()
          }).bind(eachBundle);
          // Call eachBundle functions with bound 'this'
          $(document).on(event, boundFunction)
        })
      }
    })
  }
  _bundle.fire()

  // =============================================================================
  // =============================================================================
  // =============================================================================
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // $(document).on("on:ResizeEnd", function () {
  //   _bundle.fire()
  // })
  // $(document).on("on:Resize", function () {
  //   _bundle.fire()
  // })

  // =============================================================================
  // =============================================================================
  // Site Specific: Fire Modules
  // =============================================================================
  // =============================================================================

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
}

$(document).ready(function () {
  window._lxGlobal = lexkit()
})
