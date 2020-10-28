/*Выпадающее меню*/

$(document).ready(function() {
  $('.header__menu').click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.header-mobile').removeClass('active');
      $('body').removeClass('ov-hid');
    } else {
      $(this).addClass('active');
      $('.header-mobile').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
});

/*Табы*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.calendar__wrapper');
    tabContainers.hide().filter(':first').show();
    $('.calendar__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.calendar__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Выпадающее меню №2*/

$(document).ready(function() {
  $('.calendar__info-menu').click(function(){
    $(this).next().addClass('active')
  });
  $('.calendar__dd-item').click(function(){
    $('.calendar__dd').removeClass('active');
    let src = $(this).children('.calendar__dd-country').children().attr('src');
    let type = $(this).children('.calendar__dd-type').text();
    $(this).parent().prev().prev().children().attr('src', src);
    $(this).parent().prev().prev().prev().text(type);
  });
});