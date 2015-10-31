var pContainerHeight = $('.bird-boxes').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  //console.log(wScroll)

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /1.32 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /32 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /16 +'%)'
    });

    $('.fore-bird-lefty').css({
      'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
    });

    $('.barshade').css({
      'transform' : 'translate(0px, '+ wScroll / 5.2 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
    //console.log('hi top');
    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){
    //console.log('yo');
    $('.large-window').css({'background-position':'center '+ (wScroll - 2000 - $('.large-window').offset().top) * 1 +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 200) / (wScroll / 6);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
