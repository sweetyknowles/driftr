$(document).ready(function () {

  $("#LanderImg").hide();

  $("#LanderImg").fadeIn(3500);

  $("#LanderImg").click(function () {
    $('html, body').animate({
      scrollTop: $("#cityImage").offset().top
    }, 1200);

    $("#NavBarAbout").click(function () {
      $('html, body').animate({
        scrollTop: $("#FootTarget").offset().top
      }, 2500)
    })

    $("#NavBarCities").click(function () {
      $('html, body').animate({
        scrollTop: $("#cityImage").offset().top
      }, 1200)
    })

    
    });

  });