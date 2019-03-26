// ==============================================================================
// Module: Breakpoints
// ==============================================================================

export let bp = (function () {
  let options = {
    elPassing: 'body',
    breakpointsArray: null
  }
  let s
  let currentBreakpoint

  function _mergeSettings (optionsPassed) {
    s = Object.assign({}, options, optionsPassed)
  }

  function _getCurrentBreakpoint () {
    currentBreakpoint = window
      .getComputedStyle($(s.elPassing)[0], ':before')
      .getPropertyValue('content')
      .replace(/\"/g, '') // remove quotes
    return currentBreakpoint
  }

  function _directons (breakpoint, direction) {
    let bpArray = s.breakpointsArray
    let passed = bpArray.indexOf(breakpoint)
    let current = bpArray.indexOf(_getCurrentBreakpoint())
    if (direction === 'up') return current > passed
    else return current <= passed // Downwards is default
  }

  return {
    match: function (bp,  dir) {
      return _directons(bp,  dir)
    },
    get: function () {
      return _getCurrentBreakpoint()
    },
    setSettings: function (s) {
      _mergeSettings(s)
    }
  }
})()
