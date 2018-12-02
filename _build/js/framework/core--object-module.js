// =============================================================================
// Modules Object
// =============================================================================

// Setup
// =============================================================================

var _modules = new _Base();
_modules.modulesAdded = new _Base();

// Methods
// =============================================================================

_modules._add = function(module) {
  var _this = this;

  if (!module._name || !module._init) {
    var message = !module._name
      ? "Module Error: Missing _name"
      : "Module Error: Missing module _init";
    console.error(message, module);
    return;
  }

  if (_this.modulesAdded[module._name.toLowerCase()]) {
    console.error("Module Error: Module name already exists", module);
    return;
  }

  module._name = module._name.toLowerCase();
  _this.modulesAdded[module._name] = module; // Adding main modules object

  return module;
};

_modules._fireModule = function() {
  var item = _modules.modulesAdded;
  for (var key in item) {
    if (item.hasOwnProperty(key)) {
      item[key]._init();
    }
  }
};
