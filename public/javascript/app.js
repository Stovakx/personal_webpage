document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
    const collapse = document.getElementById('navbarMenu');
    navbarToggler.addEventListener("click", function () {
        if (navbarTogglerIcon.classList.contains("bi-list")) {
            navbarTogglerIcon.classList.remove("bi-list");
            navbarTogglerIcon.classList.add("bi-x");
            collapse.classList.add('show')
        } else {

            navbarTogglerIcon.classList.remove("bi-x");
            navbarTogglerIcon.classList.add("bi-list");
            collapse.classList.remove('show')
        }

    });
    
    //year calculating
    const yearElement = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    //scroll up button
    // schování/ukázání podle pozice
    function toggleScrollToTopButton() {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    }

    // Function to check if scrolling up or down
    let prevScrollpos = window.scrollY;
    function checkScrollDirection() {
        const currentScrollPos = window.scrollY;
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (prevScrollpos > currentScrollPos) {
            // Scrolling up
            scrollToTopBtn.classList.remove('show');
        } else {
            // Scrolling down
            scrollToTopBtn.classList.add('show');
        }
        prevScrollpos = currentScrollPos;
    }

    // Event listener for scrolling
    window.onscroll = function() {
        toggleScrollToTopButton();
        checkScrollDirection();
    };

});
