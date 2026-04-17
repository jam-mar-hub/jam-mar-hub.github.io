(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);

// Fonction pour faire avancer la barre bleue en haut
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var myBar = document.getElementById("myBar");
  if (myBar) {
    myBar.style.width = scrolled + "%";
  }
};

// Script pour le zoom au clic (toggle)
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('zoom-img')) {
    event.target.classList.toggle('full-zoom');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Ajoute une classe 'fade-in' au body au chargement
  document.body.classList.add("page-loaded");

  // Intercepte les clics sur les liens pour faire une sortie en douceur
  const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.href;
      
      document.body.style.opacity = "0";
      document.body.style.transition = "opacity 0.5s ease";
      
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });
});

window.addEventListener('load', () => {
  // Force l'affichage au chargement de la page
  document.body.style.opacity = "1";
  
  // Relance l'effet machine à écrire
  if (typeof typeWriter === "function") {
    typeWriter();
  }
});
