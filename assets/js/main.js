let getMoneyDropDown = document.getElementById("money");
let getSellDropDown = document.getElementById("sell");

getMoneyDropDown.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".sell-dropdown").classList.remove("d-block");
  document.querySelector(".money-dropdown").classList.toggle("d-block");
});
getSellDropDown.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".money-dropdown").classList.remove("d-block");
  document.querySelector(".sell-dropdown").classList.toggle("d-block");
});
$(document).ready(function () {
  $(".button-all-categories").click(function (e) {
    e.preventDefault();
    $(".all-catogories-catalog").slideToggle();
  });

});


$(document).ready(function(){
  $(".product-list").owlCarousel({
    margin: 10,
    nav:true,
    items: 3
  });
  
  $(".categories-list").owlCarousel({
    nav: true,
    margin: 10,
    dots: false,
    items: 5
  });

  
  

   
  });

  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:`
    <button type="button" class="main-slider-prev"><i class="fa-solid fa-angle-left"></i></button>
    `,
    nextArrow:`
    <button type="button" class="main-slider-next"><i class="fa-solid fa-angle-right"></i></button>
    `,

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

$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:false,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.popular-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});


$('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
     }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
   }
    }]
  });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});



var minus=document.querySelector('#minus');
var plus=document.querySelector('#plus');
let changePraductCount=0



let btns=document.querySelectorAll("#btn-tab-menu");
let content =document.querySelectorAll(".content-nav div")


for(var btn of btns){
  btn.addEventListener("click",function(e){
    let activ=document.querySelector('.active-tab')   
    activ.classList.remove('active-tab')
    e.target.classList.add("active-tab")    

    var index = e.target.getAttribute("data-id")
    for(var div of content){
      if(div.getAttribute('data-id')===index){
        div.classList.remove('d-none')
      }
      else{
        div.classList.add('d-none')
      }
    }

    
   

  })
}

//Basket 
let addToCartBtns = document.querySelectorAll("#add-to-basket");
let basketCount = document.querySelector("#shopping-count")

let products = JSON.parse(localStorage.getItem("products"));

if (products == null) {
    localStorage.setItem("products", JSON.stringify([]));
    products = [];
}


function updateBasketCount() {
    let products = JSON.parse(localStorage.getItem("products"));
    basketCount.innerText = products.length;
}

updateBasketCount();

function addToBasket(el) {
    let parent = el.parentElement.parentElement.parentElement.parentElement;
    let productId = parent.id;
    let productImage = parent.querySelector(".product-img").src;
    let productTitle = parent.querySelector(".product-name").innerText;
    let productPrice = parent.querySelector("span .product-price").innerText;

    let product = products.find(p => p.id == productId);

    if (product === undefined) {
        products.push({
            id : productId,
            image: productImage,
            title: productTitle,
            price: productPrice,
            count: 1
        })
    }else {
        product.count = +product.count + 1;
    }

    localStorage.setItem("products", JSON.stringify(products));

    updateBasketCount();
}

addToCartBtns.forEach(cartBtn => {
    cartBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        addToBasket(ev.target)
    })
})


let categoryToggleBtn = document.querySelector(".drpdwn-category");

categoryToggleBtn.addEventListener("click", () => {
  $(".category-menu").slideToggle();
})

let scrollToTopBtn = document.querySelector(".scroll-to-top");

window.onscroll = () => {
  scrollToTopFunction();
  stickyHeader();
}

function scrollToTopFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

let header = document.querySelector(".header-bottom");
let sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}


scrollToTopBtn.addEventListener("click", () => {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
})
