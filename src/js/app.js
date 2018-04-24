// Google Maps
$( document ).ready(function() {
    console.log( "ready!" );


  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').addClass('reveal')
  });

  // Open navbarSide when button is clicked
  $('#navbarSideButton').on('click', function() {
    $('#navbarSide').addClass('reveal');
    $('.overlay').show();
  });

  // Close navbarSide when the outside of menu is clicked
  $('.overlay').on('click', function(){
    $('#navbarSide').removeClass('reveal');
    $('.overlay').hide();
  });


  // NICE TRANSITIONS PAGE AFTER CLICK SIDEBAR NAVS

  $("#navbarSide a").click(function() {
    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 60 }, "slow");
    return false;
  });

  //CHECKING IS ELEMENT IN VIEVPORT

  function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  //DELEY SHOW DIVS IN #OFFER SECTION
  let tittle = $('#offer span')
  let chemics = $('#chemics');
  let grounds = $('#grounds');
  let seeds = $('#seeds');

  function slide(el) {
    el.animate({"left":"100px"}, "slow").animate({"left":"-100px"}, "slow").stop();
  }


  $(window).on('scroll', function () {
    if (isElementInViewport(tittle) === true) {
      chemics.delay(500).fadeIn(1500);
      grounds.delay(2300).fadeIn(1500);
      seeds.delay(4300).fadeIn(1500);
    }
  })



function initMap() {
        var uluruNedzerzew = {lat: 52.1338361, lng: 19.3058513};
        var uluruWitonia = {lat: 52.146949, lng: 19.294851};
        var uluruGrabow = {lat: 52.1270918, lng: 19.0059362};
        var uluruDaszyna = {lat: 52.155714, lng: 19.182794};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluruDaszyna
        });
        //Markre's Icon
        var florist = '../icons/florist_small.png';
        var home = '../icons/home_big.png';
        var markerNedz = new google.maps.Marker({
          position: uluruNedzerzew,
          map: map,
          icon: home
        });
        var markerWit = new google.maps.Marker({
          position: uluruWitonia,
          map: map,
          icon: florist
        });
        var markerGrab = new google.maps.Marker({
          position: uluruGrabow,
          map: map,
          icon: florist
        });
        var markerDasz = new google.maps.Marker({
          position: uluruDaszyna,
          map: map,
          icon: florist
        });
      }

  initMap();


});






//
