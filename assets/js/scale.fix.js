(function(document) {
    // 1. Barre de progression & Zoom
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const bar = document.getElementById("myBar");
        if (bar) bar.style.width = scrolled + "%";
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-img')) e.target.classList.toggle('full-zoom');
    });

    // 2. Gestion de la TOC et du Scrollspy
    document.addEventListener("DOMContentLoaded", () => {
        document.body.style.opacity = "1";

        // Déplacer le sommaire à gauche
        const toc = document.getElementById('markdown-toc');
        const target = document.getElementById('sidebar-toc-target');
        if (toc && target) target.appendChild(toc);

        // Scrollspy (Surbrillance)
        const links = document.querySelectorAll('#markdown-toc a');
        const sections = Array.from(links).map(link => document.querySelector(link.hash));

        window.addEventListener('scroll', () => {
            let current = "";
            const fromTop = window.scrollY + 120;

            sections.forEach((section, i) => {
                if (section && section.offsetTop <= fromTop) {
                    current = links[i].hash;
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
                if (link.hash === current) link.classList.add('active');
            });
        });

        // Transition de sortie
        const pageLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
        pageLinks.forEach(link => {
            link.addEventListener("click", e => {
                if (link.hostname === window.location.hostname) {
                    e.preventDefault();
                    document.body.style.transition = "opacity 0.15s";
                    document.body.style.opacity = "0";
                    setTimeout(() => { window.location.href = link.href; }, 150);
                }
            });
        });
    });
})(document);
