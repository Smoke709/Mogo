(function ($) {
  //search-bar init
  $('.search-icon').click(function () {
    $('.search-bar').toggleClass('active');
  });
  $('.close-btn').click(function () {
    $('.search-bar').removeClass('active');
  });

  //automatic count on scroll
  var counted = 0;
  $(window).scroll(function () {

    var oTop = $('.counter-box').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-number');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 5000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      counted = 1;
    }

  });

  //mCustomScrollbar init
  $(window).on('load', function () {
    $('.accordion-body').mCustomScrollbar({
      theme: "my-theme",
      scrollInertia: 500,
      scrollEasing: "easeOut"
    });
  });

  //slick slider init
    $('.qoutes-section-contents').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
      dots: false,
      prevArrow: "<i class='fa fa-angle-left prev'></i>",
      nextArrow: "<i class='fa fa-angle-right next'></i>",
    });

    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
      dots: false,
      prevArrow: "<i class='fa fa-angle-left prev'></i>",
      nextArrow: "<i class='fa fa-angle-right next'></i>",
    });

    //responsive navbar
    let menu = document.querySelector('.navbar-menu')
    let menuBtn = document.querySelector('.menu-btn')
    let closeBtn = document.querySelector('.close-btn')

    menuBtn.addEventListener('click', ()=> {
      menu.classList.add('active');
 })
 
 closeBtn.addEventListener('click', ()=>{
     menu.classList.remove('active');
 })

 //navigation bg-color change on scroll
 $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if (scroll > 1050){
     $('.header-section').css("background", "rgb(149, 225, 211)")
   }
   else{
     $('.header-section').css("background", "transparent")
   }
 })

 //magnific popup gmap
 $('.popup-gmap').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});
$('.popup-img').magnificPopup({
  disableOn: 700,
  type: 'image',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});

})(jQuery);
