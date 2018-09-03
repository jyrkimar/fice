jQuery(function () {
  // load fallback css for ie7, ie8
  function adjustStyle(width) {
    width = parseInt(width);
    if ((width > 0) && (width < 767)) {
      jQuery('#local-stylesheet').attr('href', 'fileadmin/templates/css/narrow.css');
    } else if ((width > 768) && (width < 959)) {
      jQuery('#local-stylesheet').attr('href', 'fileadmin/templates/css/medium.css');
    } else if (width >= 960) {
      jQuery('#local-stylesheet').attr('href', 'fileadmin/templates/css/wide.css');
    }
  }
  jQuery(function () {
    if (jQuery.browser.msie && jQuery.browser.version < 9) {
      //alert(jQuery.browser.version);
      adjustStyle(jQuery(this).width());
      jQuery(window).resize(function () {
        adjustStyle(jQuery(this).width());
      });
    }
  });
  // Slideshow 3
  /*
  jQuery("#slider3").responsiveSlides({
  auto: true,
  pager: false,
  nav: true,
  speed: 500,
  namespace: "callbacks"
  });
  */
}); // dom ready
jQuery(document).ready(function (e) {
  jQuery('.callbacks li').each(function () {
    var imgTitle = jQuery(this).find('img').attr('title');
    jQuery(this).find('.caption h2').parent().prepend('<h1>' + imgTitle + '</h1>');
  });
  var calMonth;
  jQuery('.tx-cal-controller dt.vevent').each(function (n) {
    calMonth = jQuery(this).find('.dtstart span').text();
    switch (calMonth) {
      case 'January':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'February':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'March':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'April':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'May':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'June':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'July':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'August':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'September':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'October':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'November':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'December':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
        // German Months      
      case 'Januar':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'Februar':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'M�rz':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>März</h4>');
        break;
      case 'März':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'Mai':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'Juni':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'Juli':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'Oktober':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
      case 'Dezember':
        jQuery(this).addClass(calMonth);
        jQuery('.' + calMonth).first().prepend('<h4>' + calMonth + '</h4>');
        break;
    };
  });
  jQuery('.tx-cal-controller dt.vevent').find('h4').hide();
  jQuery('.tx-cal-controller dt.vevent').find('h4:first-child').show();
  jQuery('#calendar-event-details > div').each(function (n) {
    jQuery(this).addClass('calDetails' + n);
  });
  jQuery('#calendar-event-details > h1').remove();
  setTimeout(function () {
    jQuery('.navbar > ul > li').each(function () {
      var menuliWidth = jQuery(this).outerWidth(true);
      jQuery(this).find('.dropdown').css('min-width', menuliWidth);
      if (jQuery.browser.msie) {
        if (jQuery.browser.version > 8) {
          jQuery(this).find('.dropdown').css('min-width', menuliWidth - 1);
        }
      };
    });
    jQuery(window).resize(function () {
      jQuery('.navbar > ul > li').each(function () {
        var menuliWidth = jQuery(this).outerWidth(true);
        jQuery(this).find('.dropdown').css('min-width', menuliWidth);
        if (jQuery.browser.msie) {
          if (jQuery.browser.version > 8) {
            jQuery(this).find('.dropdown').css('min-width', menuliWidth - 1);
          };
        };
      });
    });
  }, 800);
  jQuery('.navbar a.toggle').click(function (e) {
    jQuery(this).parent().children('ul').slideToggle(100);
  });
});
