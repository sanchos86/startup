import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'hamburgers/dist/hamburgers.css';
import '@/scss/index.scss';

import Typed from 'typed.js';
import AOS from 'aos';
import mixitup from 'mixitup';
import 'owl.carousel';

let $stickyNav = $('.sticky-nav');
let $menuTrigger = $('.hamburger');
let $mainNavList = $('.main-nav__list');

function updateScrolledNavProps() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $stickyNav.addClass('scrolled');
  } else {
    $stickyNav.removeClass('scrolled');
  }
}

function toggleNav() {
  $(this).toggleClass('is-active');
  $mainNavList.slideToggle();
}

function scrollTo() {
  let target = $(this).attr('href');
  let targetTop = $(target).offset().top;
  $('html, body').animate(
    {
      scrollTop: targetTop - 70,
    },
    750
  );
  return false;
}

function scrollToTarget() {
  let targetId = $(this).attr('href');
  let targetTop = $(targetId).offset().top;
  $('html, body').animate(
    {
      scrollTop: targetTop - 70,
    },
    750,
    () => {
      if (!($(window).width() > 884)) {
        $menuTrigger.removeClass('is-active');
        $mainNavList.slideUp();
      }
    }
  );
  return false;
}

updateScrolledNavProps();

$(window).on('scroll', updateScrolledNavProps);
$mainNavList.find('a').on('click', scrollToTarget);
$menuTrigger.on('click', toggleNav);
$('.header__link, .logo__link').on('click', scrollTo);

// Enable typed.js
if ($(window).width() >= 884) {
  new Typed('.element', {
    strings: ['startup', 'our site'],
    typeSpeed: 80,
    loop: true,
    startDelay: 400,
    backSpeed: 80,
    backDelay: 500,
  });
} else {
  $('.element').text('our site');
}

AOS.init({
  disable: window.innerWidth < 940,
  once: true
});

// About section carousel
$('#aboutCarousel').owlCarousel({
  nav: true,
  loop: true,
  dots: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    950: {
      items: 4,
    },
    720: {
      items: 3,
    },
    480: {
      items: 2,
    },
    0: {
      items: 1,
    },
  },
});

// Enable mixitup
mixitup($('#worksContainer'));

$('#testimonialsCarousel').owlCarousel({
  dots: true,
  items: 1,
  autoplay: true,
  loop: true,
});
