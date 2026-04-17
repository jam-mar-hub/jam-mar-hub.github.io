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

    // 2. Transitions de page
    document.addEventListener("DOMContentLoaded", () => {
        document.body.style.opacity = "1";

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
