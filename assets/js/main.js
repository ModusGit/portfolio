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


//SECTION SKILLS
document.addEventListener('DOMContentLoaded', () => {
    const logosContainer = document.getElementById('logos-container');
    if (!logosContainer) {
        console.error("Erreur : L'élément avec l'ID 'logos-container' est introuvable.");
        return;
    }
  
    const data = {
      stack: [
        { src: 'assets/images/icons/html5.svg', alt: 'html 5' },
        { src: 'assets/images/icons/css3.svg', alt: 'css' },
        { src: 'assets/images/icons/javascript.svg', alt: 'javascript' },
        { src: 'assets/images/icons/php.svg', alt: 'php' },
        { src: 'assets/images/icons/symfony.svg', alt: 'symfony' },
        { src: 'assets/images/icons/laravel.svg', alt: 'laravel' },
        { src: 'assets/images/icons/react.svg', alt: 'react' },
        { src: 'assets/images/icons/mysql.svg', alt: 'my sql' },
        { src: 'assets/images/icons/go.svg', alt: 'golang' },
        { src: 'assets/images/icons/swift.svg', alt: 'swift' },
      ],
      tools: [
        { src: 'assets/images/icons/vscode.svg', alt: 'vs code' },
        { src: 'assets/images/icons/phpstorm.svg', alt: 'php storm' },
        { src: 'assets/images/icons/xcode.svg', alt: 'x code' },
        { src: 'assets/images/icons/jest.svg', alt: 'jest' },
        { src: 'assets/images/icons/postman.svg', alt: 'postman' },
        { src: 'assets/images/icons/supabase.svg', alt: 'supabase' },
        { src: 'assets/images/icons/git.svg', alt: 'git' },
        { src: 'assets/images/icons/github.svg', alt: 'github' },
        { src: 'assets/images/icons/docker.svg', alt: 'docker' },
        { src: 'assets/images/icons/figma.svg', alt: 'figma' },
        { src: 'assets/images/icons/trello.svg', alt: 'trello' },
        { src: 'assets/images/icons/notion.svg', alt: 'notion' },
        { src: 'assets/images/icons/slack.svg', alt: 'slack' }
      ],
      skills: [
        { src: 'assets/images/icons/team-work.svg', alt: 'Travail en équipe' },
        { src: 'assets/images/icons/gears.svg', alt: 'Adaptabilité/Polyvalence' },
        { src: 'assets/images/icons/eye.svg', alt: 'Curiosité intellectuelle' },
        { src: 'assets/images/icons/comments.svg', alt: 'Sociabilité' },
        { src: 'assets/images/icons/face-smile.svg', alt: 'Positivité' }
      ]
    };
  
    document.getElementById('stack').addEventListener('click', () => {
      renderLogos(data.stack);
    });
  
    document.getElementById('tools').addEventListener('click', () => {
      renderLogos(data.tools);
    });
  
    document.getElementById('soft-skills').addEventListener('click', () => {
      renderLogos(data.skills);
    });
  
    function renderLogos(logos) {
      logosContainer.innerHTML = '';
      logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo.src;
        img.alt = logo.alt;
        img.className = 'logo';
        logosContainer.appendChild(img);
      });
    }
  });
  

//SECTION PROJECTS
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
  








