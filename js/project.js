// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  $.stickyFooter(70);
  setHeaderShadow();

  $('#passengers').slider({
    min: 1,
    max: 6,
    value: 1
  });

  /* some custom settings */
  $('.slider').iosSlider({
    snapToChildren: true,
    navSlideSelector: '.slider .bulls .bulls_i',
    onSlideChange: function(args) {
      if (args.currentSlideNumber) {
        $('.slider .bulls .bulls_i').removeClass('bulls_i__current');
        $('.slider .bulls .bulls_i:eq(' + (args.currentSlideNumber - 1) + ')').addClass('bulls_i__current');
      }
    },    
  });  

  // ENQUIRE.JS
  // ----------------------------------------------------------------------------------------------------  
  var $body = $("body");

  function handlerFactory(className) {
    return {
      match: function() {
        $body.addClass(className);
      },
      unmatch: function() {
        $body.removeClass(className);
      }
    };
  }

  enquire
    .register("screen and (max-width: 640px)", handlerFactory("media_phone"))
    .register("screen and (min-width: 641px) and (max-width: 940px)", handlerFactory("media_tablet"))
    .listen();
  
});

// DOCUMENT SCROLL
// ----------------------------------------------------------------------------------------------------
$(document).scroll(function() {

  setHeaderShadow();

});

// WINDOW LOAD
// ----------------------------------------------------------------------------------------------------
$(window).load(function() {});

// WINDOW RESIZE
// ----------------------------------------------------------------------------------------------------
$(window).smartresize(function() {

  $.stickyFooter(70);

});

function setHeaderShadow() {
  var headerTop = $('#header').offset().top;
  if (headerTop != 0) {
    $('#header').addClass('header__shadow');
  } else {
    $('#header').removeClass('header__shadow');
  }
}