//Button Back to Top
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.documentElement.scrollTop > 200) { // S'affiche après 200px de défilement
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Typed.js configuration
var typed = new Typed('.element', {
    strings: [" développeuse Web.", " en reconversion.", " en recherche d'alternance."],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true
});

// WOW.js initialization
new WOW().init();

// Smooth scrolling for anchor links
$(document).ready(function () {
    $("a").on('click', function (event) {
        // Check if the clicked link has a hash
        if (this.hash !== "") {
            event.preventDefault(); // Prevent default click behavior
            var hash = this.hash; // Store hash value

            // Animate scrolling
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                // Add hash to URL after scrolling
                window.location.hash = hash;
            });
        }
    });

// Sticky header on scroll
$(window).scroll(function () {
    var sticky = $('.header');
    var scroll = $(window).scrollTop();

    if (scroll >= 128) {
        sticky.addClass('fixed');
    } else {
         sticky.removeClass('fixed');
        }
    });
});







