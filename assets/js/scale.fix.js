(function(document) {
    // --- 1. CORRECTIF VIEWPORT IPHONE ---
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

    // --- 2. BARRE DE PROGRESSION (SCROLL) ---
    window.addEventListener('scroll', function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        var myBar = document.getElementById("myBar");
        if (myBar) {
            myBar.style.width = scrolled + "%";
        }
    });

    // --- 3. ZOOM AU CLIC ---
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('zoom-img')) {
            event.target.classList.toggle('full-zoom');
        }
    });

    // --- 4. TRANSITIONS FLUIDES & MACHINE À ÉCRIRE ---
    document.addEventListener("DOMContentLoaded", () => {
      // 1. Déplacer le sommaire dans la barre latérale
      const toc = document.getElementById('markdown-toc');
      const target = document.getElementById('sidebar-toc-target');
      
      if (toc && target) {
        target.appendChild(toc);
      }
    
      // 2. Gestion de la surbrillance (Scrollspy)
      window.addEventListener('scroll', () => {
        let navigationLinks = document.querySelectorAll('#markdown-toc li a');
        let fromTop = window.scrollY + 100;
    
        navigationLinks.forEach(link => {
          try {
            let section = document.querySelector(link.hash);
            if (section) {
              if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            }
          } catch (e) {}
        });
      });
    });

    // Sécurité supplémentaire pour l'affichage
    window.addEventListener('load', () => {
        document.body.style.opacity = "1";
    });

})(document);

// --- 5. FONCTION TYPEWRITER ---
function typeWriter() {
  const element = document.getElementById("typewriter-title");
  if (!element) return;

  const text = element.getAttribute("data-text");
  if (!text) return;

  let i = 0;
  element.innerHTML = ""; 

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 60); // Vitesse d'écriture nerveuse (60ms)
    }
  }
  type();
}


window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('#markdown-toc li a');
  let fromTop = window.scrollY + 100;

  navigationLinks.forEach(link => {
    // Essaie de trouver la section correspondante
    let section = document.querySelector(link.hash);

    // Si la section existe sur la page, on calcule sa position
    if (section) {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});
