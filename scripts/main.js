$(document).ready(function() {
 // toggle responsive menu class
  $(document.body).on('click', '.responsive-dropdown__trigger' ,function(e) {
     e.stopPropagation();
     var $responsiveTriggerBtn = $(this);
     if ($responsiveTriggerBtn.hasClass('open')) {
       $('html, body').css('overflow', 'visible');
       $responsiveTriggerBtn.removeClass('open');
     } else {
       $('html, body').css('overflow', 'hidden');
       $responsiveTriggerBtn.addClass('open');
       $('.responsive-dropdown__menu').animate({scrollTop: 0}, 0);
     }
  });
});
