$(document).ready(function() {
  // toggle responsive menu class
  $(document.body).on('click', '.c-header__hamburger', function(e) {
    e.stopPropagation();
    if ($('html').hasClass('menu-open')) {
      $('.header__logo').removeClass('header__logo--dark');
      $('.header__signup')
        .removeClass('o-primary-btn')
        .addClass('o-secondary-outline-btn');
    } else {
      $('.header__logo').addClass('header__logo--dark');
      $('.header__signup')
        .removeClass('o-secondary-outline-btn')
        .addClass('o-primary-btn');
    }

    $('html').toggleClass('menu-open');
  });
});
