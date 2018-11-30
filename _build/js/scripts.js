// @include lib/_includes.js

var lexkit = function () {

  // Framework Variables
  var _g,
    _system = {};

  // @include framework/system.js
  // @include framework/bundles.js
  // @include framework/events.js
  // @include framework/classes.js
  // @include framework/functions.js
  // @include framework/modules.js

  // Assignments
  _g = new _Base();
  _g.system = _system;

  // Import Modules
  // @include modules/module-collapsible.js
  // @include modules/module-test.js

  // Site Specific
  // @include site-specific/module-calls.js
  // @include site-specific/site-specific.js

  function runModules() {
    _modulesAddedArray.forEach(function (item) {
      // Run init function of a module, and pasd itself (module instance) to the 
      // init function, so we can have module prototypes inside the function
      item.moduleObject.init.call(item);
    });
  }

  // [CHECK] Run Modules on Temporary here, should be in bundles
  $(document).on("on:Ready", runModules);
  $(document).on("on:ResizeEnd", runModules);
  $(document).on("on:Resize", runModules);
}


$(document).ready(function () {
  lexkit();
});