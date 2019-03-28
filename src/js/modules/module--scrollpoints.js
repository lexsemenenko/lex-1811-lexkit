import { _bundle } from '../core/core--bundles';

export const scrollpoints = function(instanceSettings) {
  const root = {
    settings: {
      scrollpoint: null,
      classActive: null,
      elementOffset: null,
      offset: 0,
      watch: '.scrollpoint--watch',
      direction: 'both', // both or up or down
      debug: false,
      callbackActivePre: false,
      callbackActivePost: false,
      callbackInactivePre: false,
      callbackInactivePost: false,
    },
    instance: {
      settings: instanceSettings,
    },
    public: {},
  };

  let s;
  let scrollpoint;
  let debugTrigger;

  function _mergeSettings() {
    s = Object.assign({}, root.settings, root.instance.settings);
  }

  function _cacheSelections() {
    scrollpoint = $(s.scrollpoint);
  }

  function _debugVisually() {
    debugTrigger = '<div class="scrollpoint__trigger"></div>';
    $('body').append(debugTrigger);
  }

  function _checkScrollpoint() {
    // let vhHeight = window.innerHeight
    scrollpoint.each(function(index, el) {
      const $el = $(el);
      const offset = $(s.elementOffset).outerHeight()
        ? $(s.elementOffset).outerHeight()
        : s.offset;
      const spFromTop = $el.offset().top - offset;
      const spHeight = el.offsetHeight;

      _bundle._add({
        name: 'In Module: Scrollpoints Inside .each',
        event: ['on:ScrollDefault'],
        fn() {
          // let offset = ($(s.elementOffset))
          const amountScrolled = window.pageYOffset;
          const trigger = amountScrolled + offset;
          const spTouchesTrigger = amountScrolled >= spFromTop;
          const spNotPassedTrigger = amountScrolled < spFromTop + spHeight;

          if (s.direction === 'down') {
            // console.log(spTouchesTrigger, amountScrolled + ' >= ' + spFromTop)
            if (spTouchesTrigger) {
              if (s.callbackActivePre) s.callbackActivePre();
              $el.addClass(s.classActive);
              if (s.callbackActivePost) s.callbackActivePost();
            } else {
              if (s.callbackInactivePre) s.callbackInactivePre();
              $el.removeClass(s.classActive);
              if (s.callbackInactivePost) s.callbackInactivePost();
            }
          }
          if (s.direction === 'both') {
            if (spTouchesTrigger && spNotPassedTrigger) {
              if (s.callbackActivePre) s.callbackActivePre();
              $el.addClass(s.classActive);
              if (s.callbackActivePost) s.callbackActivePost();
            } else {
              if (s.callbackInactivePre) s.callbackInactivePre();
              $el.removeClass(s.classActive);
              if (s.callbackInactivePost) s.callbackInactivePost();
            }
          }

          if (s.debug) {
            $('.scrollpoint__trigger').css('top', `${trigger}px`);
          }
        },
      });
    });
  }

  let scrollPosition = $(window).scrollTop();
  function _setBodyClasses() {
    // should start at 0
    const scroll = $(window).scrollTop();
    if (scroll > scrollPosition) {
      $('body')
        .addClass('scrollpoint-scrolling-down')
        .removeClass('scrollpoint-scrolling-up');
    } else {
      $('body')
        .addClass('scrollpoint-scrolling-up')
        .removeClass('scrollpoint-scrolling-down');
    }
    scrollPosition = scroll;
  }

  _bundle._add({
    name: 'In Module: Scrollpoints _setBodyClasses',
    event: ['on:Scroll'],
    fn() {
      _setBodyClasses();
    },
  });
  function init() {
    _mergeSettings();
    _cacheSelections();
    _checkScrollpoint();
    _debugVisually();
  }

  init();

  return root.public;
};
