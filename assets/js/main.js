let dropdownUsd = document.querySelector('.USD')
let dropdownSell = document.querySelector('#sell')

dropdownUsd.addEventListener('click',function(){
    let elementUSD = document.querySelector('.header-top-dropdown-first')
    elementUSD.classList.toggle('dropdown-headertop-usd')
})

dropdownSell.addEventListener('click',function(){
    let elementSell = document.querySelector('.header-top-dropdown-second')
    elementSell.classList.toggle('dropdown-headertop-sell')
})


$(document).ready(function(){
    $('.sliders').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    //   var clock = $('.clock').FlipClock({
    //     clockFace: 'DailyCounter',
    //     autoStart: false,
    //     callbacks: {
    //       stop: function() {
    //         $('.message').html('The clock has stopped!')
    //       }
    //     }
    // });
      });
     
