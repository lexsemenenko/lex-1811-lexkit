import { _bundle } from '../core/core--bundles';

// Change Header on Scroll
// =============================================================================

export function pageHeader() {
  _bundle._add({
    name: 'Site: PageHeader',
    event: ['on:ScrollDefault', 'on:Ready'],
    fn() {
      if ($(window).scrollTop() > $('#header').outerHeight()) {
        $('#header').addClass('active');
      } else {
        $('#header').removeClass('active');
      }
    },
  });
}
