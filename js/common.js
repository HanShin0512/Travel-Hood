$(document).ready(function () {

  //change navbar color
  const isFixed = $('.wrapper').hasClass('fixed-nav-color');
  var scroll_start = 0;
  var mv_height = $('.sc-mv').offset().top + $('.sc-mv').outerHeight();

  $(document).scroll(function () {
    if (!isFixed) {
      scroll_start = $(this).scrollTop();
      if (scroll_start > mv_height) {
        $('header').addClass('color-change');
        $('header h1 img').attr('src', '/img/common/Ico-nav-logo-blue.svg');
      } else {
        $('header').removeClass('color-change');
        $('header h1 img').attr('src', '/img/common/Ico-nav-logo.svg');
      }
    }
  });

  //open side navbar
  let isMenuOpen = false;

  $('.menu-ico').click(function () {
    if (!isMenuOpen) {
      $('.gnav').animate({ right: '0' }, 500);
    } else {
      $('.gnav').animate({ right: '-1000px' }, 500);
    }

    $('.menu-ico .hamburger-line').toggleClass('active-nav');
    isMenuOpen = !isMenuOpen;
  });

})