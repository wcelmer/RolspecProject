
function initMap() {}

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


  // NICE TRANSITIONS PAGE AFTER CLICK SIDEBAR LINKS

  $("#navbarSide a").click(function() {
    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 60 }, "slow");
    return false;
  });

  //CHECKING IS ELEMENT IN VIEVPORT

  function isElementInViewport (el) {
    //ADD WHEN USE JQUERY
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    //
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // IS ANY PART OF ELEMENT IS IN VIEVPORT

  function isAnyPartOfElementInViewport(el) {

    //ADD WHEN USE JQUERY

    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

  //DELEY SHOW CARDS IN #OFFER SECTION
  let chemics = $('#chemics');
  let grounds = $('#grounds');
  let seeds = $('#seeds');
  let carousel = $('#carouselShop');


  $(window).on('scroll', function () {
    if (isAnyPartOfElementInViewport(chemics) === true) {
      chemics.fadeTo( 2500, 1 );
    }
    if (isAnyPartOfElementInViewport(grounds) === true) {
      grounds.fadeTo( 4000, 1 );
    }
    if (isAnyPartOfElementInViewport(seeds) === true) {
      seeds.fadeTo( 5500, 1 );
    }// carouselShop
    if (isAnyPartOfElementInViewport(carousel) === true) {
      carousel.fadeTo( 3000, 1 );
    }
  });


  // Normalize Carousel Heights
  $.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        smallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {

        items.each(function() { //add heights to array
            heights.push($(this).height());
        });
        smallest = Math.min.apply(null, heights); //cache smallest value
        items.each(function() {
            $(this).css('max-height',smallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        smallest = 0;
        heights.length = 0;

        items.each(function() {
          let actuallHeight = $(this).height();
          $(this).css('max-height', actuallHeight * 2 + 'px'); //set max-height
        });
        normalizeHeights(); //run it again
    });
  };

    $(window).on('load', function(){
      $('#carouselShop .carousel-item').carouselHeights();
    });


 // Google Maps
initMap = function() {
        var uluruNedzerzew = {lat: 52.1338361, lng: 19.3058513};
        var uluruWitonia = {lat: 52.146949, lng: 19.294851};
        var uluruGrabow = {lat: 52.1270918, lng: 19.0059362};
        var uluruDaszyna = {lat: 52.155714, lng: 19.182794};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluruDaszyna
        });
        //Marker's Icon
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
