import { _bundle } from '../core/core--bundles'

export let scrollpoints = function (instanceSettings) {
  let root = {
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
      callbackInactivePost: false
    },
    instance: {
      settings: instanceSettings
    },
    public: {}
  }

  function init () {
    _mergeSettings()
    _cacheSelections()
    _checkScrollpoint()
    _debugVisually()
  }

  let s, scrollpoint, debugTrigger

  function _mergeSettings () {
    s = Object.assign({}, root.settings, root.instance.settings)
  }

  function _cacheSelections () {
    scrollpoint = $(s.scrollpoint)
  }

  function _debugVisually () {
    debugTrigger = '<div class="scrollpoint__trigger"></div>'
    $('body').append(debugTrigger)
  }

  function _checkScrollpoint () {

// let vhHeight = window.innerHeight
    scrollpoint.each(function (index, el) {
      let $el = $(el)
      let offset = ($(s.elementOffset).outerHeight()) ? $(s.elementOffset).outerHeight() : s.offset
      let spFromTop = $el.offset().top - offset
      let spHeight = el.offsetHeight


      _bundle._add({name: 'Test', event: ['on:Scroll'], fn: function () {

        // let offset = ($(s.elementOffset))
        let amountScrolled = window.pageYOffset
        let trigger = amountScrolled + offset
        let spTouchesTrigger = amountScrolled >= spFromTop
        let spNotPassedTrigger = amountScrolled <= spFromTop + spHeight


        if (s.direction === 'down') {
          console.log(spTouchesTrigger, amountScrolled + ' >= ' + spFromTop)
          if (spTouchesTrigger) {
            if (s.callbackActivePre) s.callbackActivePre()
            $el.addClass(s.classActive)
            if (s.callbackActivePost) s.callbackActivePost()
          } else {
            if (s.callbackInactivePre) s.callbackInactivePre()
            $el.removeClass(s.classActive)
            if (s.callbackInactivePost) s.callbackInactivePost()
          }
        }
        if (s.direction === 'both') {
          if (spTouchesTrigger && spNotPassedTrigger) {
            if (s.callbackActivePre) s.callbackActivePre()
            $el.addClass(s.classActive)
            if (s.callbackActivePost) s.callbackActivePost()
          } else {
            if (s.callbackInactivePre) s.callbackInactivePre()
            $el.removeClass(s.classActive)
            if (s.callbackInactivePost) s.callbackInactivePost()
          }
        }

        if (s.debug) {
          $('.scrollpoint__trigger').css('top', trigger + 'px')
        }


      }})
    })
  }

  let scrollPosition = $(window).scrollTop()
  function _setBodyClasses () {
    // should start at 0
    let scroll = $(window).scrollTop()
    if (scroll > scrollPosition) {
      $('body')
        .addClass('scrollpoint-scrolling-down')
        .removeClass('scrollpoint-scrolling-up')
    } else {
      $('body')
        .addClass('scrollpoint-scrolling-up')
        .removeClass('scrollpoint-scrolling-down')
    }
    scrollPosition = scroll
  }

  _bundle._add({
    name: 'In Module: Scrollpoint',
    event: ['on:Scroll'],
    fn: function () {
      _setBodyClasses()
    }
  })

  init()
  return root.public
}
