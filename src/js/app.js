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


  // SCROLLING PAGE

  $("#navbarSide a").click(function() {
    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 60 }, "slow");
    return false;
  });



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
