//= ../../node_modules/@fortawesome/fontawesome-free/js/all.js
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/jquery-validation/dist/jquery.validate.js

$(function() {

  $('.header__nav-list').find('.nav-list__link').each(function() {
      $(this).toggleClass('nav-list__link_active', $(this).attr('href') == window.location.pathname);
  });

  $('.menu-button').on('click', function () {
    $(this).toggleClass('menu-button_open');
    $('.header__nav').toggleClass('header__nav_visible');
    $('body').toggleClass('body_fixed');
  });

  function changeHeader(){
    var _height = $('.header').height();
    if ($(window).scrollTop() > _height){
      $('.header').addClass('header_bg');
    } else {
      $('.header').removeClass('header_bg');
    }
  }

  changeHeader();

  $(window).on('scroll', function() {
    changeHeader();
  });

  // $('.js-form-control').on('change focus', function(){
  //   $(this).parent().find('.form__placeholder').addClass('form__placeholder--active');
  // });
  //
  // $('.js-form-control').on('blur', function(){
  //   if (!$(this).val()){
  //     $(this).parent().find('.form__placeholder').removeClass('form__placeholder--active');
  //   }
  // });
  //
  // $('.js-contact-btn').on('click', function (e) {
  //     var _target = $('.js-form-contact');
  //
  //     if( _target.length ) {
  //         e.preventDefault();
  //
  //         if ($('.header__nav_visible').length) {
  //             $('.menu-button').toggleClass('menu-button_open');
  //             $('.header__nav').toggleClass('header__nav_visible');
  //             $('body').toggleClass('body_fixed');
  //         }
  //
  //         $('html, body').animate({
  //             scrollTop: _target.offset().top
  //         }, 500);
  //     }
  // });
  //
  //   $(".js-form-contact").validate({
  //       rules: {
  //           name: "required",
  //           email: "required"
  //       },
  //       messages: {
  //           name: "This field is required",
  //           email: "This field is required"
  //       },
  //       highlight: function(element, errorClass) {
  //           return false;
  //       },
  //       submitHandler: function () {
  //           $('.form__input').val('');
  //           $('.form__input').blur();
  //           $('.form__footer').append('<div class="form__output">Your message has been sent.</div>');
  //           setTimeout(function() {
  //               $('.form__output').remove();
  //           }, 3000);
  //       }
  //   });

  $('[data-carousel-item]').on('click', function(e) {
    e.preventDefault();
    $('.carousel__item_active').removeClass('carousel__item_active');
    $("[data-carousel-panel]").fadeOut();
    $(this).parent('.carousel__item').addClass('carousel__item_active');
    $("[data-carousel-panel='" + $(this).data('carousel-item') + "']").fadeIn();
  });

});
