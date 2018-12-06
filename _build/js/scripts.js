// @include lib/_includes.js
// @include lib/jquery/3.3.1/jquery.js

var lexkit = function() {
  // Framework Variables
  var _g,
    _system = {};

  // @include framework/system.js
  // @include framework/bundles.js
  // @include framework/events.js
  // @include framework/classes.js
  // @include framework/functions.js

  // @include framework/core--object-module.js
  // @include framework/modules.js

  // Assignments
  _g = new _Base();
  _g.system = _system;
  _g.modules = _modules;

  // Add core objects to global

  // _g.modules = _modules;

  // Import Modules
  // @include modules/module-fold.js
  // @include modules/module-test.js

  // Site Specific
  // @include site-specific/module-calls.js
  // @include site-specific/site-specific.js

  // [CHECK] Run Modules on Temporary here, should be in bundles
  $(document).on("on:Ready", _modules._fireModule);
  $(document).on("on:ResizeEnd", _modules._fireModule);
  $(document).on("on:Resize", _modules._fireModule);
};

$(document).ready(function() {
  lexkit();
});
