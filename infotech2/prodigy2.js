
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById('about');
    function showAboutSection() {
        aboutSection.classList.add('show');
    }
    function resetAboutSection() {
        aboutSection.classList.remove('show');
    }
    const aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function(event) {
        resetAboutSection();
        setTimeout(showAboutSection, 50);
    });
});
