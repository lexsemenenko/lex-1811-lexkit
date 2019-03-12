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

  $window.on("scroll", function () {

    if ($window.scrollTop() > pageHeaderHeight) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });



  // Highlight Menu link
  // =============================================================================

  // Get all sections that have an ID defined
  var sections = document.querySelectorAll(".section--menu[id]");

  // Add an event listener listening for scroll
  $window.on("scroll", navHighlighter);

  function navHighlighter() {

    // Get current scroll position
    var scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(function (current) {
      var sectionHeight = current.offsetHeight;
      var sectionTop = current.offsetTop - pageHeaderHeight;
      var sectionId = current.getAttribute("id");

      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        $(".menu-main__menu a[href*=" + sectionId + "]").addClass("active");
      } else {
        $(".menu-main__menu a[href*=" + sectionId + "]").removeClass("active");
      }
    });
  }


  // Smooth Scroll
  // =============================================================================

  $('.menu-main__menu a').on('click', function (e) {

    if (this.hash !== '') {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800

      );
    }
  });

};

$(document).ready(function () {
  lexkit();
});