// ==============================================================================
// Module: Breakpoints
// ==============================================================================

export const bp = (function() {
  const options = {
    elPassing: 'body',
    breakpointsArray: null,
  };
  let s;
  let currentBreakpoint;

  function _mergeSettings(optionsPassed) {
    s = Object.assign({}, options, optionsPassed);
  }

  function _getCurrentBreakpoint() {
    currentBreakpoint = window
      .getComputedStyle($(s.elPassing)[0], ':before')
      .getPropertyValue('content')
      .replace(/\"/g, ''); // remove quotes
    return currentBreakpoint;
  }

  function _directons(breakpoint, direction) {
    const bpArray = s.breakpointsArray;
    const passed = bpArray.indexOf(breakpoint);
    const current = bpArray.indexOf(_getCurrentBreakpoint());
    if (direction === 'up') return current > passed;
    return current <= passed; // Downwards is default
  }

  return {
    match(bp, dir) {
      return _directons(bp, dir);
    },
    get() {
      return _getCurrentBreakpoint();
    },
    setSettings(s) {
      _mergeSettings(s);
    },
  };
})();
