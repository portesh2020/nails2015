$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if(wScroll > $('.gallery').offset().top -

  ($(window).height() / 1.2)) {

    $('.gallery figure').each(function(i){

      setTimeout(function(){
        $('.gallery figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));

    });

  }

});
