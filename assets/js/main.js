//Button Back to Top
window.onscroll = function() {
    const button = document.querySelector('.back-to-top');
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

//Typed.js configuration
var typed = new Typed('.element', {
    strings: [" développeuse Web.", " en reconversion.", " en recherche d'alternance."],
    typeSpeed: 100,
    smartBackspace: true,
    loop: true
});

//WOW.js initialization
new WOW().init();

//Smooth scrolling for anchor links
$(document).ready(function () {
    $("a").on('click', function (event) {
        // Check if the clicked link has a hash
        if (this.hash !== "") {
            event.preventDefault(); // Prevent default click behavior
            var hash = this.hash; // Store hash value

            //Animate scrolling
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                //Add hash to URL after scrolling
                window.location.hash = hash;
            });
        }
    });

//Sticky header on scroll
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
        { src: 'assets/images/icons/html5.svg', alt: 'html 5', content: '<strong>HTML 5</strong></br> Langage de balisage structuré pour le web.' },
        { src: 'assets/images/icons/css3.svg', alt: 'css', content: '<strong>CSS 3</strong></br> Langage de style pour la mise en page.' },
        { src: 'assets/images/icons/javascript.svg', alt: 'javascript', content: '<strong>JavaScript</strong></br> Langage de programmation pour le web dynamique.' },
        { src: 'assets/images/icons/php.svg', alt: 'php', content: '<strong>PHP</strong></br> Langage de script côté serveur.' },
        { src: 'assets/images/icons/mysql.svg', alt: 'my sql', content: '<strong>MySQL</strong></br> Base de données relationnelle.' },
        { src: 'assets/images/icons/go.svg', alt: 'golang', content: '<strong>Golang</strong></br> Langage de programmation compilé.' },
        { src: 'assets/images/icons/swift.svg', alt: 'swift', content: '<strong>Swift</strong></br> Langage pour le développement iOS.' },
        { src: 'assets/images/icons/symfony.svg', alt: 'symfony', content: '<strong>Symfony</strong></br> Framework PHP moderne.' },
        { src: 'assets/images/icons/laravel.svg', alt: 'laravel', content: '<strong>Laravel</strong></br> Framework PHP pour le développement rapide.' },
        { src: 'assets/images/icons/react.svg', alt: 'react', content: '<strong>React</strong></br> Bibliothèque JavaScript pour les interfaces utilisateurs.' }
      ],
      tools: [
        { src: 'assets/images/icons/vscode.svg', alt: 'vs code', content: '<strong>VS Code</strong></br> Éditeur de code léger et puissant pour le développement web.' },
        { src: 'assets/images/icons/phpstorm.svg', alt: 'php storm', content: '<strong>PhpStorm</strong></br> IDE complet pour le développement PHP et les frameworks associés.' },
        { src: 'assets/images/icons/xcode.svg', alt: 'x code', content: '<strong>Xcode</strong></br> IDE officiel pour le développement macOS et iOS.' },
        { src: 'assets/images/icons/jest.svg', alt: 'jest', content: '<strong>Jest</strong></br> Framework de test JavaScript pour assurer la robustesse des applications.' },
        { src: 'assets/images/icons/postman.svg', alt: 'postman', content: '<strong>Postman</strong></br> Outil pratique pour tester et développer des API.' },
        { src: 'assets/images/icons/supabase.svg', alt: 'supabase', content: '<strong>Supabase</strong></br> Alternative open-source à Firebase pour les bases de données et l\'authentification.' },
        { src: 'assets/images/icons/git.svg', alt: 'git', content: '<strong>Git</strong></br> Système de contrôle de version distribué.' },
        { src: 'assets/images/icons/github.svg', alt: 'github', content: '<strong>GitHub</strong></br> Plateforme de collaboration et de gestion de code source basée sur Git.' },
        { src: 'assets/images/icons/docker.svg', alt: 'docker', content: '<strong>Docker</strong></br> Plateforme de conteneurisation pour des environnements reproductibles.' },
        { src: 'assets/images/icons/figma.svg', alt: 'figma', content: '<strong>Figma</strong></br> Outil de design collaboratif pour les interfaces utilisateur.' },
        { src: 'assets/images/icons/trello.svg', alt: 'trello', content: '<strong>Trello</strong></br> Gestion de projets en kanban pour organiser mes tâches.' },
        { src: 'assets/images/icons/notion.svg', alt: 'notion', content: '<strong>Notion</strong></br> Outil tout-en-un pour ma gestion de projets et la documentation.' },
        { src: 'assets/images/icons/slack.svg', alt: 'slack', content: '<strong>Slack</strong></br> Plateforme de communication collaborative pour les équipes.' }
    ],
      skills: [
        { src: 'assets/images/icons/team-work.svg', alt: 'Travail en équipe', content: '<strong>Collaborer</strong> efficacement en équipe.' },
        { src: 'assets/images/icons/gears.svg', alt: 'Adaptabilité/Polyvalence', content: '<strong>S’adapter</strong> à divers contextes et projets.' },
        { src: 'assets/images/icons/eye.svg', alt: 'Curiosité intellectuelle', content: 'Toujours <strong>apprendre</strong> et explorer de nouvelles idées.' },
        { src: 'assets/images/icons/comments.svg', alt: 'Sociabilité', content: '<strong>Interagir</strong> facilement avec les autres.' },
        { src: 'assets/images/icons/face-smile.svg', alt: 'Positivité', content: 'Apporter de l’<strong>enthousiasme</strong> au travail.' }
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
      logos.forEach((logo, index) => {
        // Create container for image and content
        const logoItem = document.createElement('div');
        logoItem.className = 'logo-item';

        //Create image
        const img = document.createElement('img');
        img.src = logo.src;
        img.alt = logo.alt;
        img.className = 'logo';
        img.style.cursor = 'pointer';

        //Create linked content
        const content = document.createElement('div');
        content.id = `content-${index}`;
        content.className = 'logo-content';
        content.innerHTML = logo.content;
        content.style.display = 'none';

        //Add click event for toggle
        img.addEventListener('click', () => {
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });

        //Add image and content to container
        logoItem.appendChild(img);
        logoItem.appendChild(content);

        // Add the container to the main logosContainer
        logosContainer.appendChild(logoItem);
      });
    }
  });
  

//SECTION PROJECTS
//Select all filter links
const filters = document.querySelectorAll('.filter');

//Select all projects
const projects = document.querySelectorAll('.project');

//Add a click event to each filter link
filters.forEach(filter => {
    filter.addEventListener('click', event => {
        event.preventDefault(); //Prevents the default anchor behavior

        //Get the selected filter
        const filterType = filter.getAttribute('data-filter');

        //Show or hide projects
        projects.forEach(project => {
            if (filterType === 'all') {
                //Show all projects
                project.style.display = 'block';
            } else if (project.classList.contains(filterType)) {
                //Show projects matching the filter
                project.style.display = 'block';
            } else {
                //Hide the others projects
                project.style.display = 'none';
            }
        });
    });
});








