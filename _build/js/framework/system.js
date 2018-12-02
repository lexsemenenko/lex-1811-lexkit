// =============================================================================
// System Object
// =============================================================================

_system.id = {
  count: 0 /* Counter for programs that need unique ID */,
  prefix: "lx-"
};

// Key Names
_system.keyNames = {
  "escape": 27,
  "end": 35,
  "home": 36,
  "left": 37,
  "right": 39,
  "up": 38,
  "down": 40
},

  // Methods
  // =============================================================================

  // Inherit
  // =====================================

  _system._inherit = function (parent, child, parentParams) {
    if (typeof parent !== 'function' || typeof child !== 'function') {
      console.error('Inherit can only be used with constructors', parent, child);
      return;
    }
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
    return child.prototype;
  };