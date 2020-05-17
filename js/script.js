;(function ($) {
    $(function () {
        $('.slider').slick({
            // autoplay: true,
            // autoplaySpeed: 4000,
            dots: true,
            arrows: false,
            dotsClass: "vertical-dots",

            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            vertical: true
        });
        $('.s3__slider').slick({
            // autoplay: true,
            // autoplaySpeed: 4000,
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });

        $('.nav__project').click(function () {
            $('html, body').animate({
                scrollTop: $('#projects').offset().top
            }, 500);
        });

        $('.scroll').click(function () {
            $('html, body').animate({
                scrollTop: $('#projects').offset().top
            }, 500);
        });

        $('.nav__news').click(function () {
            $('html, body').animate({
                scrollTop: $('#news').offset().top
            }, 500);
        });

        $('.nav__home').click(function () {
            $('html, body').animate({
                scrollTop: $('body').offset().top
            }, 500);
        });

        $('.nav__contact').click(function () {
            $('html, body').animate({
                scrollTop: $('#contact').offset().top
            }, 500);
        });

        $('.nav__gallery').click(function () {
            $('html, body').animate({
                scrollTop: $('.gallery').offset().top
            }, 500);
        });

        $('.logo').click(function () {
            $('html, body').animate({
                scrollTop: $('body').offset().top
            }, 500);
        });
    });


})(jQuery);

let map,
    marker,
    infowindow,
    style,
    coord = {lat: 48.738657, lng: 37.584989};

function initMap() {
    infowindow = new google.maps.InfoWindow({
        content: document.getElementById('map__info').outerHTML
    });

    map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: coord,
            zoom: 16
        }
    );

    marker = new google.maps.Marker({
        position: coord,
        map: map,
        icon: 'img/Contact/Pin.png',
        // animation: google.maps.Animation.BOUNCE
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}
