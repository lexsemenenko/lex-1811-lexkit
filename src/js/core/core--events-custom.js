// =============================================================================
//  Core: Events
// =============================================================================
//
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce (func, wait, immediate) {
  let timeout
  return function () {
    let context = this; let args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// on:Resize Debounced
$(window).on('resize', debounce(function () {
  $.event.trigger('on:Resize')
}, 150))

// on:Scroll Debounced
$(window).on('scroll', debounce(function () {
  $.event.trigger('on:Scroll')
}, 100));

// on:Scroll Default
$(window).on('scroll', function () {
  $.event.trigger('on:ScrollDefault')
});

// on:ResizeEnd
(function () {
  let rtime
  let timeout = false
  let delta = 200

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
