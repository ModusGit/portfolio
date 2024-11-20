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

// Sélectionnez tous les liens de filtre
const filters = document.querySelectorAll('.filter');

// Sélectionnez tous les projets
const projects = document.querySelectorAll('.project');

// Ajoutez un événement de clic à chaque lien de filtre
filters.forEach(filter => {
    filter.addEventListener('click', event => {
        event.preventDefault(); // Empêche le comportement par défaut de l'ancre

        // Récupérez le filtre sélectionné
        const filterType = filter.getAttribute('data-filter');

        // Montrez ou cachez les projets
        projects.forEach(project => {
            if (filterType === 'all') {
                // Montrez tous les projets
                project.style.display = 'block';
            } else if (project.classList.contains(filterType)) {
                // Montrez les projets correspondant au filtre
                project.style.display = 'block';
            } else {
                // Cachez les autres projets
                project.style.display = 'none';
            }
        });
    });
});








