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
});
