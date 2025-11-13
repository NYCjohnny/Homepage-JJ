document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling für Navigationslinks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.querySelector('.navbar').offsetHeight; // Höhe der Navbar

            if (targetElement) {
                // Scrolle zur Zielposition, berücksichtige die feste Navbar
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });

                // Schließe die Navbar auf mobilen Geräten nach dem Klick
                const navbarCollapse = document.getElementById('navbarNav');
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                if (navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Optional: Füge hier weitere coole JS-Funktionen hinzu
    // Zum Beispiel eine Animation beim Scrollen, wenn Elemente sichtbar werden
    const skillBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('aria-valuenow');
                progressBar.style.width = width + '%';
                progressBar.style.transition = 'width 1.5s ease-out';
                // optional: Observer nach der Animation beenden
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.7 // Wenn 70% des Elements sichtbar sind
    });

    skillBars.forEach(bar => {
        // Setze die Breite zuerst auf 0, damit die Animation funktioniert
        bar.style.width = '0%';
        observer.observe(bar);
    });

    // Beispiel für einen einfachen Konsolen-Log beim Laden der Seite
    console.log("Website geladen! Willkommen auf meiner Seite.");
});