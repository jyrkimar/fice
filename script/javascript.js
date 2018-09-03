var browserName = navigator.appName;
var browserVer = parseInt(navigator.appVersion);
var version = '';
var msie4 = (browserName == 'Microsoft Internet Explorer' && browserVer >= 4);
if ((browserName == 'Netscape' && browserVer >= 3) || msie4 || browserName == 'Konqueror' || browserName == 'Opera') {
  version = 'n3';
} else {
  version = 'n2';
}// Blurring links:

function blurLink(theObject) { //
  if (msie4) {
    theObject.blur();
  }
}
jQuery(document).ready(function () {
  jQuery('.fancybox').fancybox({
    'padding': 10,
    'margin': 20,
    'opacity': false,
    'modal': false,
    'cyclic': false,
    'scrolling': 'auto',
    'autoScale': true,
    'autoDimensions': true,
    'centerOnScroll': true,
    'hideOnOverlayClick': true,
    'hideOnContentClick': true,
    'overlayShow': true,
    'overlayOpacity': 0.3,
    'overlayColor': '#666',
    'titleShow': true,
    'titlePosition': 'over',
    'titleFormat': null,
    'transitionIn': 'fade',
    'transitionOut': 'fade',
    'speedIn': 300,
    'speedOut': 300,
    'changeSpeed': 300,
    'changeFade': 'fast',
    'easingIn': 'swing',
    'easingOut': 'swing',
    'showCloseButton': true,
    'showNavArrows': true,
    'enableEscapeButton': true,
    'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
      if (title.length > 0 || currentArray.length > 1) {
        var preCaption = '';
        if (currentArray.length > 1) {
          preCaption = 'Bild ' + (currentIndex + 1) + ' von ' + currentArray.length + (title.length ? ' : &nbsp; ' : '');
        }
        return '<span id="fancybox-title-over">' + preCaption + title + '</span>';
      }
      return false;
    }
  });
});
var spResponsiveSetup = [
];