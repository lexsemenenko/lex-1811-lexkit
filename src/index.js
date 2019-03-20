// JS Goes here - ES6 supported

import './css/main.less'
import { smoothScroll } from './js/site/smooth-scroll'
import { pageHeader } from './js/site/page-header'
import { menuScroll } from './js/site/menu-scroll'

let lexkit = function () {
  // Core
  // Site Specific
  menuScroll()
  pageHeader()
  smoothScroll()
}

$(document).ready(function () {
  lexkit()
})
