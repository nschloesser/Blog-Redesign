// Responsive table method using display:block and data attributes
// Thanks to @leefroese for suggestion about data attributes

$('tr td:first-child').click(function () {
  if (!$(this).siblings().is(":visible")) {
    $(this).toggleClass( 'open');
    $(this).siblings().toggleClass( 'show_info');
  }
  else if ($(this).siblings('.show_info').length) {
    $(this).toggleClass( 'open');
    $(this).siblings().toggleClass( 'show_info');
  }
});