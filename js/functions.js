$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

  $('drops').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

});

setTimeout(function(){ $('html, body').animate({
    scrollTop: $("h2").offset().top
}, 2500);
; }, 2000);

setTimeout()
