import { _bundle } from '../core/core--bundles';

// Change Header on Scroll
// =============================================================================

export function pageHeader() {
  const pageHeader = $('#header');
  const pageHeaderHeight = pageHeader.outerHeight();

  _bundle._add({
    name: 'Site: PageHeader',
    event: ['on:ScrollDefault'],
    fn() {
      if ($(window).scrollTop() > pageHeaderHeight) {
        $('#header').addClass('active');
      } else {
        $('#header').removeClass('active');
      }
    },
  });
}
