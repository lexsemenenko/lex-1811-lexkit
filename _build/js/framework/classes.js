// =============================================================================
// Base Class
// =============================================================================

// Description:     Base class is simple class that allows shared methods
//                  between core classes.

function _Base(options) {
  Object.assign(this, options);
}

// =============================================================================
// Module
// =============================================================================

function _Module(options) {
  if (!this._name && this._module)
    console.error('Module error: "_name" or "_module" is undefined');
  Object.assign(this, options);
  return _modules._add(this);

  // console.log(module);
}
_system._inherit(_Base, _Module);
