// JS Goes here - ES6 supported

import "./css/main.less";

var lexkit = function () {
  // Framework Variables
  var _g,
    _system = {};

  var $window = $(window);


  // =============================================================================
  // Site Specific
  // =============================================================================    

  // Change Header on Scroll
  // =============================================================================

  var pageHeader = $('#header'),
    pageHeaderHeight = pageHeader.outerHeight();

  console.log(pageHeaderHeight);

  $window.on("scroll", function () {

    if ($window.scrollTop() > pageHeaderHeight) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });


};

$(document).ready(function () {
  lexkit();
});