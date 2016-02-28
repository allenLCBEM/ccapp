
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng( 51.524135,-0.073760));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng( 51.524135,-0.073760), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
    {
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.8
            },
            {
                "lightness": 4
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#5dff00"
            },
            {
                "gamma": 4.97
            },
            {
                "lightness": -5
            },
            {
                "saturation": 100
            }
        ]
    }
]

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    var infowindow = new google.maps.InfoWindow();

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var myimage = { url: 'img/Geek-Label-Brand.png',
                    scaledSize: new google.maps.Size(70, 30), 
                  };
    var myLatLng = {lat: 51.524135, lng:-0.073760};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: myimage
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
