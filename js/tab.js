$(document).ready(function () {
  
  $('.tab-nav li:first-child').addClass('active-tab');
  $('.tab-content').hide();
  $('.tab-content:first').show();

  $('.tab-nav li').click(function () {
    $('.tab-nav li').removeClass('active-tab');
    $(this).addClass('active-tab');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();

    return false;
  })

})