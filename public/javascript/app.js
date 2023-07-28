document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarTogglerIcon = navbarToggler.querySelector(".navbar-toggler-icon");

    navbarToggler.addEventListener("click", function () {
        if (navbarTogglerIcon.classList.contains("bi-list")) {
            navbarTogglerIcon.classList.remove("bi-list");
            navbarTogglerIcon.classList.add("bi-x");
        } else {
            navbarTogglerIcon.classList.remove("bi-x");
            navbarTogglerIcon.classList.add("bi-list");
        }
    });
});
