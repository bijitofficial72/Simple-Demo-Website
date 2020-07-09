
$('.slider-one').slick({
    autoplay: true,
    autoplaySpeed : 1000,
  
    prevArrow: false,
    nextArrow: false
});

   

  $('.center').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 4,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 4
        }
      }
    ]
  });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    variableWidth: true,
    centerPadding: '30px',
  });
      












